 var fname= document.querySelector(".fname");
 var lname= document.querySelector(".lname");
 var id= document.querySelector(".id");
 var msg= document.querySelector(".message");
var btn= document.querySelector(".btn1");

var welcomeMsg= document.querySelector(".welcome")

 btn.addEventListener("click", function(){
var firstName= fname.value;
var lastName= lname.value;
let message = "Welcome  " + firstName + lastName + "thank you for joining us, you are now part of the FLY HIGH Burial Society!.";
"We can offer you more than this, you can add up to 10 family members ad reasonable price."

"Please feel free to add your beneficiaries should anything happen to them, they will be covered."
 welcomeMsg.innerHTML= message;  
});

