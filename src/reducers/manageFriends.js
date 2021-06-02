export function manageFriends(state, action){
  switch (action.type){
    case 'ADD_FRIEND':
      return {friends: state.friends << friend}
    case 'REMOVE_FRIEND':
      return {friends: state.friends[state.id].delete}
    default:
      return state;
  }

}
