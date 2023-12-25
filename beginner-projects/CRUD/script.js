function formDogrula(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;

    if(name == ""){
        alert("enter your name");
        return false;
    }
    if(age == "")
    {
        alert("enter your age");
        return false;
    }
    else if(age < 0)
    {
        alert("age cannot be negative");
        return false;
    }
    if(email == "")
    {
        alert("enter your email");
        return false;
    }
    else if(!email.includes("@")){
        alert("invalid email");
        return false;
    }

    return true;
} 

function showData() {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    // table da başlıklar önce görünmesin diye:
    document.querySelector(".table").innerHTML = "";

    peopleList.forEach(function (person, index) {
        document.querySelector(".table").innerHTML += `
        <tr>
            <th style="width:20vh">${person.name}</th>
            <th style="width:20vh">${person.age}</th> 
            <th style="width:20vh">${person.email}</th>
            <th style="width:20vh">
            <button class="delete" onClick="deleteItem(${index})"><i class="fa-solid fa-trash"></i></button>
            </th>
        </tr>
        `;
    });
}


document.onload = showData();

function addData(){
    if(formDogrula() == true)
    {
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var email = document.getElementById("email").value;

        var peopleList;
        if(localStorage.getItem("peopleList") == null){
            peopleList = [];
        }
        else{
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            name: name,
            age: age,
            email: email,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        // butona tıklandıktan sonra inputları sıfırla
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("email").value = "";
    }
}

function deleteItem(index) {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    
    // Call showData after deleting the item to refresh the list
    showData();
}
