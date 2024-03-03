class BankAccount {
    constructor(accountHolder, initBalance) {
        this.accountHolder = accountHolder;
        let _balance = initBalance;

        let _isAmountValid = (amount) => {
            return typeof amount === "number" && amount > 0;
        }

        this.deposit = (amount) => {
            if (_isAmountValid(amount)) {
                _balance += amount;
                console.log(`Deposited Rs.${amount}. New Balance is: ` + _balance);
            }
            else {
                console.log("Invalid  deposit amount. Please Enter a +ve Amount");
            }
        }
        this.withdraw = (amount) => {
            if (_isAmountValid(amount)) {
                if (_balance >= amount) {
                    _balance = _balance - amount;
                    console.log(`Withdrawn Rs.${amount}. New Balance is: ` + _balance);
                }
                else {
                    console.log("Insufficient Fund for Withrdrawal.");
                }
            }
            else {
                console.log("Invalid  withdrawn amount. Please Enter a +ve Amount");
            }
        }
        this.checkBalance = () => {
            return console.log(`Current Balance of ${this.accountHolder} Account is: ` + _balance)
        }
    }
}

const myAccount = new BankAccount('Anas', 1000)

myAccount.checkBalance();

myAccount.deposit(500)
myAccount.deposit(-50)

myAccount.withdraw(200)
myAccount.withdraw(1200)
myAccount.withdraw(-20)

myAccount.checkBalance()