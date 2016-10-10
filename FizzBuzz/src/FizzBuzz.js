function FizzBuzz() {
	var myarray=[];
	myarray.length = 100;
	myarray.fill(0);
	var fullarray=myarray.map(function(elem,index){
		if(index==0) return;
		if(index%3==0 && index%5==0) return elem="FizzBuzz";
		if(index%3==0) return elem="Fizz";
		if(index%5==0) return elem="Buzz";
		var elem2=index.toString();
		if(elem2.indexOf("3") != -1) return elem="Fizz";
		if(elem2.indexOf("5") != -1) return elem="Buzz";
		return elem=index;
	})
	return fullarray.join(" \n");
}
	