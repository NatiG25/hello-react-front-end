const GREETING = 'GREETING';

export const get_greeting = (payload) => ({ type: GREETING, payload });

const url = 'http://[::1]:3000/api/v1/messages.json';
export const fetchGreetings = () => async (dispach) => {
  const res = await fetch(url);
  const resJSON = await res.json();

  dispach(get_greeting(resJSON));
};

const greetingReducer = (state = [], action) => {
  switch (action.type) {
    case GREETING:
      return action.payload;

    default: return state;
  }
};

export default greetingReducer;
