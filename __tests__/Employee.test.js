const Employee = require('../lib/Employee');

test("get's name, id and email", () => {
    const employee = new Employee('Angelica', 11, 'fake.email@yahoo.com');

    expect(employee.name).toBe('Angelica');
    expect(employee.id).toBe(11);
    expect(employee.email).toBe('fake.email@yahoo.com');
});

test("get's name returned", () => {
    const employee = new Employee('Angelica');

    expect(employee.getName()).toBe('Angelica');
});

test("get's id returned", () => {
    const employee = new Employee('Angelica', 11);

    expect(employee.getId()).toBe(11);
});

test("get's email returned", () => {
    const employee = new Employee('Angelica', 11, 'fake.email@yahoo.com');

    expect(employee.getEmail()).toBe('fake.email@yahoo.com')
});

test("get's the Employee class returned", () => {
    const employee = new Employee('Angelica', 11, 'fake.email@yahoo.com');

    expect(employee.getRole()).toBe(Employee);
});