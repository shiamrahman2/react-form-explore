import React, { use } from 'react';
import { moneyContext } from './FamilyTree';
import { useContext } from 'react';

const Special = ({asset}) => {
     const [money, setMoney] = useContext(moneyContext);

    const handleAddMoney = () =>{
        setMoney(money + 5000);
    }
    return (
        <div>
            <h2>Special:{asset}</h2>
            <button onClick={handleAddMoney}>Add Balance 5k to Family Balance</button>
        </div>
    );
};

export default Special;