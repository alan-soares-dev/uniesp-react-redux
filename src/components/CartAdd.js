import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cart/actions';


const CartAdd = () => {

    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const dispatch = useDispatch();

    const handleAddItem = () => {
        const item = {
            id: Math.random(),
            name,
            quantity: 1,
        };
        dispatch(addItem(item));
        setName('');
    };


    return (
        <li>
            <input type="text" value={name} onChange={handleChange}/>
            <button onClick={handleAddItem}>Adicionar</button>
        </li>
    );
};


export default CartAdd;
