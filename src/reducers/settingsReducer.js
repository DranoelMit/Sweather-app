const initState = {
  contacts: [],
  author:   ""
}

const reducer = (state=initState, action) => {
  switch(action.type){
    case 'CHANGE_CONTACTS':
      const settings = action;
      return settings;
    default:
        return state;
  }
};

export default reducer;