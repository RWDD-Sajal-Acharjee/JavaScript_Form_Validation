
var password = document.getElementById('password');
var username = document.getElementById('username');

//to log in functon
function login(){
    if(username.value ==""){
        username.style.borderColor = "#b22222";
        username.style.color = "#b22222";
        username.focus();
        document.getElementById('usernameErr').innerHTML = "Enter your username!";
        return false;
    }
    
    if(password.value ==""){
        password.style.borderColor = "#b22222";
        password.style.color = "#b22222";
        password.focus();
        document.getElementById('passwordErr').innerHTML = "Enter your password!";
        return false;
    }

    if(password.value.length <6){
        password.style.borderColor = "#b22222";
        password.style.color = "#b22222";
        password.focus();
        document.getElementById('passwordErr').innerHTML = "Enter at least 6 characters!";
        return false;
    }

    window.alert('Logged in successfully!');
    document.getElementById('password').value="";
    document.getElementById('username').value="";
}

//to remove error msg
function remError(){
    if(username.value !=""){
        username.style.borderColor = "";
        username.style.color = "";
        document.getElementById('usernameErr').innerHTML = "";
    }
    if(password.value !=""){
        password.style.borderColor = "";
        password.style.color = "";
        document.getElementById('passwordErr').innerHTML = "";
    }
}

username.addEventListener('blur', remError);
password.addEventListener('blur', remError);



/* trigger Sign Up form by click on Sign Up button*/
var modal = document.getElementById('modal');
var trigger = document.getElementById('trigger');
var close = document.getElementById('close');
var loginFrm = document.getElementById('loginFrm');

trigger.addEventListener('click', function(){
    // loginF.style.opacity = "none";
    modal.style.display="flex";
});

close.addEventListener('click', function(){
    modal.style.display="none";
    signUp_fName.value = "";
    signUp_fName.style.borderColor = "";
    signUp_fName.style.color = "";
    firstNameErr.style.visibility = "hidden";

    signUp_lName.value = "";
    signUp_lName.style.borderColor = "";
    signUp_lName.style.color = "";
    lastNameErr.style.visibility = "hidden";

    signUp_email.value = "";
    signUpEmailErr.value = "";
    signUp_email.style.borderColor = "";
    signUp_email.style.color = "";

    signUp_password.value = "";
    signUp_conPassword.value = "";
    
    

});





/*====================
sign up function start
=======================*/ 

