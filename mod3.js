// Step 1

const fs = require("fs");
const util = require("util");

const employeeRawData = fs.readFileSync("Workshop_JSON_Employees.txt", "utf8");
const salesRawData = fs.readFileSync("Workshop_JSON_Sales.txt", "utf8");

// Parse read file to JSON format
const employees = JSON.parse(employeeRawData);
const sales = JSON.parse(salesRawData);

// Step 2

// Step 3
function findEmployeeById(id) {
  return employees.filter((employee) => {
    return employee.id === id;
  });
}
function findSalesById(id) {
  return sales.filter((sale) => {
    return sale.staffId === id;
  });
}

module.exports = {
  findEmployeeById,
  findSalesById,
};

// Step 4
function filterEmployees(prop, value) {
  return employees.filter((employee) => {
    return employee[prop] === value;
  });
}
function filterSales(prop, value) {
  return sales.filter((sale) => {
    return sale[prop] === value;
  });
}

// Bonus Tasks
function addSalesDataToEmployees() {
  const employeesWithSales = [];
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    employee.sales = [];
    for (let j = 0; j < sales.length; j++) {
      const sale = sales[j];
      if (employee.id === sale.staffId) {
        employee.sales.push(sale);
      }
    }
    employeesWithSales.push(employee);
  }

  return employeesWithSales;
}

function formatEmployeeAndSalesData() {
  const employeesWithSales = addSalesDataToEmployees();
  for (let i = 0; i < employeesWithSales.length; i++) {
    const employee = employeesWithSales[i];
    let totalSales = 0;
    if (employee.sales.length > 0) {
      for (let j = 0; j < employee.sales.length; j++) {
        const sale = employee.sales[j];
        totalSales += sale.price;
      }
      console.log(
        `${employee.firstName} ${employee.lastName} who holds the position of ${employee.position} has made a total of $${totalSales}`
      );
    } else {
      console.log(
        `${employee.firstName} ${employee.lastName} who holds the position of ${employee.position} has made a total of $${totalSales}`
      );
    }
  }
}
