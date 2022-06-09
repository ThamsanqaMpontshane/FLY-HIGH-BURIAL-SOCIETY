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
    const yr = idNr.value.substring(0, 2);
    var tempDate = new Date(yr, idNumber.toString().substring(2, 4) - 1, idNumber.toString().substring(4, 6));
    console.log({yr}, '-----', Number(yr) + 2000, {tempDate}) // 01 - 2001 = 1901
    // yr 00 and 30 + 100

    var id_date = Number(tempDate.getDate());
    var id_month = Number(tempDate.getMonth());
    var id_year = Number(tempDate.getFullYear()) > 1940 ? Number(tempDate.getFullYear()) : Number(yr) + 2000;
    // var fullDate = id_date + "-" + (id_month + 1) + "-" + id_year;
    var fullDate = id_year + "-" + (id_month + 1) + "-" + id_date;

    console.log({id_year}, 'ii');
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
    
    var today = new Date();


    var monthPlusThree = moment(today).add(3, "month").startOf("month").format('DD/MMMM/YYYY');


    var monthPlusSix = moment(today).add(6, "month").startOf("month").format('DD/MMMM/YYYY');


    var monthPlusNine = moment(today).add(9, "month").startOf("month").format('DD/MMMM/YYYY');
    

    var monthPlusTwelve = moment(today).add(12, "month").startOf("month").format('DD/MMMM/YYYY');


    if (years > 50) {
        var stamp = monthPlusTwelve;
    } else if (years > 40) {
        var stamp = monthPlusNine;
    }else if(years >30){
        var stamp = monthPlusSix;
    } else if(years > 20){
        var stamp = monthPlusThree;
}






    var entry = {
        fullName: Name.value,
        IDnr: idNr.value,
        dob: years,
        Gender: gender,
        claimDate:stamp
    };
    


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

    





    // alert("hh")
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
  









}


// function countAllFromTown(list){
//     var count=0;
//     //var counter=0;
    
//     var town=list.split(',');
//     for(var i=0; i < town.length;i++){
//       var regNo=town[i];
//       if(regNo.startsWith('CL'))
//         count++;
//       }
//     return count;
//   }



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

// function Graph(itemList){
//     var count1 = 0 ;
//     var count2 = 0 ;
//     var count3 = 0 ;
//     var itemList = [
//       {name : 'Sapho', age : 40},
//       {name : 'Thami', age : 20},
//       {name : 'Kamva', age : 23},
//       {name : 'Thanos', age : 37},
//       {name : 'Thanos', age : 19},
//       {name : 'Thanos', age : 17},
//        {name : 'Thanos', age : 6},
//        {name : 'Thanos', age : 9}
//   ];
    
//     var results=[];
//     var data=[];
//       for(var i=0; i < itemList.length; i++) {
//         var item = itemList[i];
//         if (item.age >= 30) {
//           count1++;
//           results.push(item);
//           // data.push(count1);
//         }else if(item.age >= 20){
//           count2++
//           results.push(item);
//            // data.push(count2);
          
//         }else if(item.age > 0){
//           count3++
//           results.push(item);
//           // data.push(count3);
          
          
//         }
//       }
//              data.push(count2);
//             data.push(count3);
//             data.push(count1);
  
//     console.log(data);
//     console.log(count1);
//     console.log(count2);
//     console.log(count3);
//       return results
//     return data;
    
//   } 
//   console.log(Graph());
  
    
  
  
  