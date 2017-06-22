//state argument is not application state, only the state this reducer is responsible for
//at any point of time reducer doesnt return undefined and throw error. so to handle this if the state value is undefined we
//are setting state value equal to null
export default function(state = null, action){
  switch(action.type){
    case "BOOK_SELECTED":
      return action.payload;
  }
  return state;
}
