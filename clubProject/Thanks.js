function thanksInfo() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var choice = document.getElementById("choice");
    var selected = choice.options[choice.selectedIndex].value;
    var text = "Thank you " + name + " , with email " + email + " for applying for membership, " + selected + " is a good choice.";
    document.getElementById("combinedInfo").innerHTML = text;
    document.getElementById("thanksDialog").style.display = "block";
}

function closeInfo() {
    document.getElementById("thanksDialog").style.display = "none";
}