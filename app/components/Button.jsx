'use client'

import { Box } from "@mui/material";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { playerTurn } from "../state";

const Button = () => {

  const [turn, setTurn] = useState(playerTurn)
  const [defaultVal, setDefaultVal] = useState('')


  const handleClick = () => {
    const newPlayerTurn = !turn;
    setTurn(newPlayerTurn)
    setDefaultVal(newPlayerTurn ? 'O' : 'X')

    if 
    }

  return (
    <Box onClick={handleClick} className="bg-[#76b5c5] border-solid hover:border-dotted hover:pointer border-2 border-sky-500">
      <Box>
        { defaultVal }
      </Box>
    </Box>
  );
}

export default Button;