
/*
        letters: /^[a-zA-Z]*$/, // letters only
        name: /^[a-zA-Z \-']*$/, // letters, spaces, - and '
        username: /^[a-zA-Z0-9_\.!?-]*$/, // letters, numbers, _ . ! ? and -
        numbers: /^[0-9]*$/, // numbers only
        phone: /^[0-9 \-+]*$/, // numbers, spaces, - and +
        date: /^\d{4}-\d{2}-\d{2}$/, // standard unix date format: YYYY-mm-dd
        email: /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        
    
*/

/*Form Regex*/
function validForm() {

    //Id value
    var name = document.getElementById("name").value;
    var secondname = document.getElementById("secondname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Regex
    var nameRegex = /^[a-zA-Z]*$/;
    var SecondnameRegex = /^[a-zA-Z]*$/;
    var emailRegex = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var passwordRegex = /^[a-zA-Z0-9_\.!?-]*$/;

    // p id 
    var nameresult = document.getElementById("nameresult");
    var secondnameresult = document.getElementById("secondnameresult");
    var emailresult = document.getElementById("emailresult");
    var passwordresult = document.getElementById("passwordresult");
    
    //Check name
    if (nameRegex.test(name) == true) {
        nameresult.innerHTML = "name is valid";
       
    } else {
        nameresult.innerHTML = "name is invalid"; 
    }
    //Check second name
    if (SecondnameRegex.test(secondname)) {
        secondnameresult.innerHTML = "second name is valid";
    } else {
        secondnameresult.innerHTML = "second name is invalid";
    }

    //Check email
    if (emailRegex.test(email)) {
        emailresult.innerHTML = "email is valid";
    } else {
        emailresult.innerHTML = "email is invalid";
    }
    //Check password
    if (passwordRegex.test(password)) {
        passwordresult.innerHTML = "password is valid";
    } else {
        passwordresult.innerHTML = "password is invalid";
    }
    
}
