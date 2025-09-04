const initialState = {
    title: 'old title',
    aboutTitle: 'old about title',
    contactsTitle: "",
    counter: 0
}


export default function reducer(state = initialState, action){

    if (action.type === 'Change_title') {
        return {title: 'New Title'}
    }else if(action.type === 'CHANGE_ABOUT_TITLE'){
        return {...state, aboutTitle: 'New about'}
    }else if(action.type === "WITH_PARAMS"){
        return {...state, contactsTitle: action.payload}
    }else if(action.type === "INCREMENT_COUNTER"){
        return {...state, counter: state.counter + 1}
    }else if(action.type === "DECREMENT_COUNTER"){
        return {...state, counter: state.counter - 1}
    }

    return state
}