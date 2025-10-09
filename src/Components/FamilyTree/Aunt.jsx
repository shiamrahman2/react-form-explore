import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'>
                <Cousin name='Najmul'></Cousin>
                <Cousin name='Saif'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;