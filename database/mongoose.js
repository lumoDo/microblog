var mongoose = require("mongoose");
// var db=mongoose.createConnection("localhost","text");

// db.on("error",console.error.bind(console),"连接错误");
// db.once("open",function(){
// 	console.log('once');
// });
var db=mongoose.connect("mongodb://localhost/text");//连接数据库
var Schema = mongoose.Schema;//创建模型
var userScheMa= new Schema({
	name:String,
	password:String
});//订阅了一个新的模型，但是还不能传到数据库
exports.user = db.model('users',userScheMa);