var signUp_fName = document.getElementById('firstName');
var signUp_lName = document.getElementById('lastName');
var signUp_email = document.getElementById('email');
var signUp_password = document.getElementById('SignUppassword');
var signUp_conPassword = document.getElementById('confirmPassword');
var firstNameErr = document.getElementById('firstNameErr');
var lastNameErr = document.getElementById('lastNameErr');
var signUpEmailErr = document.getElementById('emailErr');

 function signUp(){
    if(signUp_fName.value ==""){
        signUp_fName.style.borderColor = "#b22222";
        signUp_fName.style.color = "#b22222";
        signUp_fName.focus();
        firstNameErr.style.visibility = "visible";
        document.getElementById('firstNameErr').innerHTML = "Enter your firstname!";
        return false;
    }

    if(signUp_lName.value ==""){
        signUp_lName.style.borderColor = "#b22222";
        signUp_lName.style.color = "#b22222";
        signUp_lName.focus();
        lastNameErr.style.visibility = "visible";
        document.getElementById('lastNameErr').innerHTML = "Enter your lastname!";
        return false;
    }

    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(signUp_email.value ==""){
        signUp_email.style.borderColor = "#b22222";
        signUp_email.style.color = "#b22222";
        signUp_email.focus();
        signUpEmailErr.style.visibility = "visible";
        document.getElementById('emailErr').innerHTML = "Enter Your Email!";
        return false;
    }else if(signUp_email.value.match(regex)){
            signUp_email.style.borderColor = "";
            signUp_email.style.color = "";
            document.getElementById('emailErr').style.visibility = "hidden";
    }else{
        document.getElementById('emailErr').style.visibility = "visible";
        document.getElementById('emailErr').innerHTML ="Enter Valid Email!";
    }

    
    if(signUp_password.value ==""){
        signUp_password.style.borderColor = "#b22222";
        signUp_password.style.color = "#b22222";
        signUp_password.focus();
        document.getElementById('SignuppasswordErr').style.visibility = "visible";
        document.getElementById('SignuppasswordErr').innerHTML = "Enter Your Password!";
        return false;
    }

    if(confirmPassword.value ==""  && signUp_password.value.length>=6){
        confirmPassword.style.borderColor = "#b22222";
        confirmPassword.style.color = "#b22222";
        confirmPassword.focus();
        document.getElementById('confirmPasswordErr').style.visibility = "visible";
        document.getElementById('confirmPasswordErr').innerHTML = "Confirm Your Password!";
        return false;
    }else if( confirmPassword.value !="" && confirmPassword.value != signUp_password.value){
        confirmPassword.style.borderColor = "#b22222";
        confirmPassword.style.color = "#b22222";
        confirmPassword.focus();
        document.getElementById('confirmPasswordErr').style.visibility = "visible";
        document.getElementById('confirmPasswordErr').innerHTML = "Password Doesn't Matched!";
        return false;
    }

    if(signUp_password.value.length <6){
        signUp_password.style.borderColor = "#b22222";
        signUp_password.style.color = "#b22222";
        signUp_password.focus();
        document.getElementById('SignuppasswordErr').style.visibility = "visible";
        document.getElementById('SignuppasswordErr').innerHTML = "Enter at least 6 characters!";
        return false;
    }

    window.alert('Signed Up in successfully!');
 }



 //to remove error msg from sign up form
function SignUpFormRemoveError(){
    if(signUp_fName.value !=""){
        signUp_fName.style.borderColor = "";
        signUp_fName.style.color = "";
        document.getElementById('firstNameErr').style.visibility = "hidden";
    }

    if(signUp_lName.value !=""){
        signUp_lName.style.borderColor = "";
        signUp_lName.style.color = "";
        document.getElementById('lastNameErr').style.visibility = "hidden";
    }

    if(signUp_lName.value !=""){
        signUp_lName.style.borderColor = "";
        signUp_lName.style.color = "";
        document.getElementById('lastNameErr').style.visibility = "hidden";
    }

    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (signUp_email.value.match(regex) || signUp_email.value == ""){
        signUp_email.style.borderColor = "";
        signUp_email.style.color = "";
        document.getElementById('emailErr').style.visibility = "hidden";
    }else{
        document.getElementById('emailErr').style.visibility = "visible";
        document.getElementById('emailErr').innerHTML ="Enter Valid Email!";
    }

    if((signUp_password.value !="" && signUp_password.value.length >=6) || signUp_password.value ==""){
        signUp_password.style.borderColor = "";
        signUp_password.style.color = "";
        document.getElementById('SignuppasswordErr').style.visibility = "hidden";
    }else{
        document.getElementById('SignuppasswordErr').style.visibility = "visible";
        document.getElementById('SignuppasswordErr').innerHTML = "Enter at least 6 characters!";
    }

    if((confirmPassword.value !=""  && confirmPassword.value == signUp_password.value) || confirmPassword.value==""){
        confirmPassword.style.borderColor = "";
        confirmPassword.style.color = "";
        document.getElementById('confirmPasswordErr').style.visibility = "hidden";
    }else{
        confirmPassword.style.borderColor = "";
        confirmPassword.style.color = "";
        document.getElementById('confirmPasswordErr').style.visibility = "visible";
        document.getElementById('confirmPasswordErr').innerHTML = "Password Doesn't Matched!";
    }
}

signUp_fName.addEventListener('blur', SignUpFormRemoveError);
signUp_lName.addEventListener('blur', SignUpFormRemoveError);
signUp_email.addEventListener('blur', SignUpFormRemoveError);
signUp_password.addEventListener('blur', SignUpFormRemoveError);
confirmPassword.addEventListener('blur', SignUpFormRemoveError);
