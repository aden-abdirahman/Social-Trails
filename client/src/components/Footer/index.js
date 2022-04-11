import React from 'react';
import { Icon } from '@iconify/react';
import '../../index.css'

export default function Footer () {
    return (
        <footer>
            {/* <h2>
                About Us
            </h2> */}
    <div className='column'>
        <h3 className='whiteFont center footerNames'>
            Jacob
        </h3>
        <div className='center'>

        <ul className='footerUl'>
            <li>
                <a className='contactLink' href="mailto: jsmartin01@gmail.com" target="_blank">
                <Icon icon="carbon:email" />
                </a>
            </li>
            <li>
                <a className='contactLink' href="https://github.com/SleepyJake18" target="_blank">
                <Icon icon="akar-icons:github-fill" />
                </a>
            </li>
            <li>
                <a className='contactLink' href="https://www.linkedin.com/in/jacob-martin-779905222/" target="_blank">
                <Icon icon="akar-icons:linkedin-box-fill" />
                </a>
            </li>
            <li>
                <a className='contactLink' href="https://stackoverflow.com/users/17466669/sleepyjake" target="_blank">
                <Icon icon="mdi:stack-overflow" />
                </a>
            </li>
        </ul>
        </div>
    </div>
    <div className='column'>
        <h3 className='whiteFont center footerNames'>
            Abdirahman
        </h3>
        
        <ul className='footerUl'>
            <li>
                <a className='contactLink' href="mailto: jsmartin01@gmail.com" target="_blank">
                <Icon icon="carbon:email" />
                </a>
            </li>
            <li>
                <a className='contactLink' href="https://github.com/SleepyJake18" target="_blank">
                <Icon icon="akar-icons:github-fill" />
                </a>
            </li>
            <li>
                <a className='contactLink' href="https://www.linkedin.com/in/jacob-martin-779905222/" target="_blank">
                <Icon icon="akar-icons:linkedin-box-fill" />
                </a>
            </li>
            <li>
                <a className='contactLink' href="https://stackoverflow.com/users/17466669/sleepyjake" target="_blank">
                <Icon icon="mdi:stack-overflow" />
                </a>
            </li>
        </ul>
    </div>
    <div className='column'>
        <h3 className='whiteFont center footerNames'>
            Cody
        </h3>
        
        <ul className='footerUl'>
            <li>
                <a className='contactLink' href="mailto: jsmartin01@gmail.com" target="_blank">
                <Icon icon="carbon:email" />
                </a>
            </li>
            <li>
                <a className='contactLink' href="https://github.com/SleepyJake18" target="_blank">
                <Icon icon="akar-icons:github-fill" />
                </a>
            </li>
            <li>
                <a className='contactLink' href="https://www.linkedin.com/in/jacob-martin-779905222/" target="_blank">
                <Icon icon="akar-icons:linkedin-box-fill" />
                </a>
            </li>
            <li>
                <a className='contactLink' href="https://stackoverflow.com/users/17466669/sleepyjake" target="_blank">
                <Icon icon="mdi:stack-overflow" />
                </a>
            </li>
        </ul>
    </div>
    </footer>
        );
}