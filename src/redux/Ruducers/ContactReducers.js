const initialState = [
  {
    id: 0,
    name: "Adam Smith",
    email: "adam@gamil.com",
    number: 456123,
  },
  {
    id: 1,
    name: "Milon Roy",
    email: "roy@g.com",
    number: 789123,
  },
];

const ContactReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map(contact =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        contact => contact.id !== action.payload && contact
      );
      state = filterContacts;
      return state;
    default:
      return state;
  }
};

export default ContactReducers;
