import React from 'react';
import Gandpa from './Gandpa';
import './family.css';

const FamilyTree = () => {
    const asset='Diamond';
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
             <h3>Family Asset:Diamond</h3>
            <Gandpa asset={asset}></Gandpa>
        </div>
    );
};

export default FamilyTree;