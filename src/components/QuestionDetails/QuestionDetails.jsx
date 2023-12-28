import React, { useState } from 'react';
import Options from '../Options/Options';

import {  EyeIcon } from '@heroicons/react/24/solid'
let ind = 0;
const QuestionDetails = ({ qs }) => {
    const { correctAnswer, id, options, question } = qs
    const [open, setOpen] = useState(false)
    //console.log(open)
    return (
        <div className='mb-8'>


            <div className="md:w-[600px]
          
            p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className='  p-4 rounded shadow mb-6 flex justify-between ' >
                    <h2 className='font-semibold text-xl'>
                        Q. {question}
                    </h2>

                    <div>
                        <EyeIcon
                         data-tooltip-target="tooltip-top" 
                            onClick={() => setOpen(!open)}
                            className='h-[50px] w-[30px]  flex items-center cursor-pointer'></EyeIcon>

                    </div>
                    
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
                <div className='text-center text-slate-400 font-bold underline'>
                    {
                        open == true && <h2> Answer : {correctAnswer}</h2>
                    }
                </div>


            </div>


        </div>
    );
};

export default QuestionDetails;