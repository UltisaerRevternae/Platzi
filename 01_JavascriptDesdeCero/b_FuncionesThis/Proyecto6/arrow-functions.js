const greeting = function (name) {
  return `Hi, ${name}`;
};

// Arrow function - explicit return

const newGreeting = (name) => {
  return `Hi, ${name}`;
};

// Arrow funcions - implicit return

const newGreetingImplicit = (name) => `Hi, ${name}`;
const newGreetingImplicitWithTwoParameters = (name, lastName) =>
  `Hi, I'm ${name} ${lastName}`;

// Lexical Binding

const finctionalCharacter = {
  name: "Uncle Ben",
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`); // Funciona
  },
  messageWithArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`); // This no funciona
  },
};
finctionalCharacter.messageWithTraditionalFunction(
  "With great power comes great responsability."
);
finctionalCharacter.messageWithArrowFunction("Beware of Doctor Octopus.");
