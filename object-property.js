const students =  [
    {id: 21, name: "omar sunny"},
    {id: 31, name: "manna"},
    {id: 41, name: "moyouri"},
    {id: 71, name: "deepjol"}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>40);
const biggerOne = students.find(s => s.id>40);
console.log(biggerOne);