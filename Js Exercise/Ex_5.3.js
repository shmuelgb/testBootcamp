function passValidation1 (password) {
    if (password.length >= 7)
    console.log("Strong");
    else
    console.log("Weak");

    return;
}

function passValidation2 (password){
    password.charAt(6) ? console.log("Strong"): console.log("Weak");
    return;
}

function passValidation3 (password) {
    return password.charAt(6) && "Strong" || "Weak";
}
console.log(passValidation3("45s67"));



function passValidationCap (password) {
    let re = /[A-Z]/;
    password.charAt(6) ? re.test(password) ? console.log('Very Strong'): console.log("Strong") : console.log("Weak");
}
passValidationCap("12Aca67");