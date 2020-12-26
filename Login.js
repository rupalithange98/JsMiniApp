let validateLogin = ()=>
{
	var emailId=document.getElementById('email').value;
	var pwd=document.getElementById('pwd').value;

	var userArray=JSON.parse(localStorage.getItem("userList"));
	var flag=0;

	for(var i=0;i<userArray.length;i++)
	{
		if(userArray[i].Email==emailId  && userArray[i].Pass==pwd )
		{
			if(userArray[i].status ="activate")
			{
				alert("Login Succesfully...");
				localStorage.setItem("activateUser",emailId);
				document.getElementById('lbtn').href="TaskRegistration.html";
				flag=1;
				break;

			}else{
				alert("User is Deactivated by Admin..");
				flag=1;
				break;
			}
		}else if(emailId=="adminlogin@gmail.com" && pwd == "admin" )
		{
			alert("Login by Admin...");
			localStorage.setItem("activateUser",emailId);

			document.getElementById('lbtn').href="Admin.html";
			flag=1;
			break;

		}
	}
	if (flag==0) {
		alert("Incorrect data Submission");
	}


}