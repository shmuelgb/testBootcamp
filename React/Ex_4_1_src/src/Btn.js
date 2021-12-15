import React from 'react';

function Btn(prop){
    return(
        <div>
            <button className='btn'>{prop.text}</button>
        </div>
    );
}

export default Btn;