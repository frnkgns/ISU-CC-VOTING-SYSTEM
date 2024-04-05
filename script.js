
//eto yung id ng code inputbox
const entercode = document.getElementById("Codes");

//so dinagdagan natin ng eventlistener para may gagawin sya
//once priness natin yung enter Key sa laptop or sa cp keyboard
//mag proceed na sya sa main html natin
entercode.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        window.location.href = "main.html";
    }
});
//end of Log in Form

//Start of Main Form