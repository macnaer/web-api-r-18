export const getAllContacts = (data) => {
    return {
        type: "CONTACT_LIST_LOADED",
        payload: data.List
    }
}