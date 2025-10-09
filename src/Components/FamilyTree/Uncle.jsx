import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin name='Jannat'></Cousin>
                <Cousin name='Habib'></Cousin>
                <Cousin name='Sumaiya'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;