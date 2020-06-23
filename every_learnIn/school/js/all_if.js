

var myMonth = 6;
var thisMonth = 12;

var birthdayCheck = myMonth == thisMonth;

console.log(birthdayCheck);

document.getElementById('birthdayId').textContent = birthdayCheck;

var nowPeople = 1;
var totalPeople = 2;
var allPeopleNoHereCheck = totalPeople !== nowPeople;
console.log(allPeopleNoHereCheck);
document.getElementById('peopleId').textContent = allPeopleNoHereCheck;

