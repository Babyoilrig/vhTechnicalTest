console.log("It works!");

//Selecting elements

const buttons = document.querySelectorAll('.button');
console.log(buttons);

const dailyDosagesButtons = document.querySelectorAll('.dosage-div button');
console.log(dailyDosagesButtons);

const administerFrequencyButtons = document.querySelectorAll(".administered-div button");
console.log(administerFrequencyButtons);

const totalDosage = document.querySelector('.total-dosage');
console.log(totalDosage);

const tabletTotalOneFifty = document.querySelector('.tablet-total-value-150');
console.log(tabletTotalOneFifty);

const tabletTotalSeventyFive = document.querySelector('.tablet-total-value-75');
console.log(tabletTotalSeventyFive);

const tabletDailyValueOneFifty = document.querySelector('.tablet-daily-value-150');
console.log(tabletDailyValueOneFifty);

const tabletDailyValueSeventyFive = document.querySelector('.tablet-daily-value-75');
console.log(tabletDailyValueSeventyFive);


// Adding listeners to daily dosage buttons and logging value
//Also checking if buttons have id of clicked and removing if necessary then adding id of clicked to button clicked
let dailyDoseInt = 0;

function handleDailyDoseClick(e, dailyDose) {
const blueDailyDoseButton = document.getElementById('clicked-daily-dose');
if (blueDailyDoseButton == null) {
    e.target.setAttribute('id', 'clicked-daily-dose');
} else {
    blueDailyDoseButton.removeAttribute('id', 'clicked-daily-dose');
    e.target.setAttribute('id', 'clicked-daily-dose');
}
    dailyDoseInt = parseFloat(e.target.dataset.value);
    console.log(dailyDoseInt);
    // return dailyDoseInt;
}
dailyDosagesButtons.forEach(button => button.addEventListener('click', handleDailyDoseClick));



//Adding listeners to administer frequency buttons and logging value
//Also checking if buttons have id of clicked and removing if necessary then adding id of clicked to button clicked
let adminFrequencyInt = 0;

function handleAdminFrequencyClick(e, adminFrequency) {
const blueAdminFrequencyButton = document.getElementById('clicked-admin-freq');
if (blueAdminFrequencyButton == null) {
    e.target.setAttribute('id', 'clicked-admin-freq');
} else {
    blueAdminFrequencyButton.removeAttribute('id', 'clicked-admin-freq');
    e.target.setAttribute('id', 'clicked-admin-freq');
}
    adminFrequencyInt = parseFloat(e.target.dataset.value);
    console.log(adminFrequencyInt);
    // return adminFrequencyInt;
}
administerFrequencyButtons.forEach(button => button.addEventListener('click', handleAdminFrequencyClick));


//Logic to check two buttons have been clicked before running handler function 

let firstButtonClicked = false;
let secondButtonClicked = false;

let totalDosageAmount = 0;

//Here (below) the dailyDoseInt and adminFrequencyInt values - aren't coming in

function handler() {
    // firstButtonClicked = false;
    // secondButtonClicked = false;
    totalDosageAmount = dailyDoseInt * adminFrequencyInt;
    console.log('I am the handler function and I have run!');
    console.log(totalDosageAmount);
}
// are needed to be multiplied together

dailyDosagesButtons.forEach(button => button.addEventListener('click', ()=>{
    firstButtonClicked = true;
    if(firstButtonClicked && secondButtonClicked) handler()
}))

administerFrequencyButtons.forEach(button => button.addEventListener('click', ()=>{
    secondButtonClicked = true;
    if(firstButtonClicked && secondButtonClicked) handler()
}));







//Function to calculate total dosage
// function handleCalculateTotalDosage(dailyDose, adminFrequency) {
//     const totalDosage = dailyDose * adminFrequency;
//     console.log(totalDosage);
// }








