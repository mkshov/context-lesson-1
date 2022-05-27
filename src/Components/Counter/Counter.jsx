import React, { useContext } from 'react';
import { counterContext } from '../../counterContext';

const Counter = () => {
    const {increment, counter, decrement} = useContext(counterContext)
    console.log(increment);
    console.log(counter);
    return (
        <div>
            <button onClick={() => decrement()} on>-</button>
            <h1>Counter: {counter} </h1>
            <button onClick={() => increment()}>+</button>
        </div>
    );
};

export default Counter;