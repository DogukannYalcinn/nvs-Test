const Admin = require('../models/admin');
const User = require('../models/user')

exports.getLogin =(req,res,next)=>{
    res.render('adminLogin', {
        error:null
    });
}

exports.postLogin = (req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    Admin.checkAdmin(username,password).then(user=>{
        if(!user){
           return  res.render('adminLogin', {
                error:'Password or username wrong'
            });
        }
        Admin.getStopRecords().then(records=>{
          const stopRecords =  records.map(record=>{
                return {...record,stopTime:new Date(record.stopTime).toLocaleString(),startTime:new Date(record.startTime).toLocaleString()}
            })
            res.render('admin',{records:stopRecords});
        });
    });
}