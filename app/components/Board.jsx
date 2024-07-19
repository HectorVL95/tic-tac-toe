'use client'

import { Box } from "@mui/material";
import Button from "./Button";

const Board = () => {

  return (
    <Box className="grid grid-rows-3 grid-cols-3 gap-2 bg-[#063970]">
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </Box>
  );
}

export default Board;