module.exports = function(){
    var faker = require("faker"); // importing module to generate fake JSON data.
    var _ = require("lodash"); // importing JSON colloction data processing module Similar to underscore library.

    return {
        staff_members: _.times(15, function(n){
            return {
                id: n,
                name: {
                    prefix: faker.name.prefix(),
                    full: faker.name.findName()
                },
                age: faker.random.number({ 'min': 20, 'max': 50 }),
                email: faker.internet.email(),
                address: {
                    street: faker.address.streetName(),
                    city: faker.address.city(),
                    state: faker.address.state(),
                    zip: faker.address.zipCode()
                },
                phone: faker.phone.phoneNumber(),
                experience: faker.lorem.paragraph(),
                avatar: faker.internet.avatar(),
                social: {
                    twitter: "https://twitter.com/",
                    facebook: "https://www.facebook.com/",
                    linkedin: "https://www.linkedin.com/"
                },
                isSelected: faker.random.boolean(),
                appointments: []
            }
        })
    };
};