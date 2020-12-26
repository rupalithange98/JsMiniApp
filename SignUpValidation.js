
let validateForm = () => 
{


	 var isFormValid =  validateCheck()
                        && validateEmail()
	 					&& validateConfirmPassword()
	 					&& validateBothPassword()
	 					&& validatePassword ()
                        &&  validateBirth();

    					


		var fname=document.getElementById('fname').value;
		var lname=document.getElementById('lname').value;
		var emailId=document.getElementById('email').value;
		var dob=document.getElementById('dob').value;
		var gen=document.getElementsByName('gender');
		for(var i = 0; i < gen.length; i++) {
                 if(gen[i].type="radio") {
                 
                    if(gen[i].checked)
                        var genCheck= gen[i].value;
                  		}
           			 }
		var pwd=document.getElementById('pwd').value;
		var cpwd=document.getElementById('cpwd').value;


   
                

    if(isFormValid)
    {
         
         alert('Form is Submitted Successfully');
         alert("You can Login now...");
				var userArray=JSON.parse(localStorage.getItem("userList"));

				if(userArray == null)
					{
						userArray=[];
					}
				
				var obj={First:fname,Last:lname,Email:emailId,DOB:dob,Gender:genCheck,Pass:pwd,
                    CPass:cpwd,Status:"Activate"};
				userArray.push(obj);

				localStorage.setItem("userList",JSON.stringify(userArray));
				
        return true;
    }
    else {
		alert("Couldn't Register...Check required Fields");
        return false;
    }
};


var validateEmail = () => 
	{
		var emailId=document.getElementById('email').value;
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

			if(reg.test(email.value)== false)
			{
				alert("InValid Email Address..."+emailId)
				return false;
			}else{
				alert("Valid Email Address..."+emailId);
				return true;
			}

	}


var validatePassword = () => {
   	var pwd=document.getElementById('pwd').value;
    if(pwd === ''){
        // applyColors(pwd);
        alert('Required Password');
        return false;
    }
    else{
        // removeColors(pwd);
        return true;
    }
};

// Confirm Password Validation
var validateConfirmPassword = () => {
  	var cpwd=document.getElementById('cpwd').value;
    if(cpwd === ''){
        // applyColors(cpwd);
        alert('Required Confirm Password');
        return false;
    }
    else{
        // removeColors(cpwd);
        return true;
    }
};
var validateBothPassword = () =>
 {
 	 	var pwd=document.getElementById('pwd').value;
		var cpwd=document.getElementById('cpwd').value;
    		
    		if(pwd !== cpwd)
    		{
        		// applyColors(pwd);
        		// applyColors(cpwd);
        		alert("Password is not matched...");
       		 return false;
    		}
    else{
        // removeColors(pwd);
        // removeColors(cpwd);
        alert("Password is  matched...");
        return true;
    }
};

var validateBirth=()=>
{
    var dob=document.getElementById('dob').value;
    var today=new Date();
    var currentYear=today.getFullYear();


    var birth=new Date(dob);
    var birthYear=birth.getFullYear();

    var age = currentYear- birthYear;
    alert(age);
    if(age==18 || age>=18)
    {
        alert("Age is greater than or equal to 18 yrs");
        return true;
    }else{
        alert("age is not 18yrs");
        return false;
    }

};
function validateCheck()
{
    // document.getElementById("ch").checked=true;
    if(!agree.checked)
    {
         document.getElementById("chk_error").style.visibility='visible';
         return false; 
    }
    else
    {
        document.getElementById("chk_error").style.visibility='hidden';
         return true; 
    }
}

