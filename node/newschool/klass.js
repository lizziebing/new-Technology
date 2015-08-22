var student=require('./student');
var teacher=require('./teacher');

teacher.add('liz');

function add(teachername,students)
{
	teacher.add(teachername);

	students.forEach(function(item,index){
		student.add(item)
	})
}
exports.add=add;//传统模块实例
module.exports=add;//特殊模块类型，真实存在的东西