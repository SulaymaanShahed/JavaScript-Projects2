function Animal_Function() { //created function Animal_Function().
    var Animal_Output; //created variable Animal_Output.
    var Animal = document.getElementById("Animal_Input").value; //created variable Animal and uses document.getElementById to show Id "Animal_Input" in HTML.
    var Animal_String = " is a great favorite animal!"; //created variable Animal_String.
    switch(Animal) { //created switch statement.
        case "Tiger": //code block "Tiger."
            Animal_Output = "Tiger" + Animal_String;
        break;
        case "Dog": //code block "Dog."
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Dolphin": //code block "Dolphin."
            Animal_Output = "Dolphin" + Animal_String;
        break;
        case "Horse": //code block "Horse."
            Animal_Output = "Horse" + Animal_String;
        break;
        case "Lion"://code block "Lion."
            Animal_Output = "Lion" + Animal_String;
        break;
        case "Snake": //code block "Snake."
            Animal_Output = "Snake" + Animal_String;
        break;
        default: //If none match, default code block is executed.
        Animal_Output = "Please enter an animal exactly as written on the above list."; //String that executes for default.
    }
    document.getElementById("Output").innerHTML = Animal_Output; //shows Id "Output" in HTML.
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("circle");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("gradient");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);