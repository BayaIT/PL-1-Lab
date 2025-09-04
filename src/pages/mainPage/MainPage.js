import react from "react";
import {useDispatch, useSelector} from 'react-redux';

function MainPage(){
    const title = useSelector(state=> state.title)
    const dispath = useDispatch()

    const changeTitle = () =>{
        dispath({
            type: "Change_title"
        })
    }


    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
        </div>
        
    )
}

export default MainPage;