
var connectionRequests = 2;
var usersConnections = 418;

function accepted(element){
    var clickedIcon = document.querySelector(element);
    var numRequests = document.querySelector("#newRequests");
    var numConnections = document.querySelector("#yourConnections")
    clickedIcon.remove();
    connectionRequests -= 1;
    usersConnections += 1;
    numRequests.innerText = connectionRequests;
    numConnections.innerText = usersConnections;
}

function declined(element){
    var clickedIcon = document.querySelector(element);
    var numRequests = document.querySelector("#newRequests");
    clickedIcon.remove();
    connectionRequests -= 1;
    numRequests.innerText = connectionRequests;
}

function changeName(){
    var nameToChange = document.querySelector("#Name");
    nameToChange.innerText = "Ari's Boyfriend";
}