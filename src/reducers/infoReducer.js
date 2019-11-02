const initState = {
  risk: -1,
  safeLocation: {
    latitude: 82.00,
    longitude: 135.00
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