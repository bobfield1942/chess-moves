import "./App.css";
import { legalMove } from "./Api/kt-api";
import Board from "./Board/Board";
import React, { useState } from "react";
import { columns } from "./utils";

function App() {
  const [logs, setLogs] = useState([]);
  const [knightPosition, setKnightPosition] = useState([0, 0]);

  const checkMove = async ([row, col]) => {
    const result = await legalMove(knightPosition, [row, col]);

    setLogs([
      ...logs,
      `From: ${columns[knightPosition[1]] + knightPosition[0]} to ${
        columns[col] + row
      }, legal: ${result}`,
    ]);

    setKnightPosition(result ? [row, col] : knightPosition);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="infoPanel">
          <b>Logs:</b>
          <div className="logs">
            {logs.map((log, index) => (
              <div
                className={`log-item ${
                  log.substring(log.length - 4, log.length) === "true"
                    ? "legal"
                    : "illegal"
                }`}
                key={index}
              >
                <span>{log}</span>
              </div>
            ))}
          </div>
        </div>
        <Board knightPosition={knightPosition} movePiece={checkMove} />
      </div>
    </div>
  );
}

export default App;
