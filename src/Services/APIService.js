
class ContactListService {
    URL = "https://react-18-ae119-default-rtdb.firebaseio.com/contact.json";

    async getContactList() {
        const List = await fetch(this.URL)
            .then(responce => {
                return responce.json();
            }).then(data => {
                if (data == null) {
                    return {
                        List: []
                    }
                } else {
                    return {
                        List: data
                    }
                }
            })
        return List
    }

    updateContactList = (list) => {
        fetch(this.URL, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(list)
        })
    }
}

const apiService = new ContactListService();
export default apiService;