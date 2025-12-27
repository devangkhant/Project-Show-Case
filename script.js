const table=[];


function add(){
    let name=document.getElementById("name");
    let age=document.getElementById("age");
    let gender=document.getElementById("gender");
    let standard=document.getElementById("standard");
    let phone=document.getElementById("phone");

    let addObject={
        name:name.value,
        age:age.value,
        gender:gender.value,
        standard:standard.value,
        phone:phone.value
    }
    
    table.push(addObject);
    displayTable();
}
// function call(){
//     let name=document.getElementById("name");
    
//     let printName=document.getElementById("NameValue").innerText=name.value;

//     let age=document.getElementById("age");
// let printAge=document.getElementById("AgeValue").innerText=age.value;

// let gender=document.getElementById("gender");

// let 
// printGender=document.getElementById("GenderValue").innerText=gender.value;

// let standard=document.getElementById("standard");

// let 
// printStandard=document.getElementById("StandardValue").innerText=standard.value

// let phone=document.getElementById("phone");

// let printPhone=document.getElementById("PhoneValue").innerText=phone.value
// }

function displayTable(){
    let tableBody=document.getElementById("tbody");
    let rows='';
    for(let i=0;i<table.length;i++){
        rows+=`
        <tr>
        <td>${table[i].name}</td>
        <td>${table[i].age}</td>
        <td>${table[i].gender}</td>
        <td>${table[i].standard}</td>
        <td>${table[i].phone}</td>
        </tr>
        `;
        tableBody.innerHTML=rows;
    }
}