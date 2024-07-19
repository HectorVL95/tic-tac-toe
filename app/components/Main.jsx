'use client'

import Board from "./Board";
import { Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { playerTurn } from "../state";


const Main = () => {



  const [turn, setTurn] = useRecoilState(playerTurn)

    const turnStyles = `${turn ? "text-red-500" : "text-green-500"} text-lg text-center`

  const handleClick = () => {
    setTurn(!turn)
  }

  return (
    <main className="w-[80%] flex flex-col justify-center">
    <Typography variant="h1"  className="text-white text-center">Tic Tac Toe</Typography>
    <Typography className={turnStyles}> Player {turn ? "2" : "1"} </Typography> 
    <Board />
  </main>
  );
}

export default Main;