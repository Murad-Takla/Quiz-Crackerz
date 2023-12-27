import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionDetails from '../QuestionDetails/QuestionDetails';

const Question = () => {
    

    const questionDetails = useLoaderData().data.questions;
    //console.log(questionDetails)
    return (
        <div className='flex flex-col items-center'>
            {
                   questionDetails.map(qs => <QuestionDetails
                   key={qs.id}
                   qs={qs}
                   
                   ></QuestionDetails>)  
            }
        </div>
    );
};

export default Question;