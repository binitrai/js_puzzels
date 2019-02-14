/*
Program to check Strength of Password. A password is said to be strong if it satisfies the following criteria: It contains at least one lowercase English character.
 It contains at least one uppercase English character.
 It contains at least one special character. The special characters
 are: !@#$%^&*(
 Its length is at least 8.
 It contains at least one digit.
 Given a string, find its strength. Let a strong password is
 one that satisfies all above conditions. A moderate password is one
 that satisfies first three conditions and has length at
 least 6. Otherwise password is week.
 Input : "gfg!@12"
 Output : Moderate
 Input : “SapientGlobalMarkets!@12"
 Output : Strong
*/

const passwordMeter = (password) => {
    //It contains at least one uppercase English character
    let has_one_uppercase = hasOneUpperCase(password);

    // It contains at least one special character. The special characters are: !@#$%^&*(
    let has_special_chars = hasSpecialChars(password);

    // Its length is at least 8.
    let has_min_length_8 = hasMinLength8(password);

    // It contains at least one digit.
    let has_one_digit = hasOneDigit(password);

    let three_necessary_conditions = has_one_uppercase && has_special_chars;

    if (three_necessary_conditions && has_min_length_8[1] && has_one_digit) {
        return "Strong";
    }

    if (three_necessary_conditions && has_min_length_8[0] >= 6) {
        return "Moderate";
    }
    return "weak";
}

const hasOneUpperCase = (password) => {
    return password.toLowerCase() !== password;
}

const hasSpecialChars = (password) => {
    return password.search(/[!@#$%&*]/) !== -1;
}

const hasMinLength8 = (password) => {
    return [password.length, password.length >= 8]
}

const hasOneDigit =  (password) => {
    return password.search(/\d/) !== -1;
}