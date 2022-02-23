var employeeData;


	

function showEmp1(){
	var strEmployees = "";
	var strEmployeeDataTable= "";
	strEmployeeDataTable = '<table class="table table-striped">'
	strEmployeeDataTable = strEmployeeDataTable + '<thead>';
	strEmployeeDataTable = strEmployeeDataTable + '<tr class="table-active"> <th scope="col">Serial No.</th> <th scope="col">EmpId</th> <th scope="col">First</th>  <th scope="col">Place</th> <th scope="col">State</th> </tr>';
	strEmployeeDataTable = strEmployeeDataTable + '</thead>';
	strEmployeeDataTable = strEmployeeDataTable + '<tboday>';
	for(var i=0; i<employeeData.length; i++) {
	strEmployeeDataTable = strEmployeeDataTable + '<tr class="table-secondary"> <th scope="row">'+(i+1)+'</th> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].State+'</td></tr>' ;
     
    }
	document.getElementById("place").innerHTML = strEmployeeDataTable ;  
	strEmployeeDataTable = strEmployeeDataTable + '</tbody>';
	strEmployeeDataTable = strEmployeeDataTable + '</table>' ;
	
	
}
function even(){
	var EvenTable= " ";

	EvenTable = '<table class="table table-striped table-hover ">';
	EvenTable = EvenTable + '<thead>';
	EvenTable = EvenTable + '<tr> <th scope="col">employeenumber</th> <th scope="col">Name</th> <th scope="col">Place</th> </tr>'
	EvenTable = EvenTable + '</thead>';

	EvenTable = EvenTable + '<tbody>';
	for(var i=0;i<employeeData.length;i++){
	if((i+1)%2==0){
		EvenTable = EvenTable + '<tr> <th scope="row"> '+(i+101)+' </th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> </tr>';
	}
	}
	EvenTable = EvenTable + '</tbody>';
	EvenTable = EvenTable + '</table>';




	document.getElementById("place").innerHTML= EvenTable;
}
		
function odd(){
	var OddTable= " ";

	OddTable = '<table class="table table-striped table-hover ">';
	OddTable = OddTable + '<thead>';
	OddTable = OddTable + '<tr> <th scope="col">employeenumber</th> <th scope="col">Name</th> <th scope="col">Place</th> </tr>'
	OddTable = OddTable + '</thead>';

	OddTable = OddTable + '<tbody>';
	for(var i=0;i<employeeData.length;i++){
	if((i+1)%2!=0){
	OddTable = OddTable + '<tr> <th scope="row"> '+(i+101)+' </th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> </tr>';
	}
	}
	OddTable = OddTable + '</tbody>';
	OddTable = OddTable + '</table>';




	document.getElementById("place").innerHTML= OddTable;
}


function clear1(){
	
	document.getElementById("place").innerHTML = ""; 
	
}



employeeData=[{
  "First":"Anubhav",
  "Last":"Pandey",
  "Place":"KushiNagar",
  "State":"UP"
},
{
  "First":"Udhay",
  "Last":"Kumar",
  "Place":"Bangalore",
  "State":"Karnataka"
},
{
  "First":"Jothilakshmi",
  "Last":"V",
  "Place":"Rajapalayam",
  "State":"Karnataka"
},
{
  "First":"Shahrukh",
  "Last":"Khan",
  "Place":"Mumbai",
  "State":"Maharashtra"
},
{
  "First":"Deepika",
  "Last":"Padukone",
  "Place":"Anarkali",
  "State":"Maharashtra"
},
{
  "First":"Ajay",
  "Last":"Sharma",
  "Place":"Indirapuram",
  "State":"UP"
},
{
  "First":"Ram",
  "Last":"Kumar",
  "Place":"Ayodhya",
  "State":"UP"
},
{
  "First":"Shyam",
  "Last":"Sharma",
  "Place":"Kirti Nagar",
  "State":"Delhi"
},
{
  "First":"Bhagyalakshmi",
  "Last":"Bhoomnavar",
  "Place":"S",
  "State":"Karnataka"
},
{
  "First":"Manav",
  "Last":"Rawat",
  "Place":"Dwarka",
  "State":"Delhi"
}]