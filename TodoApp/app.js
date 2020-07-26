var item = document.getElementById("txtTodo");
var list = document.getElementById("list");

function addItem() {

    //List 
    let li = document.createElement("li");
    let liText = document.createTextNode(item.value);
    li.appendChild(liText);




    // Delete Button
    let deleteButton = document.createElement("button")
    deleteButton.setAttribute("onclick", "removeItem(this)");
    let deleteText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteText);

    li.appendChild(deleteButton);

    // Edit Button

    let editButton = document.createElement("button")
    editButton.setAttribute("onclick", "editUser(this)");
    let editText = document.createTextNode("Edit");
    editButton.appendChild(editText);

    li.appendChild(editButton);/*  */


    list.appendChild(li);

    item.value = "";

}


function removeItem(e) {
    e.parentNode.remove();
}

function removeAll() {
     list.children.removeAll();
}
let checkValue;
function editUser(e) {
    let editValue = "";
    checkValue = e.parentNode;
    editValue = e.parentNode.innerText;
    console.log(editValue.split(" ")[4].split("D")[0]);

    // let editFirstName = editValue.split(" ")[0];
    // let editLastName = editValue.split(" ")[1];
    // let editemail = editValue.split(" ")[2];
    // let editGender = editValue.split(" ")[3];
    // let editDob = editValue.split(" ")[4];

    firstName.value = editValue.split(" ")[0];
    lastName.value = editValue.split(" ")[1];
    email.value = editValue.split(" ")[2];
    gender.value = editValue.split(" ")[3];
    dob.value = editValue.split(" ")[4].split("D")[0];

    saveButton.innerHTML = "Update";
    saveButton.setAttribute("onclick", "updateUser()");

}

function updateUser() {
    console.log(checkValue.childNodes[0]);
    checkValue.childNodes[0] = "";
}