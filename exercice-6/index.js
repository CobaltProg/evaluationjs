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

	function checkPhoneNumber(){

        var phone= document.getElementById("phone").value;
        var phoneReg =  /* /^(0|\+33)[1-9]( *[0-9]{2}){4}$/; */ "^(06|07|01)[0-9]{8}$";
       
        //Check phone
        if (phone.match(phoneReg)) {
            alert("true");
         } else {
             alert("false");
         }


    }
    var submit = document.getElementById("submit");
    submit.addEventListener('click', function() {
        checkPhoneNumber();
    });

	