import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Quiz from '../Quiz/Quiz';
import Question from '../components/Question.jsx/Question';

const Router = () => {

    const router =  createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    loader :  () => fetch('https://openapi.programming-hero.com/api/quiz'),
                    element: <Quiz></Quiz>
                },
                {
                    path: 'about',
                    element: <div>This is about Page</div>
                },
                {

              
                    path: 'quiz/:Id',
                    
                    loader:  async ({params})=> {
                     
                        
                        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`)
                    },
                         element: <Question ></Question>,
                }
            ]
        },
        
    ]) 
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;