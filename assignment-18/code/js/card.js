const Card = function (cardHolderName, cardNumber, cvv, bank) {
  this.cardHolderName = cardHolderName;
  this.cardNumber = cardNumber;
  this.cvv = cvv;
  this.bank = bank;
  this.balance = 0;
  this.due = 0;
};
Card.prototype.displayDetails = function () {
  console.log(
    `Card Holder Name : ${this.cardHolderName}\nCard Number : ${this.cardNumber} \nCvv : ${this.cvv}\nBank : ${this.bank}`
  );
};
Card.prototype.getDues = function () {
  console.log(`you have Rs.${this.due} due ammount`);
};
Card.prototype.payDues = function () {
  console.log(`You have paid Rs.${this.due}.`);
  this.due = 0;
};
const CreditCard = function (
  cardHolderName,
  cardNumber,
  cvv,
  bank,
  creditLimit
) {
  Card.call(this, cardHolderName, cardNumber, cvv, bank);
  this.creditLimit = creditLimit;
};

CreditCard.prototype = Object.create(Card.prototype);
CreditCard.prototype.constructor = CreditCard;

CreditCard.prototype.purchase = function (cost) {
  if (cost + this.balance > this.creditLimit) {
    this.due += 200;
    console.log("over the credit limit, purchase failure");
  } else {
    console.log("purchase successfull");
    this.balance += cost;
  }
};
CreditCard.prototype.showBalance = function () {
  console.log("outstanding credit is : Rs." + this.balance);
};
CreditCard.prototype.payCreditCardBill = function (amount) {
  this.balance -= amount;
  console.log(
    `you have paid Rs.${amount} of credit. Your remaining credit is Rs.${this.balance}`
  );
};

const DebitCard = function (
  cardHolderName,
  cardNumber,
  cvv,
  bank,
  OverDraftLimit
) {
  Card.call(this, cardHolderName, cardNumber, cvv, bank);
  this.OverDraftLimit = OverDraftLimit;
};

DebitCard.prototype = Object.create(Card.prototype);
DebitCard.prototype.constructor = DebitCard;

DebitCard.prototype.withdrawal = function (cost) {
  if (this.balance - cost < 0) {
    this.due += 200;
    console.log("over the over draft limit, purchase failure");
  } else {
    console.log("purchase successfull");
    this.balance -= cost;
  }
};
DebitCard.prototype.showBalance = function () {
  console.log("Your Balance is : Rs." + this.balance);
};
DebitCard.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(
    `you have added Rs.${amount} of Bank Account. Your current balance is Rs.${this.balance}`
  );
};

const creditCardObj = new CreditCard(
  "Nimmala Harsha Vardhan",
  2345675432,
  232,
  "SBI",
  100000
);
const debitCardObj = new DebitCard(
  "Nimmala Harsha Vardhan",
  2345675432,
  232,
  "SBI",
  100000
);
console.log(
  "---------------------------CREDIT-CARD------------------------------"
);
creditCardObj.displayDetails();
creditCardObj.getDues();
creditCardObj.purchase(1000);
creditCardObj.showBalance();
creditCardObj.payCreditCardBill(500);
console.log(
  "----------------------------DEBIT-CARD------------------------------"
);
debitCardObj.displayDetails();
debitCardObj.deposit(10000);
debitCardObj.withdrawal(100);
debitCardObj.showBalance();
