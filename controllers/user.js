const User = require('../models/user')

exports.getLogIn = (req,res,next)=>{
    res.render('index', {
        error:null
    });
}

exports.postLogIn = (req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;

   User.checkUser(username,password).then(user=>{
       if(!user){
          return  res.render('index', {
               error:'Password or username wrong'
           });
       }
       User.getReasonCodes().then(codes=>{
           res.render('stop', {
               userId:user._id,
               pcName:user.pcName,
               codes:codes
           });
       })

   }).catch(err=>console.log(err));

}

exports.postStopPage = (req,res,next)=>{
    // const stopTime = req.body.stopTime.slice(0, 19).replace("T", " ");
    // const startTime = req.body.startTime.slice(0, 19).replace("T", " ");
    const stopTime = req.body.stopTime;
    const startTime = req.body.startTime;
    const pcName = req.body.pcName;
    const userId = req.body.userId;
    const reasonCode = req.body.dropdown;

    User.createStopRecord(userId,stopTime,reasonCode,startTime,pcName).then(result=>{
        res.redirect('/');
    }).catch(err=>console.log(err));

}

exports.getStopReasons= (req,res,next)=>{

    User.getStopRecords().then(results=>{
        res.render('admin', {
            records:results[0]
        });
    }).catch(err=>console.log(err))
}


