
const Cell = (props) => {

    return (
        <span className={`cell ${props.color === 1 ? 'close' : (props.color === 2 ? 'exact' : (props.color === 0 ? 'wrong' : ''))}`}>{props.letter}</span>
    )
}

export default Cell;