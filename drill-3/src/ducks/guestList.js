
const ADDGUEST = 'ADDGUEST';
const REMOVEGUEST = 'REMOVEGUEST';



const initialState = {
  guests: ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff']
}


export function addGuest(guestName){
  return {
    type: ADDGUEST,
    payload: guestName
  }
}

export function removeGuest(i){
  return {
    type: REMOVEGUEST,
    payload: i
  }
}

export default function reducer(state = initialState, action) {

  switch(action.type) {

    case ADDGUEST:
      return Object.assign({}, state, {
        guests: state.guests + action.payload
      })

      case REMOVEGUEST:
        return Object.assign({}, state, {guests: state.guests.filter((guest, i) => i !== action.payload)});

    default:
      return state;
  }

}
