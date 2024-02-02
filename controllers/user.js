const User = require('../models/user')

exports.getLogIn = (req,res,next)=>{
    res.render('index', {
        error:null
    });
}

exports.postLogIn = (req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;

   User.checkUser(username,password).then(result=>{
       if(result[0].length === 0){
           res.render('index', {
               error:'Password or username wrong'
           });
       }else{
           User.getReasonCodes().then(codes=>{
               res.render('stop', {
                   userId:result[0][0].id,
                   pcName:result[0][0].pcName,
                   codes:codes[0]
               });
           })
       }
   }).catch(err=>console.log(err));

}

exports.postStopPage = (req,res,next)=>{
    const stopTime = req.body.stopTime.slice(0, 19).replace("T", " ");
    const startTime = req.body.startTime.slice(0, 19).replace("T", " ");
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


