var displayBenificiaries = document.querySelector(".data");
var addBtn = document.querySelector(".btn");
var Name = document.querySelector(".name");
// var surname = document.querySelector(".surname");
var idNr = document.querySelector(".idnr");
var dob = document.querySelector(".dob");
var todayTxt = document.querySelector(".today");
var show = document.querySelector(".show");
var existingEntries;
var enteredPlate;

if (existingEntries == null) existingEntries = [];

addBtn.addEventListener("click", addEntries);


// Retrieve the object from storage
var retrievedObject = localStorage.getItem("allEntries");

console.log('retrievedObject: ', JSON.parse(retrievedObject));


// let plates = JSON.parse(retrievedObject);
// // dispReg.innerHTML= Object.keys(plates).join(" ");
// displayBenificiaries.innerHTML = Object.values(existingEntries).join(" ");



// if(localStorage['allEntries']){



//     enteredPlate = JSON.parse(localStorage.getItem("allEntries"));
//     // displayBenificiaries.innerHTML= Object.values(existingEntries).join(" ");

//     addEntries(enteredPlate);


//   }

function addEntries(myObject) {
    var idNumber = Number(idNr.value);


    
    
    // SA ID Number have to be 13 digits, so check the length
    if (idNumber.length != 13 || !isNumber(idNumber)) {
        error = 'ID number does not appear to be authentic - input not a valid number';
        correct = false;
    }

    // get first 6 digits as a valid date
    var tempDate = new Date(idNumber.toString().substring(0, 2), idNumber.toString().substring(2, 4) - 1, idNumber.toString().substring(4, 6));

    var id_date = Number(tempDate.getDate());
    var id_month = Number(tempDate.getMonth());
    var id_year = Number(tempDate.getFullYear());
    var fullDate = id_date + "-" + (id_month + 1) + "-" + id_year;
    // var fullDate=Number(fullDate1)
    
    if (!((tempDate.getYear() == idNumber.toString().substring(0, 2)) && (id_month == idNumber.toString().substring(2, 4) - 1) && (id_date == idNumber.toString().substring(4, 6)))) {
        error = 'ID number does not appear to be authentic - date part not valid';
        correct = false;
    }
    
    // get the gender
    var genderCode = idNumber.toString().substring(6, 10);
    var gender = parseInt(genderCode) < 5000 ? "Female" : "Male";

    //get country ID for citzenship
    var citzenship = parseInt(idNumber.toString().substring(10, 11)) == 0 ? "Yes" : "No";

    console.log(citzenship, correct)

    // if no error found, hide the error message
    // if (correct) {

        // clear the result div
        // and put together a result message
       console.log ('South African ID Number:   ' + idNumber + '\nBirth Date:   ' + fullDate + '\nGender:  ' + gender + ' \tSA Citizen:  ' + citzenship );
    // }



    /////////////////////////////////////////////////////////////////////


    // var enteredDate = fullDate;
    // var enteredDate1 = todayTxt.value;
    // Below one is the single line logic to calculate the no. of years...
    var years = new Date(new Date() - new Date(fullDate)).getFullYear() - 1970;
    
    // var today = new Date(enteredDate1)


    // var monthPlusThree = moment(today).add(3, "month").startOf("month").format('DD/MMMM/YYYY');


    // var monthPlusSix = moment(today).add(6, "month").startOf("month").format('DD/MMMM/YYYY');


    // let monthPlusNine = moment(today).add(9, "month").startOf("month").format('DD/MMMM/YYYY');
    // // console.log(monthPlusNine);

    // let monthPlusTwelve = moment(today).add(12, "month").startOf("month").format('DD/MMMM/YYYY');
    // // console.log(monthPlusTwelve);

    // if (years > 18) {

    //     var stamp = monthPlusSix;


    //     //  monthPlusThree;
    //     //   console.log(stamp);
    //     // //   return;
    //     alert(stamp);


    // } else if (years > 0) {


    //     var stamp = monthPlusThree;

    //     // console.log(stamp1);
    //     alert(stamp);
    //     // return;



    // }






    var entry = {
        fullName: Name.value,
        IDnr: idNr.value,
        dob: years,
        Gender: gender
    };
    console.log(typeof(years))
    alert(years);


    var datasets = Object.values(myObject)
    if (entry !== "") {
        for (var i = 0; i < datasets.length; i++) {
            let newEntry = document.createElement("entry");
            newEntry.textContent = datasets[i];
            displayBenificiaries.appendChild(newEntry)
            existingEntries.push(entry)
            newEntry.innerHTML = Object.values(entry).join(" ");




        }





    }

    // if (!existingEntries.includes(entry)){
    //     existingEntries.push(entry)

    //   } 



    //   return results;





    // alert("hh")
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


}

// displayBenificiaries.innerHTML = Object.values(existingEntries).join(" ");






// addBtn.addEventListener("click", function () {







//     var enteredDate = dob.value;
//     var enteredDate1 = todayTxt.value;
//     // Below one is the single line logic to calculate the no. of years...
//     var years = new Date(new Date() - new Date(enteredDate)).getFullYear() - 1970;
//     var today = new Date(enteredDate1)


//     // let monthPlusThree = moment(today).add(3, "month").startOf("month").format('DD/MMMM/YYYY');


//     // let monthPlusSix = moment(today).add(6, "month").startOf("month").format('DD/MMMM/YYYY');


//     // let monthPlusNine = moment(today).add(9, "month").startOf("month").format('DD/MMMM/YYYY');
//     // // console.log(monthPlusNine);

//     // let monthPlusTwelve = moment(today).add(12, "month").startOf("month").format('DD/MMMM/YYYY');
//     // // console.log(monthPlusTwelve);



//     if (existingEntries == null) existingEntries = [];

//     var entry = {
//         name: Name.value,
//         surname: surname.value,
//         IDnr: Number(idNr.value),
//         dob: years
//         // "Gender": c
//     };

//     if (!existingEntries.includes(entry["name"])){
//         existingEntries.push(entry)

//       } 



// //   return results;


//     // if (entry.dob >= 18 || entry.dob <= 30) {


//     //         stamp = monthPlusThree;
//     //           console.log(stamp);
//     //           return;


//     // } 
//     // if (entry.dob >= 31 || entry.dob <= 40) {


//     //     stamp1 = monthPlusSix;

//     //     console.log(stamp1);
//     //     return;



//     // }


//     if (entry !== "") {
//         const newEntry = document.createElement("entry");
//         newEntry.innerHTML = entry.name + "--" + entry.surname + "--" + entry.IDnr + "--" + entry.dob;
//         // newEntry.textContent = Object.values(entry).join(" ");
//         displayBenificiaries.appendChild(newEntry)
//         localStorage.setItem("allEntries", JSON.stringify(existingEntries));

//     }
//     // alert("hh")S


// })



// first create main user/client
// need to approve
// once client is approved, you can now add new member

// const user = {
//     fullName: '',
//     id: '999999999',
//     dob: '',
//     age: 23,
//     approved: true,
//     limit: 3,
//     canAdd(){
//         return this.approved && this.limit < this.members.length
//     },
//     members: [
//         {
//             fullName: '',
//             id: '999999999',
//             dob: '',
//             age: 23,
//             relate: 'child',
//             since: 2009,
//             approved: false
//         }
//     ]
// }