class Employee {
  constructor(name, address, phone, email, age) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.age = age;
  }
  isEligibleForPension() {
    if (this.email >= 60) {
      console.log("The Person Is Eligible For Pension")
    }
    else {
      console.log("The Person Is Not Eligible For Pension")
    }
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`)
  }
}

const employee = new Employee("John", "London", 123456789, 60, 30);
employee.introduceSelf();
employee.isEligibleForPension();

