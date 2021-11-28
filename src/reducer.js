export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const newPeople = [...state.people, action.payload];
            return {...state, people:newPeople, isModalOpen:true, modalContent: "Item Added"};
        };
        case 'NO_VALUE': 
            return {...state, isModalOpen: true, modalContent: 'Please enter value'};
        case 'CLOSE_MODAL':
            return {...state, isModalOpen: false};
        case 'REMOVE_ITEM': {
            const newPeople = state.people.filter((person) => person.id !== action.payload);
            return {...state, people: newPeople};
        };
        default: {
            throw  new Error('no matching action type');
        }
    };
}
