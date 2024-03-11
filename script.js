// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

var firstName = []
var lastName = []
var salary = []
var employeesArray = []


// Collect employee data
const collectEmployees = function () {
  const employee = [];
  let keepEntering = true;

  while (keepEntering) {
    let firstName = window.prompt("Please enter the employee's first name")
    let lastName = window.prompt("Please enter the employee's last name")
    let salary = window.prompt("Please enter the employee's salary")
    if (isNaN(salary) === true) {
      let salary = window.prompt("Please enter a vaild number")
    }
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat((salary)),
    };
    employeesArray.push(employee)

    let keepEntering = window.confirm("Do you want to add another employee");

    if (keepEntering == false) {
      return employeesArray;
    }
  }
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  console.log (employeesArray)
  let sum = 0
  for (let i= 0; i<employeesArray.length; i++) {
    console.log(employeesArray[i].salary)
    sum = sum + employeesArray[i].salary
  }
    const average = sum / employeesArray.length;
    console.log("Sum:", sum);
    console.log("Average:", average);
  }

  // Select a random employee
  const getRandomEmployee = function (employeesArray) {
    const getRandomEmployee = employeesArray[(Math.random() * employeesArray.length) | 0]
  }

  /*
    ====================
    STARTER CODE
    Do not modify any of the code below this line:
  */

  // Display employee data in an HTML table
  const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');

    // Clear the employee table
    employeeTable.innerHTML = '';

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];

      const newTableRow = document.createElement("tr");

      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = currentEmployee.firstName;
      newTableRow.append(firstNameCell);

      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = currentEmployee.lastName;
      newTableRow.append(lastNameCell);

      const salaryCell = document.createElement("td");
      // Format the salary as currency
      salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });

      newTableRow.append(salaryCell);

      employeeTable.append(newTableRow);
    }
  }

  const trackEmployeeData = function () {
    const employees = collectEmployees();

    console.table(employees);

    displayAverageSalary(employees);

    console.log('==============================');

    getRandomEmployee(employees);

    employees.sort(function (a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });

    displayEmployees(employees);
  }

  // Add event listener to 'Add Employees' button
  addEmployeesBtn.addEventListener('click', trackEmployeeData)

