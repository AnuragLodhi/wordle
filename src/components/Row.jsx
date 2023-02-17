import Cell from "./Cell";

const Row = (props) => {
    return (
        <div className="gap flex">
            <Cell letter={props.word[0]} color={props.status[0]}/>
            <Cell letter={props.word[1]} color={props.status[1]}/>
            <Cell letter={props.word[2]} color={props.status[2]}/>
            <Cell letter={props.word[3]} color={props.status[3]}/>
            <Cell letter={props.word[4]} color={props.status[4]}/>
        </div>
    )
}

export default Row;