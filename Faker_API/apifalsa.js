const { faker } = require('@faker-js/faker')

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
console.log(new Company());
console.log(new User());