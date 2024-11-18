const names = require("./names.js");
const hobbies = require("./hobbies.js");

const people = () => {
  const { firstName, lastName } = names;

  const people = { firstName, lastName, hobbies };
  return { people };
};

console.log(people());
