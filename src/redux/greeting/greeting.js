const GREETING = 'GREETING';

export const getGreeting = (payload) => ({ type: GREETING, payload });

const url = 'http://[::1]:3000/api/v1/messages';
export const fetchGreetings = () => async (dispach) => {
  const res = await fetch(url);
  const resJSON = await res.json();

  dispach(getGreeting(resJSON));
};

const greetingReducer = (state = [], action) => {
  switch (action.type) {
    case GREETING:
      return action.payload;

    default: return state;
  }
};

export default greetingReducer;
