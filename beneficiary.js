 var fname= document.querySelector(".fname");
 var lname= document.querySelector(".lname");
 var id= document.querySelector(".id");
 var msg= document.querySelector(".message");
var btn= document.querySelector(".btn1");





btn.addEventListener("click", function(){
var firstName= fname.value;
var lastName= lname.value;
let message = `Welcome <strong>${firstName} ${lastName}</strong> thank you for joining us, you are now part of the <strong>FLY HIGH Burial Society!</strong>
<br><br>
We can offer you more than this, you can add up to 10 family members ad reasonable price.
<br><br>
Please feel free to add your beneficiaries should anything happen to them, they will be covered.`
 msg.innerHTML= message;  
});



{/* <button class="button"><a href="index.html"></a>Home</button>
<button class="button"><a href="index.html"></a>Add Beneficiary</button> */}