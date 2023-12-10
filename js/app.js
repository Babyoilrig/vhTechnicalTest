console.log("It works!");

//Selecting elements

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

//Adding event listeners

// Adding listeners to daily dosage buttons

function handleDailyDoseClick(e) {
    const dailyDose = e.target.value;
    console.log(dailyDose);
}
dailyDosagesButtons.forEach(button => button.addEventListener('click', handleDailyDoseClick));


//Adding listeners to administer frequency buttons
function handleAdminFrequencyClick(e) {
    const adminFrequency = e.target.value;
    console.log(adminFrequency);
}

administerFrequencyButtons.forEach(button => button.addEventListener('click', handleAdminFrequencyClick));








