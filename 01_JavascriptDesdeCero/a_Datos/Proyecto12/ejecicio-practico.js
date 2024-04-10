// Social media profile

// User information
const username = "Ghost";
const fullName = "Alex Doe";
const age = 25;
const isStudent = true;

// Addres
const address = {
  street: "123 Masda street",
  city: "Techville",
  state: "Land",
};
address.zipCode = 54321;

// Hobbies
const hobbies = ["Coding", "Play", "Game"];

// Generating personalized bio
const personalizedBio = `Hi, I'm ${fullName}, ${age} years old, from ${
  address.city
}, ${address.state}. I enjoy ${hobbies.join(", ")}.`;

// Print the message
console.log(personalizedBio);
