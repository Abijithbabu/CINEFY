
const TOKEN = localStorage.getItem("token");
console.log('new token');
console.log(TOKEN);
const initialState = {
  userLogin: { loading: false, error: false, message: "" },
  data: {
    isAuthenticated: !!TOKEN,
    token: TOKEN,
    user: null,
  },
}

export function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'user_login':
      return {
        ...state,
        data:{
          isAuthenticated: true,user:payload.user,token:payload.token
        } 
      };
    case 'user_logout':
      return {
        ...state,
        data:{
          isAuthenticated: false,
        }
      };
    default:
      return state;
  }
}