// Metodos que modifical el array Original (Mutabilidad)
// PUSH()
const countries = ["USA", "Canada", "UK"];
const newCountries = countries.push("Germany", "Australia");

console.log(countries);
console.log(newCountries);

// pop()
const removedCountry = countries.pop();
console.log(countries);
console.log(removedCountry);

// Manejo de stack
let bookCard = [];

const ADD_TO_CARD_ACTION = "addToCard";
const REMOVE_FROM_CART_ACTION = "removeFromCart";
const VIEW_CART_ACTION = "viewCart";

function viewCart(){console.log('Current Cart of Books: ', bookCard)}

function performCartActions(action, newBook) {
  switch (action) {
    case ADD_TO_CARD_ACTION:
      bookCard.push(newBook);
      break;
    case REMOVE_FROM_CART_ACTION:
      if (bookCard.length === 0) {
        console.log("Cart is empty. No books to remove.");
      } else {
        const removedBook = bookCard.pop();
        console.log(`Removed book from the cart: ${removedBook}`)
      }
      break;
    case VIEW_CART_ACTION:
      viewCart()
      break;
    default:
      console.log('Invalid action. Please restart the system')
      break;
  }
}

performCartActions(ADD_TO_CARD_ACTION, 'The mesuas')
performCartActions(ADD_TO_CARD_ACTION, 'The kong')
performCartActions(ADD_TO_CARD_ACTION, 'The masdas')
performCartActions(VIEW_CART_ACTION)
performCartActions(REMOVE_FROM_CART_ACTION)
performCartActions(VIEW_CART_ACTION)
console.log(ADD_TO_CARD_ACTION)