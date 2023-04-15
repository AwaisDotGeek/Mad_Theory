import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Pressable, Alert } from "react-native";

const chessBoard = function () {
  //   const boardArray = new Array(8)
  //     .fill(<Pressable></Pressable>)
  //     .map(() => new Array(8).fill(<Pressable></Pressable>));
  const [text, setText] = useState("");
  const [board, setBoard] = useState([
    ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
    ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
    ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"],
  ]);

  function getPieceImage(pieceName) {
    switch (pieceName) {
      case "bK":
        return require("../assets/chess_pieces/bK.svg");
      case "bQ":
        return require("../assets/chess_pieces/bQ.svg");
      case "bR":
        return require("../assets/chess_pieces/bR.svg");
      case "bN":
        return require("../assets/chess_pieces/bN.svg");
      case "bB":
        return require("../assets/chess_pieces/bB.svg");
      case "bP":
        return require("../assets/chess_pieces/bP.svg");
      case "wK":
        return require("../assets/chess_pieces/wK.svg");
      case "wQ":
        return require("../assets/chess_pieces/wQ.svg");
      case "wR":
        return require("../assets/chess_pieces/wR.svg");
      case "wN":
        return require("../assets/chess_pieces/wN.svg");
      case "wB":
        return require("../assets/chess_pieces/wB.svg");
      case "wP":
        return require("../assets/chess_pieces/wP.svg");
      default:
        return null;
    }
  }

  let inverter = false;
  return (
    <View style={styles.board}>
      {board.map((row, i) => {
        inverter = !inverter;
        return (
          <View style={styles.row}>
            {row.map((pieceName, j) => {
              let color;
              let pieceImage = getPieceImage(pieceName);
              if (inverter) {
                color = j % 2 == 0 ? "white" : "seagreen";
              } else {
                color = j % 2 == 0 ? "seagreen" : "white";
              }
              return (
                <Pressable
                  key={`${i}-${j}`}
                  style={[styles.square, { backgroundColor: color }]}
                  onPress={() => {
                    setText(i + "" + j);
                  }}
                >
                  <Image
                    source={pieceImage}
                    style={{ height: "75%", width: "75%" }}
                  />
                </Pressable>
              );
            })}
          </View>
        );
      })}
      <Text style={{ color: "#fff" }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    padding: 10,
    backgroundColor: "purple",
  },
  row: {
    flexDirection: "row",
  },
  square: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
  },
});

export default chessBoard;
