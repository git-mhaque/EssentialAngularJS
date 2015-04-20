
function sayHello() {
    nameInput = document.getElementById("nameInput");
    name = nameInput.value;
    console.log(name);

    nameOutput = document.getElementById("nameOutput");
    nameOutput.innerText = name;
}
