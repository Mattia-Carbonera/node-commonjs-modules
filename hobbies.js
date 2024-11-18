const hobbyOne = "Calcio";
const hobbyTwo = "Moto";
const hobbyThree = "Tennis";

const hobbies = (hobbyOne, hobbyTwo, hobbyThree) => {
  const hobbies = { hobbyOne, hobbyTwo, hobbyThree };

  return hobbies;
};

module.exports = hobbies(hobbyOne, hobbyTwo, hobbyThree);
