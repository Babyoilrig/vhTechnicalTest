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

function handleDailyDoseClick(e) {
const blueDailyDoseButton = document.getElementById('clicked-daily-dose');
if (blueDailyDoseButton == null) {
    e.target.setAttribute('id', 'clicked-daily-dose');
} else {
    blueDailyDoseButton.removeAttribute('id', 'clicked-daily-dose');
    e.target.setAttribute('id', 'clicked-daily-dose');
}
    const dailyDose = e.target.value;
    console.log(dailyDose);
    return dailyDose;
}
dailyDosagesButtons.forEach(button => button.addEventListener('click', handleDailyDoseClick));



//Adding listeners to administer frequency buttons and logging value
//Also checking if buttons have id of clicked and removing if necessary then adding id of clicked to button clicked

function handleAdminFrequencyClick(e) {
const blueAdminFrequencyButton = document.getElementById('clicked-admin-freq');
if (blueAdminFrequencyButton == null) {
    e.target.setAttribute('id', 'clicked-admin-freq');
} else {
    blueAdminFrequencyButton.removeAttribute('id', 'clicked-admin-freq');
    e.target.setAttribute('id', 'clicked-admin-freq');
}
    const adminFrequency = e.target.value;
    console.log(adminFrequency);
    return adminFrequency;
}

administerFrequencyButtons.forEach(button => button.addEventListener('click', handleAdminFrequencyClick));


//Check two buttons clicked before running function 
//I think you could do like: 
// if button1.checked && button2.checked - run calculate total dosage
// buttons.forEach(button => button.addEventListener('click', handleCalculateTotalDosage));

let firstButtonClicked = false;
let secondButtonClicked = false;

function handler() {
    firstButtonClicked = false;
    secondButtonClicked = false;
    console.log('I am the handler function and I have run!');
}

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








