const express = require('express');
const { faker } = require('@faker-js/faker')
const app = express();
const port = 8000;

class User {
    constructor() {
        this._id = faker.string.uuid();
        this.username = faker.internet.userName();
        this.email = faker.internet.email();
        this.avatar = faker.image.avatar();
        this.password = faker.internet.password();
        this.birthdate = faker.date.past();
        this.registeredAt = faker.date.past();
    }
}

class Company {
    constructor() {
        this._id = faker.string.uuid();
        this.name = faker.company.name();
        this.address = faker.location.streetAddress();
        this.city = faker.location.city();
        this.state = faker.location.state();
        this.zipCode = faker.location.zipCode();
        this.country = faker.location.country();
    }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/user/new', (req, res) => {
    const newUser = new User();
    console.log(newUser);
    res.json({ newUser: newUser });
});
app.post('/api/company/new', (req, res) => {
    const newCompany = new Company ();
    console.log(newCompany);
    res.json({ newCompany: newCompany });
});

app.post('/api/user/company', (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    res.json({ newUser, newCompany });
} );

app.listen(port, () => {
    console.log(`Listening on port ${port} for requests to respond to.`);
});
