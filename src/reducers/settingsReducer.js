const initState = {
  contacts: []
};

const reducer = (state=initState, action) => {
  switch(action.type){
    case 'CHANGE_CONTACTS':
      const { contacts } = action;
      return contacts;
    default:
        return state;
  }
};

export default reducer;