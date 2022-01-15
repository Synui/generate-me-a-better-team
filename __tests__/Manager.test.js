const Manager = require('../lib/Manager');

test("get's office number", () => {
    const manager = new Manager('Hamilton', 13, 'fake3.email@yahoo.com', 1);

    expect(manager.officeNumber).toBe(1);
});

test("get's office number returned", () => {
    const manager = new Manager('Hamilton', 13, 'fake3.email@yahoo.com', 1);

    expect(manager.getOfficeNumber()).toBe(1);
});

test("get's the Manager class returned", () => {
    const manager = new Manager('Hamilton', 13, 'fake3.email@yahoo.com', 1);

    expect(manager.getRole()).toBe(Manager);
});