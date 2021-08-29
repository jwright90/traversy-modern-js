const person = {
  firstName: 'Jason',
  lastName: 'Wright',
  age: 31,
  hobbies: ['coding', 'gardening', 'yoga'],
  address: {
    city: 'Ashford',
    country: 'UK'
  },
  getBirthYear: function () {
    return 2021 - this.age;
  }
}

let output;
output = document.getElementById('output');

let val;
val = person;
val = person.firstName;
val = person.address['city'];
val = person.getBirthYear();

output.innerText = val;

const people = [
  { name: 'John', age: 20 },
  { name: 'Jimbo', age: 52 },
  { name: 'Mike', age: 52 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}


