import React, { createContext, useState } from 'react';
import Gandpa from './Gandpa';
import './family.css';

 export const moneyContext=createContext(0);
const FamilyTree = () => {
    const asset='Diamond';
    const [money,setMoney]=useState(0);
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
             <h3>Family Asset:Diamond</h3>
             <h1>Family Balance :{money}</h1>
           <moneyContext.Provider value={[money,setMoney]}>
             <Gandpa asset={asset}></Gandpa>
           </moneyContext.Provider>
        </div>
    );
};

export default FamilyTree;