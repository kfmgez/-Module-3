//Step 1: Script

function Employee(id, firstName, lastName, gender, age, position) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.position = position;
}

function Sale(id, item, price, date) {
    this.id = id;
    this.item = item;
    this.price = price;
    this.date = date;
}

const employees = [
    new Employee(1, "John", "Smith", "Male", 23, "Manager"),
    new Employee(2, "Mary", "Sue", "Female", 32, "Salesperson"),
    new Employee(3, "Fred", "Jones", "Non-Binary", 54, "Salesperson"),
    new Employee(4, "Jane", "Doe", "Female", 41, "Accounant"),
    new Employee(5, "Joe", "Bloggs", "Male", 65, "IT Administrator")
] 

const sales = [
    new Sale(1, "Wi-Fi Adapter", 40.00, "01-09-2022"),
    new Sale(1, "Wi-Fi Adapter", 40.00, "03-09-2022"),
    new Sale(1, "USB Cable", 5.00, "03-09-2022"),
    new Sale(1, "Thermal Paste", 40.00, "05-09-2022"),
    new Sale(1, "Wi-Fi Adapter", 40.00, "07-09-2022"),
    new Sale(2, "USB Stick", 10.99, "06-09-2022"),
    new Sale(3, "Pre-built PC", 1999.95, "02-09-2022"),
    new Sale(3, "USB Cable", 5.00, "02-09-2022"),
    new Sale(3, "HDMI Cable", 15.45, "02-09-2022")
]

//Step 2: Function (a)
function showEmployeeDetails (employee) {
    console.log(`Name: ${employee.firstName} ${employee.lastName}\nStaff ID: ${employee.id}\nAge and Gender: ${employee.age}, ${employee.gender}\nPosition: ${employee.position}`)
}

function showSaleDetails (sale) {
    console.log(`Staff ID: ${sale.id}\nDate of sale: ${sale.date}\nItem Sold: ${sale.item}\nItem Price: ${sale.price}`)
}

function viewAllEmployees(employees) {
    for (let i = 0; i < employees.length; i++) {
        showEmployeeDetails(employees[i]);
    }
}

function viewAllSales(sales) {
    for (let i = 0; i < sales.length; i++) {
        showSaleDetails(sales[i]);
    }
}

//Step 3: Function (b)
function findEmployeeWithId (id) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            return employees[i];
        }
    }
    console.log(`No employee with ID ${id} found!`)
}

function findSaleById(id, sales) {
    for (let i = 0; i < sales.length; i++) {
        if (sales[i].id === id) {
            return sales[i];
        }
    }
    console.log(`No employee with ID ${id} found!`);
}

//Step 4: Function (c)
function findEmployeesWithPosition(position, employees) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].position === position) {
            console.log(`Employee with staff ID ${employees[i].id} is a ${position}`)
        }
    }
}

function findSaleOverTenDollars() {
    for (let i = 0; i < sales.length; i++) {
        if (sales[i].price > 10) {
            console.log(`Staff ${sales[i].id} sold "${sales[i].item}" for ${sales[i].price}`)
        }
    }
}

console.log(viewAllEmployees(employees))
console.log(findEmployeesWithPosition("Salesperson", employees))
findSaleOverTenDollars()

