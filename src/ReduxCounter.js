import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from './redux/actions';

const ReduxCounter = () => {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
    }}>
      <h2>Abdulin Baiel</h2>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '20px',
        margin: '20px 0'
      }}>
        <button 
          onClick={handleDecrement}
          style={{
            backgroundColor: '#ff4757',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            fontSize: '18px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.2s'
          }}
        >
          -
        </button>
        
        <span style={{ 
          fontSize: '24px', 
          fontWeight: 'bold',
          minWidth: '60px',
          display: 'inline-block',
          color: '#007bff'
        }}>
          {count}
        </span>
        
        <button 
          onClick={handleIncrement}
          style={{
            backgroundColor: '#2ed573',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            fontSize: '18px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.2s'
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ReduxCounter;
