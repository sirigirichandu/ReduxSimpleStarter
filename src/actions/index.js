export function selectBook(book){
//selectBook is an action creator., it returns an action, an object with a type property
//action usually has two values : type and payLoad
  return{
    type : 'BOOK_SELECTED',
    payload : book
  };
}
