// contains all the actions that we make


//action select book which will be mapped when a user clicks a book
export function SelectBook(book) {
  // returns an object with type property
  // all actions has a type which describes the purpose of the action and the data payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
