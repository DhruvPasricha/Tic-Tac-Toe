var A = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

let player = "X";
let filled = 0;
let finished = false;

function check() {
  // rows
  for (let r = 0, c = 0; r < 3; r++) {
    if (A[r][c] == A[r][c + 1] && A[r][c + 1] == A[r][c + 2]) {
      return true;
    }
  }
  // columns
  for (let c = 0, r = 0; c < 3; c++) {
    if (A[r][c] == A[r + 1][c] && A[r + 1][c] == A[r + 2][c]) {
      return true;
    }
  }
  // d1
  if (A[0][0] == A[1][1] && A[1][1] == A[2][2]) {
    return true;
  }
  // d2
  if (A[0][2] == A[1][1] && A[1][1] == A[2][0]) {
    return true;
  }
  // else
  return false;
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    document.getElementById("b" + i + j).addEventListener("click", function () {
      if (finished == false) {
        if (A[i][j] != "O" && A[i][j] != "X") {
          this.querySelector("p").innerHTML = player;

          A[i][j] = player;

          filled++;
          if (filled >= 5) {
            finished = check();
            if (finished) {
              document.querySelector("h1").innerHTML =
                "PLAYER " + player + " WINS ";
              document.querySelector("h1").className = player;
            } else if (filled == 9) {
              document.querySelector("h1").innerHTML = "ITS A DRAW";
              document.querySelector("h1").className = "";
              finished = true;
            }
          }
          if (player == "X") {
            this.classList.add("X");
            player = "O";

          } else {
            this.classList.add("O");
            player = "X";

          }
          if (finished == false) {
            document.querySelector("h1").innerHTML =
              "PLAYER " + player + " 's TURN ";
            document.querySelector("h1").className =
              player;
          }
        }
      }
    });
  }
}
