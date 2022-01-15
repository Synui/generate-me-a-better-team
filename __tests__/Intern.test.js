const Intern = require('../lib/Intern');

test("get's school name", () => {
    const intern = new Intern('Peggy', 13, 'fake2.email@yahoo.com', 'Hamilton High');

    expect(intern.school).toBe('Hamilton High');
});

test("get's school name returned", () => {
    const intern = new Intern('Peggy', 13, 'fake2.email@yahoo.com', 'Hamilton High');

    expect(intern.getSchool()).toBe('Hamilton High');
});

test("get's the Intern class returned", () => {
    const intern = new Intern('Peggy', 13, 'fake2.email@yahoo.com', 'Hamilton High');

    expect(intern.getRole()).toBe(Intern);
})