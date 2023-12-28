import React from 'react';
import { Link } from 'react-router-dom';

const QuizType = ({ quiz }) => {
    const { id, logo, name, total } = quiz
    
    return (
        <div>
            <div className="py-10 ">
                <div
                    className=" group relative  overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl   hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-400 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md ">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                            <img src={logo} alt="" />
                        </span>
                        <div
                            className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                            <p className='font-bold text-xl'>
                                Total Question : {total}
                            </p>
                            <p>

                                <Link to={`/quiz/${id}`}>
                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span className="font-bold text-xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Start Quiz
                                        </span>
                                    </button>
                                </Link>
                            </p>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default QuizType;