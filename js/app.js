// console.log("It works!");

//NOTE - I have left all my console logs in this - (so you can see how I have worked things out). 
//Obviously if this were production code - these wouldn't be left in.

//Selecting elements

const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const dailyDosagesButtons = document.querySelectorAll('.dosage-div button');
// console.log(dailyDosagesButtons);

const administerFrequencyButtons = document.querySelectorAll(".administered-div button");
// console.log(administerFrequencyButtons);

const totalDosage = document.querySelector('.total-dosage');
// console.log(totalDosage);

const tabletTotalOneFifty = document.querySelector('.tablet-total-value-150');
// console.log(tabletTotalOneFifty);

const tabletTotalSeventyFive = document.querySelector('.tablet-total-value-75');
// console.log(tabletTotalSeventyFive);

const tabletDailyValueOneFifty = document.querySelector('.tablet-daily-value-150');
// console.log(tabletDailyValueOneFifty);

const tabletDailyValueSeventyFive = document.querySelector('.tablet-daily-value-75');
// console.log(tabletDailyValueSeventyFive);


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

}
dailyDosagesButtons.forEach(button => button.addEventListener('click', handleDailyDoseClick));



//Adding listeners to administer frequency buttons and logging value
//Also checking if buttons have id of clicked and removing if necessary; then adding id of clicked to button clicked
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
}
administerFrequencyButtons.forEach(button => button.addEventListener('click', handleAdminFrequencyClick));


let firstButtonClicked = false;
let secondButtonClicked = false;
let totalDosageAmount = 0;

//Calculating total dosage, inputting value into html
//Calling calculate daily total function

function handler() {
    totalDosageAmount = dailyDoseInt * adminFrequencyInt;
    // console.log('I am the handler function and I have run!');
    totalDosage.textContent = `${totalDosageAmount}mg`
    calculateDailyDosage();
    console.log(totalDosageAmount);
}

// Logic to check two buttons have been clicked before running handler function 
dailyDosagesButtons.forEach(button => button.addEventListener('click', ()=>{
    firstButtonClicked = true;
    if(firstButtonClicked && secondButtonClicked) handler()
}))

administerFrequencyButtons.forEach(button => button.addEventListener('click', ()=>{
    secondButtonClicked = true;
    if(firstButtonClicked && secondButtonClicked) handler()
}));


//Calculating daily dose
//Calling calculate prescription total function
let tabletDaily150 = 0;
let tabletDaily75 = 0;

function calculateDailyDosage() {
    // console.log("I am the calculateDailyDosage function and I ran!");
    if(dailyDoseInt === 75){
        tabletDaily150 = 0;
        tabletDaily75 = 1;
    } else if(dailyDoseInt === 150){
        tabletDaily150 = 1;
        tabletDaily75 = 0;
    } else if(dailyDoseInt === 225){
        tabletDaily150 = 1;
        tabletDaily75 = 1;
    } else if(dailyDoseInt === 300){
        tabletDaily150 = 2;
        tabletDaily75 = 0; 
    } else if(dailyDoseInt === 375){
        tabletDaily150 = 2;
        tabletDaily75 = 1;
    } else {
        tabletDaily150 = 3;
            tabletDaily75 = 0;
    }
    tabletDailyValueOneFifty.textContent = `${tabletDaily150} x`;
    tabletDailyValueSeventyFive.textContent = `${tabletDaily75} x`;
    calculatePrescriptionTotal();
}

//Calculating prescription total
tabletTotal150 = 0;
tabletTotal75 = 0;

function calculatePrescriptionTotal() {
    // console.log("I am the calculatePrescriptionTotal function and I ran!")
    tabletTotal150 = tabletDaily150 * adminFrequencyInt;
    tabletTotal75 = tabletDaily75 * adminFrequencyInt;
    tabletTotalOneFifty.textContent = `${tabletTotal150} x`;
    tabletTotalSeventyFive.textContent = `${tabletTotal75} x`;

}











