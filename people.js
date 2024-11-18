const names = require("./names.js");
const hobbies = require("./hobbies.js");

const people = () => {
  const { firstName, lastName } = names;

  const result = { firstName, lastName, hobbies };
  return { result };
};

console.log(people());
