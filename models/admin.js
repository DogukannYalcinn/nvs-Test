const {getDb}= require('../util/database');

class Admin {
    constructor(username,password) {
        this.username = username;
        this.password = password
    }

    static getStopRecords(){
        const db = getDb();
        return db.collection('stopRecords').find({}).toArray()
    }

    static checkAdmin(username,password){
        const db = getDb();
        return db.collection('admin').findOne({username:username,password:password})
    }
}

module.exports = Admin;