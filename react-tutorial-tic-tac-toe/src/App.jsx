import {useState} from 'react'

function Square({value, onSquareClick}) {

  return (
    // buttonを押すと、このSquareコンポーネントのonClickが発火する。
    // onClick関数をBoardコンポーネントからonSquareClickプロパティとして受け取っている。
    // アロー関数でhandleClickを呼び出す。
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  ) 
}

function Board({ xIsNext, squares, onPlay}) {

  // handleClick関数は引数を使って、squares配列を更新する。
  function handleClick(i) {
    // 左から評価される。squares[i]がfalsyだったら、cal...関数を実行する。truthyだったら、early return。
    // すでに値がある場合と勝敗が決まった後はクリックが無視される。
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    // sliceは引数に応じて、配列のコピーを生成する。引数を指定しないと配列の全ての要素がコピーされる。
    const nextSquares = squares.slice()
    if (xIsNext) {
    // constで定義したけど、要素の書き換えは問題ない。
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "○"
    }
    onPlay(nextSquares)
   
    // // 配列のコピーを安全に変更した上で、配列の実体を最新のものに書き換える。
    // setSquares(nextSquares)
    // // handleClickが実行されるたびに○,Xを変更していく
    // setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "○");
  }

  return (
  <>
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
  </>
  )
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
      description = 'Go to move #' + move
    } else {
      description = 'Go to game start'
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })
  
  return (
    <div className="game">
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

// 勝利条件を一通りループで調べていく方法
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // 左から評価される。squares[a]がnullでなければ右に進む。a,bが等しければ右に、a,cが等しければ勝利なのでXor○をreturnする。
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}