const Loan = function (principle, rate, time, bank) {
  this.principle = principle;
  this.rate = rate;
  this.time = time;
  this.bank = bank;
};
Loan.prototype.displayDetails = function () {
  console.log(
    `Loan Deatails PrincipleAmount : ${this.principle}\nInterest Rage : ${this.rate} \nTotal Time Period : ${this.time}\nBank : ${this.bank}`
  );
};
Loan.prototype.getInterest = function () {
  const interest = (this.principle * this.rate * this.time) / 100.0;
  console.log(`your interest for this loan is Rs.${interest}`);
};
const Car = function (name, yearOfPurchase) {
  this.name = name;
  this.yearOfPurchase = yearOfPurchase;
};
Car.prototype.getDetails = function () {
  return `[Car Name : ${this.name}\nYear of purchase: ${this.yearOfPurchase}]`;
};
const CarLoan = function (
  principle,
  rate,
  time,
  bank,
  carName,
  yearOfPurchase
) {
  Loan.call(this, principle, rate, time, bank);
  this.car = new Car(carName, yearOfPurchase);
};

CarLoan.prototype = Object.create(Loan.prototype);
CarLoan.prototype.constructor = CarLoan;

CarLoan.prototype.onDefault = function () {
  console.log(`${this.car.getDetails()} will be confiscated`);
};

const PersonalLoan = function (principle, rate, time, bank, security) {
  Loan.call(this, principle, rate, time, bank);
  this.security = security;
};

PersonalLoan.prototype = Object.create(Loan.prototype);
PersonalLoan.prototype.constructor = PersonalLoan;

PersonalLoan.prototype.onDefault = function () {
  console.log(`${this.security} will be confiscated`);
};

const carLoanObj = new CarLoan(100000, 6, 3, "SBI", "Hyundai Creta", 2023);
const personalLoanObj = new PersonalLoan(100000, 10, 3, "SBI", "House");

console.log("-------------------------CAR-LOAN-------------------------------");
carLoanObj.displayDetails();
carLoanObj.getInterest();
carLoanObj.onDefault();

console.log(
  "-------------------------PERSONAL-LOAN-----------------------------"
);
personalLoanObj.displayDetails();
personalLoanObj.getInterest();
personalLoanObj.onDefault();
