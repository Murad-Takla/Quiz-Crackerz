import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between items-center '>

            <div >
                <img className='w-[130px] h-[100px]' src="https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-813.jpg" alt="" />
            </div>

            <div className='flex gap-10 font-bold text-xl p-5'>
                <Link to='/'>Quiz</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </nav>
    );
};

export default Header;