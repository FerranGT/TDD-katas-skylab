function passwordValidation(password) {

	config = {
	    size : 10,
	    uppercase : 1,
	    numbers : 2,
	    special : "$#%&-!?"
	};

	if(password.match(/[A-Z]/g)!=null){//if(password.match(/[A-Z]/g)){ aixi tb funiona
		if(password.match(/[A-Z]/g).length>=config.uppercase){
		return "true";
		}
	}
	if(password.match(/[0-9]/g)!=null){
		if(password.match(/[0-9]/g).length>=config.numbers){
			return "true";
		}
	}
	//if(password.match(/[$#%&?\!\-]/g)!=null){

	if(password.match(config['special'])!==null){
		return "true";
	}
	if(password.length>=config.size){
		return "true";
	}
	return "false";
}
	