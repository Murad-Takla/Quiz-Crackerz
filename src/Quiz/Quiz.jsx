 import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizType from '../components/QuizType/QuizType';
 
 const Quiz = () => {

    const quizs = useLoaderData().data
 

    return (
        <div className='grid grid-cols-2'>
            {
                quizs.map(quiz => <QuizType
                key={quiz.id}
                quiz={quiz}
                ></QuizType>)
            }
        </div>
    );
 };
 
 export default Quiz;