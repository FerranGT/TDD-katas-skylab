function passwordValidation(password) {

	if(password.match(/[A-Z]/g)!=null){return "true";}
	if(password.match(/[0-9]/g)!=null){
		if(password.match(/[0-9]/g).length>1){return "true";}
	}
	if(password.match(/[$#%&?\!\-]/g)!=null){return "true";}
	if(password.length>9){return "true";}
	return "false";
}
	