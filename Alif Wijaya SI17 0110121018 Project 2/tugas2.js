
function konversiuang() {
	var input = (document.form.nilai.value);
	var hitunguang = (document.form.uangasing.value);
	
	var hasil = 0;

	if(hitunguang == "USD"){
		hasil = input*9915;
	}
	else if(hitunguang == "SGD"){
		hasil = input*13472;
	}
	else if(hitunguang == "RM"){
		hasil = input*874;
	}
	else if(hitunguang == "YJ"){
		hasil = input*120;
	}
	else if(hitunguang == "ER"){
		hasil = input*15888;
	}
    else if(hitunguang == "RAS"){
		hasil = input*3592;
	}
	else{
		hasil = 0;
	}

	document.form.kurs.value=eval(hasil);	
} 
