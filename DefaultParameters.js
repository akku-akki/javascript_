const calculatePay = (yearSalary, bonus = 0) => yearSalary + bonus;

console.log(calculatePay(200000))

const calculatePayObject = (yearSalary, bonus = { teamBonus: 20, employeeBonus: 200 }) => {
    return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

console.log(`The new bonus is ${calculatePayObject(40000)}`)