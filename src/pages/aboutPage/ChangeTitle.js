import { useDispatch } from "react-redux"

function ChangeTitle(){

    const dispath = useDispatch();
    const changeAboutTitle = () =>{
        dispath({
            type: 'CHANGE_ABOUT_TITLE'
        })
    }

    return(
        <div>
            <button onClick={changeAboutTitle}>change about text</button>
        </div>
    )
}

export default ChangeTitle