import React,  useState  from 'react';

const Main = () => 
  const [counter, setCounter] = useState(0);

  const handleCounter = (num) => 
    setCounter(prevCounter => prevCounter + num);
  

  return (
    <div>
      <button onClick=() => handleCounter(1)>+</button>
      <button onClick=() => handleCounter(-1)>-</button>
      <MainNum counter=counter />
    </div>
  );


export default Main;