const theHobbie = ["moto", "calcio", "tennis"];

const hobbies = (...hobbie) => {
  const allHobbies = { hobbies: hobbie };

  return allHobbies;
};

console.log(hobbies(theHobbie));
