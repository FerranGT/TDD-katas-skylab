function Gradebook(a,b,c) {
	var score = (a+b+c)/Gradebook.length;
	if (score>=90 && score<=100){
		return "A";
	}
	if (score>=80 && score<=90){
		return "B";
	}
	if (score>=70 && score<=80){
		return "C";
	}
	if (score>=60 && score<=70){
		return "D";
	}
	if (score>=0 && score<=60){
		return "F";
	}
}
	