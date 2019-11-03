const initState = {
  risk: -1,
  safeLocation: {
    latitude: 42.6526,
    longitude: -73.7562
  }
};

const reducer = (state=initState, action) => {
switch(action.type){
  case 'CHANGE_INFO':
    const { info } = action;
    return info;
  default:
      return state;
}
};

export default reducer;