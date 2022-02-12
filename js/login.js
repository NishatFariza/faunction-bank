document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail =emailField.value ;

    //get password
    const passwordlField = document.getElementById('user-password');
    const userPassword = passwordlField.value ;

    //check user email and password
    if(userEmail == 'abc@gmail.com' && userPassword == 'secret'){
        // console.log('this is right');
        window.location.href ='banking.html';

    }

});

