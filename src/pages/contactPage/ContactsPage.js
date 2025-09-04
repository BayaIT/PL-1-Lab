import react from "react";
import { useDispatch, useSelector } from "react-redux";

function ContactPage(){

    const title = useSelector(state => state.contactsTitle)
    const dispatch = useDispatch()

    const withParams = () =>{
        dispatch({
            type: 'WITH_PARAMS',
            payload: 'hello МУЦА'
        })
    }
//
    return (
        <div>
            <h1></h1>
            <button>change title with params</button>
            <h1>----------------</h1>
            <input type="text" />
            <button onClick={withParams}>change title with params</button>
        </div>
    )
}
export default ContactPage;