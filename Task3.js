// Read in the input date as an integer
let input_date = 341019

// Extract the day, month, and year from the input date
let year = input_date % 100 + 2000;
let month = Math.floor(input_date / 100) % 100;
let day = Math.floor(input_date / 10000) ;

// Check if the date is valid
let is_valid_date = true;
if (month < 1 || month > 12) {
    is_valid_date = false;
} else if (day < 1 || day > 31) {
    is_valid_date = false;
} else if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) {
    is_valid_date = false;
} else if (month == 2) {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        if (day > 29) {
            is_valid_date = false;
        }
    } else {
        if (day > 28) {
            is_valid_date = false;
        }
    }
}

// Display the result
if (is_valid_date) {
    let month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log("Day: " + day);
    console.log("Month: " + month_names[month - 1]);
    console.log("Year: " + year);
} else {
    console.log("Invalid date.");
}