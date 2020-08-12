function TodoItems(key, item) {
    this.item = item;
    this.key = key;
}


let list = document.getElementById("list");



function getList() {
    list.innerHTML = "";
    firebase.database().ref('todoList').once('value', function (data) {
        // console.log(data.val())
        renderList(data.val())

    })
}
getList();

function renderList(items) {
    console.log(items);
    for (let item in items) {
        console.log(items[item].item);

        list.innerHTML += `<span class="listSpan"><li id='item${items[item].key}' class="btn btn-outline-warning">${items[item].item}</li>
        <span class="btns" ><button onclick="editItem('${items[item].key}')" id="edit${items[item].key}" type="button" class="btn btn-info">Edit</button>
        <button onclick="removeItem('${items[item].key}')" type="button" class="btn btn-danger">Remove</button>
        </span>
        </span>`
    }

}


function addItem() {

    let itemInput = document.getElementById("txtItem").value;
    let key = firebase.database().ref('todoList').push().key;
    let item = new TodoItems(key, itemInput);
    firebase.database().ref('todoList/' + key).set(item);
    getList();

    itemInput.value = "";
}

function editItem(id) {
    let itemBox = document.getElementById("item" + id);


    let itemInputBox = document.createElement("input");//`<input type="text" id='input${id}' />`
    itemInputBox.setAttribute('type', 'text');
    itemInputBox.setAttribute("id", `input${id}`)
    itemInputBox.value = itemBox.innerHTML;
    itemBox.innerText = "";
    itemBox.appendChild(itemInputBox);

    let editButton = document.getElementById("edit" + id);
    editButton.innerText = "Update";
    editButton.setAttribute("onclick", `updateItem('${id}')`);




}

function removeAll() {
    firebase.database().ref('todoList').remove();
    getList();
}

function removeItem(id) {
    firebase.database().ref('todoList/' + id).remove();
    getList();
}

function updateItem(id) {
    let editButton = document.getElementById("edit" + id);
    editButton.innerText = "Edit";
    editButton.setAttribute("onclick", `editItem('${id}')`);

    let inputBox = document.getElementById("input" + id);
    inputBox.style.display = "none";

    let itemBox = document.getElementById("item" + id);
    itemBox.innerHTML = inputBox.value;

    firebase.database().ref('todoList/' + id).set({
        key: id,
        item: itemBox.innerHTML
    })

}