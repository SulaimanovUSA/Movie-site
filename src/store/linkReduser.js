const defaultState = {
  link: '',
  name: '',
  views: '',
  description: '',
}

export const linkReduser = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_LINK': 
      return { ...state, link: action.payload };
    case 'GET_NAME': 
      return { ...state, name: action.payload };
    case 'GET_VIEWS': 
      return { ...state, views: action.payload };
    case 'GET_DESCRIPTION': 
      return { ...state, description: action.payload };

    default: 
      return state;
  }
}