let fun = document.getElementById("fun");
let drop = document.getElementById("drop");

function handleClick() {
    // Remove the click event listener
    fun.removeEventListener('click', handleClick);

    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    // Create an input element for Full Name
    let FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    FN.setAttribute("placeholder", "Full Name");
    FN.classList.add("form-control")

    // Create an input element for emailID
    let EI = document.createElement("input")
    EI.setAttribute("type", "text");
    EI.setAttribute("name", "emailID");
    EI.setAttribute("placeholder", "Email Address");
    EI.classList.add("form-control")

    // Create an input element for password
    let PWD = document.createElement('input');
    PWD.setAttribute("type", "password")
    PWD.setAttribute("name", "password")
    PWD.setAttribute("placeholder", "Password")
    PWD.classList.add("form-control")

    // Create an input element for confirm password
    let RPWD = document.createElement('input');
    RPWD.setAttribute("type", "password")
    RPWD.setAttribute("name", "reTypePassword")
    RPWD.setAttribute("placeholder", "Confirm Password");
    RPWD.classList.add("form-control")

    // Create a submit button
    let SM = document.createElement("input");
    SM.setAttribute("type", "submit");
    SM.setAttribute("value", "Signup");
    SM.classList.add("btn");

    // Add an event listener to the form for submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        //console.log("Form submitted!");

        // Remove the form from the DOM
        drop.removeChild(form);

        // Reattach the click event listener to the button
        fun.addEventListener('click', handleClick);
    });

    // Append the full name input to the form
    form.appendChild(FN);
    form.appendChild(document.createElement("br"));

    // Append the email to the form
    form.appendChild(EI);
    form.appendChild(document.createElement("br"));

    // Append the password to the form
    form.appendChild(PWD);
    form.appendChild(document.createElement("br"));

    // Append the confirm password
    form.appendChild(RPWD);
    form.appendChild(document.createElement("br"));

    // Append the submit button to the form
    form.appendChild(SM);

    // Append the form to the drop element
    drop.appendChild(form);

}

// Add the click event listener
fun.addEventListener('click', handleClick);



