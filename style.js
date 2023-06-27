var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;


function myResult(){


// when we change the input and output type vale we need to updata the 
// option_from and option_to

	option_from = inputType.value;
	option_to = resultType.value;


// now compare the input and resultType value and add formula

	if(option_from === "meter" && option_to==="kilometer"){
		//this is meter to kilometer formula 
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "meter" && option_to==="Centimeter"){
        
        //this is meter to Centimeter formula 
		result.value = Number(input.value) * 100;

	}else if(option_from === "meter" && option_to==="meter"){
		//this is meter to meter formula 
		result.value = input.value
	}else if(option_from === "meter" && option_to==="Inch"){
        //this is meter to inch formula 
        result.value = Number(input.value) *  39.37;
    }else if(option_from === "meter" && option_to==="Feet"){
        //this is meter to Feet formula 
        result.value = Number(input.value) *  3.281;
    }



	if(option_from === "kilometer" && option_to==="meter"){
		//this is kilometer to meter formula 
		result.value = Number(input.value) * 1000;
	}else if(option_from === "kilometer" && option_to==="Centimeter"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) * 100000;
	}else if(option_from === "kilometer" && option_to==="kilometer"){
		//this is kilometer to kilometer formula 
		result.value = input.value
	}else if(option_from === "kilometer" && option_to==="Inch"){
		//this is kilometer to kilometer formula 
		result.value = Number(input.value) * 39370.1;
	}else if(option_from === "kilometer" && option_to==="Feet"){
		//this is kilometer to kilometer formula 
		result.value = Number(input.value) * 3680.82;
         
	}

	if(option_from === "Centimeter" && option_to==="kilometer"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 0.00001;
	}else if(option_from === "Centimeter" && option_to==="meter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.01;
	}else if(option_from === "Centimeter" && option_to==="Centimeter"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
	}else if(option_from === "Centimeter" && option_to==="Inch"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) / 2.54;
	}else if(option_from === "Centimeter" && option_to==="Feet"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 30.48;
	}
	
    if(option_from === "Inch" && option_to==="kilometer"){
		//this is Inch to kilometer formula 
		result.value = Number(input.value) * 2.54e-5;
	}else if(option_from === "Inch" && option_to==="meter"){
        //this is Inch to meter formula 
		result.value = Number(input.value) /39.37;
	}else if(option_from === "Inch" && option_to==="Centimeter"){
        //this is Inch to Centimeter formula 
		result.value = Number(input.value) * 2.54;
	}else if(option_from === "Inch" && option_to==="Inch"){
        //this is Inch to meter formula 
		result.value = input.value
	}else if(option_from === "Inch" && option_to==="Feet"){
		//this is Inch to meter formula 
		result.value = Number(input.value) / 12;
	}

    if(option_from === "Feet" && option_to==="kilometer"){
		//this is Feet to kilometer formula 
		result.value = Number(input.value) / 3281;
	}else if(option_from === "Feet" && option_to==="meter"){
		//this is Feet to meter formula 
		result.value = Number(input.value) / 3.281;
	}else if(option_from === "Feet" && option_to==="Centimeter"){
		//this is Feet to Centimeter formula 
		result.value = Number(input.value) * 30.48
	}else if(option_from === "Feet" && option_to==="Inch"){
		//this is Feet to meter formula 
		result.value = Number(input.value) *12
	}else if(option_from === "Feet" && option_to==="Feet"){
		//this is Feet to meter formula 
		result.value = input.value
	}





}
