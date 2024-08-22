import React, { useRef, useState } from 'react'
import circle from '../components/images/circle.png'
import cross from '../components/images/cross.png'
import './TicTacToe.css'
function TicTacToe() {
  let [count,setCount] = useState(0);
  let [lock,setLock] = useState(false);
  let titleRef = useRef(null);
  let boxRef1 = useRef();
  let boxRef2 = useRef();
  let boxRef3 = useRef();
  let boxRef4 = useRef();
  let boxRef5 = useRef();
  let boxRef6 = useRef();
  let boxRef7 = useRef();
  let boxRef8 = useRef();
  let boxRef9 = useRef();

  const [data, setData] = useState(Array(9).fill(null));
  let add = (e,index) => {
    if (lock || data[index]) {
      return;
    }
    const newData = data.slice();
      if(count%2==0){
        e.target.innerHTML = `<img src = '${circle}'>`;
        newData[index] = "O"
        setCount(count+1)
        setData(newData)
      }
      else{
        e.target.innerHTML = `<img src = ${cross}>`
        newData[index] = "X"
        setCount(count+1)
        setData(newData);
      }
      // console.log("inside add")
      checkWinner(newData);
  }
  let checkWinner = (newData) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(const combination of winningCombinations){
      const [a,b,c] = combination;
      if(newData[a] && newData[a]=== newData[b] && newData[a]===newData[c]){
        won(newData[a]);
        // console.log("inside checkwinner")
      }
    }
  }

  let won = (winner) => {
    // console.log("winner")
    setLock(true);
    if(winner==="O"){
      titleRef.current.innerHTML = `Congratulations!!! O <span>Wins</span>`
    }
    else{
      titleRef.current.innerHTML = `Congratulations!!! X <span>Wins</span>`
    }
  }

  let reset = () => {
    // console.log("inside reset")
    setData(Array(9).fill(null));
    setCount(0);
    setLock(false);
    if(titleRef.current){
      titleRef.current.innerHTML =`TicTacToe Game in <span>React</span>`
    }
    boxRef1.current.innerHTML = ""
    boxRef2.current.innerHTML = ""
    boxRef3.current.innerHTML = ""
    boxRef4.current.innerHTML = ""
    boxRef5.current.innerHTML = ""
    boxRef6.current.innerHTML = ""
    boxRef7.current.innerHTML = ""
    boxRef8.current.innerHTML = ""
    boxRef9.current.innerHTML = ""
  }

  return (
    <div className='container'>
      <h1 className='title' ref={titleRef}>TicTacToe Game in <span>React</span></h1>
      <div className='board'>
        <div className='row1'>
          <div className='boxes' onClick={(e)=>add(e,0)} ref={boxRef1}></div>
          <div className='boxes' onClick={(e)=>add(e,1)} ref={boxRef2}></div>
          <div className='boxes' onClick={(e)=>add(e,2)} ref={boxRef3}></div>
        </div>
        <div className='row2'>
          <div className='boxes' onClick={(e)=>add(e,3)} ref={boxRef4}></div>
          <div className='boxes' onClick={(e)=>add(e,4)} ref={boxRef5}></div>
          <div className='boxes' onClick={(e)=>add(e,5)} ref={boxRef6}></div>
        </div>
        <div className='row3'>
          <div className='boxes' onClick={(e)=>add(e,6)} ref={boxRef7}></div>
          <div className='boxes' onClick={(e)=>add(e,7)} ref={boxRef8}></div>
          <div className='boxes' onClick={(e)=>add(e,8)} ref={boxRef9}></div>
        </div>
      </div>
      <button className='reset' onClick={reset}>Reset</button>
    </div>
  )
}

export default TicTacToe