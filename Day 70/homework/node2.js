// objects

const person = {
    name: "George",
    age: 30,
    city: "Tbilisi"
};

console.log(`Name: ${person.name}, Age: ${person.age}`);

person.email = "George@example.com";

const car = {
    make: "Mercedes",
    model: "CLS",
    owner: {
        name: "George",
        age: 30
    }
};

console.log(`Owner's Name: ${car.owner.name}, Owner's Age: ${car.owner.age}`);


car.model = "CLA";

car.calculateCarAge = function(yearManufactured) {
    const currentYear = new Date().getFullYear();
    return currentYear - yearManufactured;
};

console.log(`Car Age: ${car.calculateCarAge(2019)} years`);

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}