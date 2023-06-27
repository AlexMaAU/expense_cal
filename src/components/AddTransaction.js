import { useContext } from 'react';
import { useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault(text, amount);
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction);
    // console.log(newTransaction)
    setText('');
    setAmount(0);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Text</label>
          <input
            type='text'
            value={text}
            placeholder='Enter text...'
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Text</label>
          <input
            type='text'
            value={amount}
            placeholder='Enter amount...'
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </div>
  );
};
