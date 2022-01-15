const Engineer = require('../lib/Engineer');

test("get's github username", () => {
    const engineer = new Engineer('Eliza', 12, 'fake1.email@yahoo.com', 'lafayette');

    expect(engineer.github).toBe('lafayette');
});

test("get's github returned", () => {
    const engineer = new Engineer('Eliza', 12, 'fake1.email@yahoo.com', 'lafayette');

    expect(engineer.getGithub()).toBe('lafayette');
});

test("get's the Engineer class returned", () => {
    const engineer = new Engineer('Eliza', 12, 'fake1.email@yahoo.com', 'lafayette');

    expect(engineer.getRole()).toBe(Engineer);
});
