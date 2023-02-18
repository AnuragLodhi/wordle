import Titlebar from "./components/Titlebar";


function Menu(props) {

    return (
        <>
            <Titlebar />
            <button onClick={props.startGame}>Start</button>
        </>
    )
}

export default Menu