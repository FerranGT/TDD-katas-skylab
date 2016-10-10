function passwordValidation(password,extraconfig) { //passwordValidation("pa33sFdd",config = {size : 12, uppercase : 2, numbers : 3, special : "fgt"})

	 var config = {
	    size : 10,
	    uppercase : 1,
	    numbers : 2,
	    special : "$#%&-!?"
	};

	var counter=[0,0,0,0];
	console.log(typeof extraconfig);
	if(typeof extraconfig!="undefined"){
		config.size=extraconfig.size;
		config.uppercase=extraconfig.uppercase;
		config.numbers=extraconfig.numbers;
		config.special=extraconfig.special;
		console.log(config);
	}
	if(password.match(/[A-Z]/g)!=null){//if(password.match(/[A-Z]/g)){ aixi tb funiona
		if(password.match(/[A-Z]/g).length>=config.uppercase) counter[0]=1;	
	}
	if(password.match(/[0-9]/g)!=null){
		if(password.match(/[0-9]/g).length>=config.numbers) counter[1]=1;
	}
	//if(password.match(/[$#%&?\!\-]/g)!=null){ // match no funciona con variables tenemos que usar includes

	password.split("").forEach( function( char ) {//le pasamos la variable char que es la posicion del array que va haciendo el bucle, for each puede pasar element, index, array, usamos el parametro element que es el contenido del array en cada vuelta del bucle array[0] array[1] array[2] ...., char son todos los elementos del array password 
		if ( (config.special).includes(char) ) counter[2]=1; // true || false
	})
	if(password.length>=config.size) counter[3]=1;
	console.log(counter);
	if(counter[0]==1 && counter[1]==1 && counter[2]==1 && counter[3]==1)return true;
	return false;
}