const initState = {
    alt: -1,
    region: {
      longitude: -73.7562,
      latitude: 42.6526,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
  }
};

const reducer = (state=initState, action) => {
  switch(action.type){
    case 'CHANGE_LOCATION':
      const { location } = action;
      return location;
    default:
        return state;
  }
};

export default reducer;