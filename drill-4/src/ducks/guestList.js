const ADD_GUEST = 'ADD_GUEST';
const REMOVE_GUEST = 'REMOVE_GUEST';
const EDIT_GUEST = 'EDIT_GUEST';

const initialState = {
  guests: [
    'Tony Stark',
    'Steve Rodgers',
    'Nick Fury',
    'Natasha Romanoff',
    'Clint Barton',
    'Bruce Banner',
    'Wanda Maximoff'
  ]
};

export function addGuest(guest) {
  return {type: ADD_GUEST, payload: guest}
}

export function removeGuest(i) {
  return {type: REMOVE_GUEST, payload: i}
}

export function editGuest(index, updatedGuest) {

  return {
    type: EDIT_GUEST,
    index: index,
    guest: updatedGuest
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GUEST:
      return Object.assign({}, state, {
        guests: [
          ...state,
          action.payload
        ]
      });

    case REMOVE_GUEST:
      return Object.assign({}, state, {
        guests: state.guests.filter((guest, i) => i !== action.payload)
      });

    case EDIT_GUEST:
      const newArr = state.guests
      newArr[action.index] = action.guest
      return Object.assign({}, state, {guests: newArr})

    default:
      return state;
  }
}
