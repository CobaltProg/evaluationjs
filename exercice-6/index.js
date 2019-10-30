/* var regex_presets = {
        letters: /^[a-zA-Z]*$/, // letters only
        name: /^[a-zA-Z \-']*$/, // letters, spaces, - and '
        username: /^[a-zA-Z0-9_\.!?-]*$/, // letters, numbers, _ . ! ? and -
        numbers: /^[0-9]*$/, // numbers only
        phone: /^[0-9 \-+]*$/, // numbers, spaces, - and +
        date: /^\d{4}-\d{2}-\d{2}$/, // standard unix date format: YYYY-mm-dd
        email: /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        
    }
*/
/*Check number phone and return valid or invalie number*/

function checkPhoneNumber(){
        //Id value
        var phone= document.getElementById("phone").value;
        //Regex
        var phoneRegex =  /* /^(0|\+33)[1-9]( *[0-9]{2}){4}$/; */ "^(06|07|01)[0-9]{8}$";
       
       
        //Check phone
        if (phone.match(phoneRegex)) {
            alert("valid number well done");
         } else {
             alert("invalid number try again");
         }
       
    }
    var submit = document.getElementById("submit");
    submit.addEventListener('click', function() {
        checkPhoneNumber();
    });

	