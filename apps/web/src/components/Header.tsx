import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-700 text-white p-4">
            <div className="max-w-screen-xl mx-auto">
                <nav className="flex items-center justify-between">
                    <div className="text-xl font-semibold">Logo/Brand</div>
                    <ul className="flex space-x-4">
                        <li>
                            <a className="hover:underline" href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:underline" href="#about">
                                About
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
