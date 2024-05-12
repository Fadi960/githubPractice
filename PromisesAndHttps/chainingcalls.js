// chaining call and converting to json

const data = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Doe", age: 40 }
  ];
  
  const result = data
    .filter(person => person.age > 25)
    .map(person => ({ id: person.id, name: person.name }));
  
  const jsonResult = JSON.stringify(result);
  console.log(jsonResult);
console.log(data);  