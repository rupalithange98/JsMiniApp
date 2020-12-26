var addData=()=>{
	var taskName = document.getElementById('task').value;
	var desc = document.getElementById('txtarea').value;

	var taskArray = JSON.parse(localStorage.getItem("taskList"));
	
	if(taskArray == null)
	{
		taskArray=[];
	}

	var active  = localStorage.getItem("activateUser");
	var taskObj={tName:taskName,tDesc:desc,Status:"pending",Email:active};
	taskArray.push(taskObj);

	localStorage.setItem("taskList",JSON.stringify(taskArray));

}
function displayData()
{
	var taskArray = JSON.parse(localStorage.getItem("taskList"));
	var active  = localStorage.getItem("activateUser");


   // var temp="<table>";
	var temp='<table><tr><th>Show Your Task</th></tr><tr><th>Task Name</th><th>Description</th><th></th></tr>'

	for(let i=0;i<taskArray.length;i++)
	{
		if(taskArray[i].Email == active)
		{
			alert("Actvate User...");
		 temp = temp + "<tr><td>"+taskArray[i].tName + "</td>";
		 temp = temp + "<td>"+taskArray[i].tDesc + "</td>"
		  // temp = temp + "<td>"+taskArray[i].Status + "</td>"
  		  temp = temp + "<td><button onclick='editData("+i+")' class='btn btn-warning'>Edit</button></td>";
    		temp = temp + "<td><button onclick='deleteData("+i+")' class='btn btn-danger'>Delete</button></td></tr>"
		}
	}
	document.getElementById('show').innerHTML=temp;
}



function deleteData(d)
{
  confirm("You want to Delete...");
   var getDetails=JSON.parse(localStorage.getItem("taskList"));
   getDetails.splice(d,1);
   localStorage.setItem("taskList",JSON.stringify(getDetails));

   displayData();
}



function editData(e)
{
  alert("Edit data .."+e);
   var getDetails=JSON.parse(localStorage.getItem("taskList"));

   var edittask ="<input type='text' name='editname' value='"+getDetails[e].tName+"' id='upd'>";
    edittask += "<input type='text' name='editdesc' value='"+getDetails[e].tDesc+"' id='upd1'>";
    // edittask += "<input type='text' name='editdesc' value='"+getDetails[e].Status+"' id='upd2'>";
   // var edittask ="<input type='text' name='editdesc' value='"+getDetails[e].Email+"' id='upd'>";

   edittask = edittask + "<br><br><button onclick='updateData("+e+")' class='btn btn-success' >Update</button>";

   document.getElementById('edt').innerHTML=edittask;
   alert(edittask);
}

function updateData(u)
{
	var taskName = document.getElementById('upd').value;
	var desc =  document.getElementById('upd1').value;
	// var status =  document.getElementById('upd2').value;
	var active  = localStorage.getItem("activateUser");


   var getDetails=JSON.parse(localStorage.getItem("taskList"));

 var taskObj={tName : taskName, tDesc : desc, Email : active};
  // var taskObj={tName : taskName, tDesc : desc ,Status:"pending"};

   getDetails[u]=taskObj;

   localStorage.setItem("taskList",JSON.stringify(getDetails));
   displayData();
}

function signOut()
{
	if(confirm("You want to Sign Out..."))
	{
		localStorage.removeItem("activateUser");
		document.getElementById("sbtn").href="SignUp.html";
	}
}