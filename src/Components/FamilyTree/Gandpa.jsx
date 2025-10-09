import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Gandpa = ({asset}) => {
    return (
        <div >
            <h2>Gandpa</h2>
           <section className='flex'>
              <Dad asset={asset}></Dad>
            <Uncle></Uncle>
            <Aunt></Aunt>
           </section>
        </div>
    );
};

export default Gandpa;