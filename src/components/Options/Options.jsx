import React, { useState } from 'react';

const Options = ({ option , correctAnswer   }) => {
 

    return (
    
        <div className='flex py-2' >

           <p className='px-4 text-gray-500 font-semibold '> {option}</p>
            {/* <button className='border px-2 font-semibold rounded' 
            >
                Submit
            </button > */}
           
        </div>
    );
};

export default Options;