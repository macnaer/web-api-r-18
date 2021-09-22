const initialState = {
    List: [],
    CurrentContact: ""
}

const ContactListReducer = (state = initialState, action) => {

    switch (action.type) {
        case "CONTACT_LIST_LOADED":
            return {
                ...state,
                List: action.payload
            }
        default: return state;
    }
}

export default ContactListReducer;