function display()
{
	alert("display in admin function call....");
	var userArray=JSON.parse(localStorage.getItem("userList"));
		
	var temp='<br><div class="table-responsive"><table class="table table-striped table-dark"><tr><th>First_Name</th><th>Last_Name</th><th>Email</th><th>BirthDate</th><th>Gender</th><th>Pwd</th><th>CPwd</th><th>Status</th><th>Action</th></tr>'

	for(let i=0;i<userArray.length;i++)
	{
			alert("print user Details...");
		    temp = temp + "<tr><td>"+userArray[i].First + "</td>";
		    temp = temp + "<td>"+userArray[i].Last + "</td>"
		    temp = temp + "<td>"+userArray[i].Email + "</td>"
		    temp = temp + "<td>"+userArray[i].DOB + "</td>"
		    temp = temp + "<td>"+userArray[i].Gender + "</td>"
		    temp = temp + "<td>"+userArray[i].Pass + "</td>"
		    temp = temp + "<td>"+userArray[i].CPass + "</td>"
		    temp = temp + "<td>"+userArray[i].Status + "</td>"
		    // temp = temp + "<td>"+userArray[i].Action + "</td>"
		    temp += "<td><button class='btn btn-warning' onclick='change("+i+")' >Change_Status</button></td>"
	
		 
	}
	document.getElementById('show').innerHTML=temp;
}
function change(chng)
{
	alert("change status of:"+chng);
	var userArray=JSON.parse(localStorage.getItem("userList"));
	
 if(userArray[chng].Status=="Activate")
	{
		userArray[chng].Status="Deactivate";

	}else
	{
		userArray[chng].Status="Activate";
	}
	alert(JSON.stringify(userArray[chng]));
	localStorage.setItem("userList",JSON.stringify(userArray));
	display();

	
}