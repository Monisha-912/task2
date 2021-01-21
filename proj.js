// to check for valid email address
function emailvalidation(){
	
		
	 var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(email.value.match(mailformat))
       {
    

       return true;
      }
       else 
		   
     {
     alert("You have entered an invalid email address!");

     return false;
     }


		}
// to check for valid mobile number		
function mobilevalidation(){
	 var ph = /^\d{10}$/;
  if((pno.value.match(ph)))
        {
      return true;
        }
      else
        {
        alert("Invalid Mobile number");
        return false;
        }
		console.log(pno);
}
// to check whether user is less than age 18
function ages() {

	var val=document.getElementById("dob").value;
	console.log(val);
	console.log(new Date(val));
	
	var millisecond=(new Date()-(new Date (val)))
	var age=(millisecond/(24*60*60*1000*365.25));
	console.log(age);
	 if(age<18)
        {
			 alert("Your Age is LESS than 18");
        return false;
      
        }
      else
        {
			return true;
       
        }
}

// to show pop up on fields when placed cursor
function mandatoryfield() {
	 if(document.getElementById("first").value===""){
		 alert("Enter First_Name");
	 }
	  if(document.getElementById("last").value===""){
		 alert("Enter Last_name_Name");
	 }
	  if(document.getElementById("email").value===""){
		 alert("Enter your Email");
	 }
	  if(document.getElementById("pno").value===""){
		 alert("Enter Mobile Number");
	 }
	  if(document.getElementById("dob").value===""){
		 alert("Enter your DOB");
	 }
	  if(document.getElementById("gender").value===""){
		 alert("Enter your Gender");
	 }
	
  
}
// to reset all data entered in forms
function resetall() {
	document.getElementById("first").value="";
	document.getElementById("email").value="";
	document.getElementById("dob").value="";
	document.getElementById("last").value="";
	document.getElementById("pno").value="";
	document.getElementById("gender").value="";
	
		
	
}

var data =[];
const adddata=(ev)=>{
	ev.preventDefault();

let data1={
	First_Name:document.getElementById("first").value,
	Last_name:document.getElementById("last").value,
	Email:document.getElementById("email").value,
	Mobile:document.getElementById("pno").value,
	DOB:document.getElementById("dob").value,
	Gender:document.getElementById("gender").value
}
data.push(data1);


// to console data
console.log("added",{data});


// to store data inside local storage
let pre=document.querySelector('#msg pre');
localStorage.setItem("Datalist",JSON.stringify(data));
}

document.addEventListener('DOMContentLoaded',()=>{
document.getElementById("button1").addEventListener('click',adddata)});


// to clear the data stored in local storage
function clr() {
	localStorage.removeItem("Datalist");
}