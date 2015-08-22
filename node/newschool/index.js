var klass=require('./klass');


exports.add=function (klasses) {
	// body...
	klasses.forEach(function(item,index){
		var _klass=item;
		var teachername=item.teachername;
		var students=item.students;
		klass.add(teachername,students)

	})
}
