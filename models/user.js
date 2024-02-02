const db = require('../util/database');
class User{
    constructor(id,username,password,pcName) {
        this.id=id;
        this.username=username;
        this.password=password;
        this.pcName = pcName;
    }

   static checkUser(username,password){
       return db.execute('SELECT * FROM users where username =? and password=? ',[username,password])
    }

    static getReasonCodes(){
        return db.execute('SELECT * FROM stopreasons');
    }

    static createStopRecord(userId,stopTime,reasonCode,startTime,pcName){
        return db.execute('INSERT INTO stoprecords (`UserID`,`StopTime`, `StopReasonCode`, `StartTime`, `PCName`) VALUES (?,?, ?, ?, ?)',[userId,stopTime,reasonCode,startTime,pcName]);
    }

    static getStopRecords(){
        return db.execute(`SELECT st.id,st.StopTime,st.StopReasonCode,st.StartTime,st.PCName,us.username FROM stoprecords as st INNER JOIN users as us ON st.UserID = us.id`);
    }
}

module.exports = User;