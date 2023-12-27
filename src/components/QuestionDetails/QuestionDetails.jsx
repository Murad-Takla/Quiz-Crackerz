import React, { useState } from 'react';
import Options from '../Options/Options';
let ind = 0 ;
const QuestionDetails = ({ qs }) => {
    const { correctAnswer, id, options, question } = qs

    return (
        <div className='mb-8'>


            <div className="w-[600px]
            
            p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <div className='border p-4 rounded shadow mb-6'>
             <h2 className='font-semibold text-xl'>
                Q. {question}
             </h2>
             </div>
                
                <p className="  text-gray-500 text-xl font-semibold">
                Please choose one of the following answers:
                </p>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div>
                    {options.map(option => <Options
                    key={ind++} 
                    option={option}
                    correctAnswer={correctAnswer}
                   ></Options>)}
                </div>
               
            </div>

        </div>
    );
};

export default QuestionDetails;