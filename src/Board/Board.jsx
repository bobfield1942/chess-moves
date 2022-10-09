import React, { useState } from "react";
import "./board.css";
import { columns } from "../utils";

const createBoard = (size, columns) => {
  const board = [];
  let whiteSquare = true;
  for (let row = 0; row < size; row++) {
    const currentRow = [];
    for (let i = 0; i < columns.length; i++) {
      currentRow.push({
        name: columns[i] + row,
        colour: whiteSquare,
        xy: [row, i],
        piece: 0,
      });
      whiteSquare = !whiteSquare;
    }
    board.push(currentRow);
    whiteSquare = !whiteSquare;
  }
  return board;
};

export default function Board({ knightPosition, movePiece }) {
  const BOARD_SIZE = 8;
  const board = createBoard(BOARD_SIZE, columns);

  return (
    <React.Fragment>
      <div className="board">
        {board.map((row, index) => (
          <div className="row" key={row + index} onClick={() => {}}>
            {row.map((cell) => (
              <div
                key={cell.name}
                className={`cell ${
                  cell.colour === false ? "square-dark" : "square-light"
                }`}
                onClick={() => movePiece(cell.xy)}
              >
                {cell.name}
                {cell.xy[0] === knightPosition[0] &&
                  cell.xy[1] === knightPosition[1] && (
                    <div className="knight" />
                  )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
