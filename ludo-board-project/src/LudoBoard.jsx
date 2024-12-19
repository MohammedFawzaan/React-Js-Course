import { useState } from "react";

export default function LudoBoard() {

    let [Moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});
    let [Arr, setArr] = useState(["No Moves"]);

    function updateBlue() {
        setMoves((prevState) => {
            return {...prevState, blue: prevState.blue+1}
        })
        setArr((prevState) => {
            const updatedArray = [...prevState];
            updatedArray.shift();
            updatedArray.push("Blue moves");
            return updatedArray
        })
    }
    let updateYellow = () => {
        setMoves((prevState) => {
            return {...prevState, yellow: prevState.yellow+1}
        })
        setArr((prevState) => {
            const updatedArray = [...prevState];
            updatedArray.shift();
            updatedArray.push("Yellow moves");
            return updatedArray
        })
    }
    let updateGreen = () => {
        setMoves((prevState) => {
            return {...prevState, green: prevState.green+1}
        })
        setArr((prevState) => {
            const updatedArray = [...prevState];
            updatedArray.shift();
            updatedArray.push("Green moves");
            return updatedArray
        })
    }
    let updateRed = () => {
        setMoves((prevState) => {
            return {...prevState, red: prevState.red+1}
        })
        setArr((prevState) => {
            const updatedArray = [...prevState];
            updatedArray.shift();
            updatedArray.push("Red moves");
            return updatedArray
        })
    }
    return (
        <div>
            <h1>Game Begins</h1>
            <p>{Arr}</p>
            <div className="board">
                <p>Blue Moves = {Moves.blue}</p>
                <button onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {Moves.yellow}</p>
                <button onClick={updateYellow}>+1</button>
                <p>Green Moves = {Moves.green}</p>
                <button onClick={updateGreen}>+1</button>
                <p>Red Moves = {Moves.red}</p>
                <button onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}