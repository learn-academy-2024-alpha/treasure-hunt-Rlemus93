import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [treasureLocation, setTreasureLocation]= useState( Math.floor(Math.random() * board.length))
  console.log(treasureLocation, "shiny")

  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))
  console.log(bombLocation, "boom")

  const handleGamePlay = (currentSquare) => {
    if(currentSquare === treasureLocation){
      board[currentSquare] = "💎"
      setBoard([...board])
    } else if (currentSquare === bombLocation){
      board[currentSquare] = "💣"
      setBoard([...board])
    } else {
      board[currentSquare] = "🌴"
      setBoard([...board])
    }
  }

  const handlePlayAgain = () => {

      setTreasureLocation( Math.floor(Math.random() * board.length))
      setBombLocation(Math.floor(Math.random() * board.length))
      setBoard([ 
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"])
  }
  

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
      {board.map((square, index) => {
        return <Square square={square} index={index}
        key={index} handleGamePlay={handleGamePlay}/>
      })}
      </div>
      <button onClick={handlePlayAgain}>Play Again</button>
    </>
  )
}

export default App
