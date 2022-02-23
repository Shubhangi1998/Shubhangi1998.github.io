var employeeData;


	

function showEmp1(){
	var strEmployees = "";
	var strEmployeeDataTable= "";
	strEmployeeDataTable = '<table class="table table-striped table-hover ">';
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
	EvenTable = EvenTable + '<tr class="table-active"> <th scope="col">employeenumber</th> <th scope="col">Name</th> <th scope="col">Place</th> </tr>'
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
	OddTable = OddTable + '<tr class="table-active"> <th scope="col">employeenumber</th> <th scope="col">Name</th> <th scope="col">Place</th> </tr>'
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


function searching(){
		var searchIt = document.getElementById('num1').value;
		var strEmployeeDataTable= "";
	strEmployeeDataTable = '<table class="table table-striped table-hover">';
	strEmployeeDataTable = strEmployeeDataTable + '<thead>';
	strEmployeeDataTable = strEmployeeDataTable + '<tr> <th scope="col">#</th> <th scope="col">EmpId</th> <th scope="col">First</th>  <th scope="col">Place</th> <th scope="col">State</th> </tr>';
	strEmployeeDataTable = strEmployeeDataTable + '</thead>';
	strEmployeeDataTable = strEmployeeDataTable + '<tbody>';
		for( var i=0; i<employeeData.length; i++){

			if(employeeData[i].EmpId == searchIt){
				strEmployeeDataTable = strEmployeeDataTable + '<tr> <th scope="row">'+(i+1)+'</th> <th scope="row">'+employeeData[i].EmpId+'</th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].State+'</td> </tr>' ;
				break;
			}
		}
	strEmployeeDataTable = strEmployeeDataTable + '</tbody>';
	strEmployeeDataTable = strEmployeeDataTable + '</table>' ;
	document.getElementById("place").innerHTML = parseInt(strEmployeeDataTable) ;
		
		
}



employeeData=[{
  "EmpId":"101",
  "First":"Shubhangi",
  "Last":"Vats",
  "Place":"Kaushambi",
  "State":"UP"
},
{
  "EmpId":"102",
  "First":"Udhay",
  "Last":"Kumar",
  "Place":"Bangalore",
  "State":"Karnataka"
},
{
  "EmpId":"103",
  "First":"Jothilakshmi",
  "Last":"V",
  "Place":"Rajapalayam",
  "State":"Karnataka"
},
{
  "EmpId":"104",
  "First":"Shahrukh",
  "Last":"Khan",
  "Place":"Mumbai",
  "State":"Maharashtra"
},
{
  "EmpId":"105",
  "First":"Deepika",
  "Last":"Padukone",
  "Place":"Anarkali",
  "State":"Maharashtra"
},
{
  "EmpId":"106",
  "First":"Anu",
  "Last":"Agarwal",
  "Place":"Noida",
  "State":"UP"
},
{
  "EmpId":"107",
  "First":"Vipul",
  "Last":"Kumar",
  "Place":"Noida",
  "State":"UP"
},
{
  "EmpId":"108",
  "First":"Vicky",
  "Last":"Kaushal",
  "Place":"Kirti Nagar",
  "State":"Delhi"
},
{
  "EmpId":"109",
  "First":"Virat",
  "Last":"Kohli",
  "Place":"Stadium",
  "State":"Gujarat"
},
{
  "EmpId":"110",
  "First":"Katrina",
  "Last":"Kaif",
  "Place":"Dwarka",
  "State":"Delhi"
}]
