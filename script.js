const names = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const uniqueNames = [];
const uniqueIds = new Set();

for (const name of names) {
  if (!uniqueIds.has(name.id)) {
    uniqueIds.add(name.id);
    uniqueNames.push(name);
  }
}
console.log(uniqueIds);
console.log(uniqueNames);
