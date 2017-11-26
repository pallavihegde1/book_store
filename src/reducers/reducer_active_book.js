// state argument is not application state here , its the state that this reducer maps to
//
// if the state is undefined when it comes , set the intial state to null
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}
