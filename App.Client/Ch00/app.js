
function sayHello() {
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value;
    var nameOutput = document.getElementById("nameOutput");

    nameOutput.innerText = name;
}
