import React, { useState } from 'react';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const onPress = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '20px' }}>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button><br />
      <button onClick={decrement}>Decrement</button><br /><br />

      <button onClick={() => sayWelcome("Welcome")}>Say welcome</button><br /><br />

      <button onClick={onPress}>Click on me</button><br /><br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
