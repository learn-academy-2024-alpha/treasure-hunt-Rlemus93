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

  const handleGamePlay = (currentSquare) => {
    if(currentSquare === treasureLocation){
      board[currentSquare] = "💎"
      setBoard([...board])
    } else {
      board[currentSquare] = "🌴"
      setBoard([...board])
    }
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
    </>
  )
}

export default App
