import React, { useState, useEffect } from 'react';

function ButtonOptions({ button }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleOptionClick = () => {
        setDropdownOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (!event.target.closest('#dropdownDividerButton') && !event.target.closest('#dropdownDivider')) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    return (
        <div style={{ position: 'relative' }} className='dropdown-pad'>
            <img src={button} alt="" srcset="" id="dropdownDividerButton"
                onClick={handleDropdownClick}
                className="text-white    px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 "
                type="button" />
            <div
                id="dropdownDivider"
                className={`z-100 ${dropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-full left-0 w-full`}
                style={{ minWidth: 200 }}
            >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                    <li>
                        <a href="#" onClick={handleOptionClick} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" onClick={handleOptionClick} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" onClick={handleOptionClick} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                </ul>
                <div className="py-2">
                    <a href="#" onClick={handleOptionClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                </div>
            </div>
        </div>
    )
}

export default ButtonOptions