/*
    A navbar component that will be used in the App component
    This component will be used to navigate between the different pages of the app
    It will contain the websites name on the left hand side of the page and a component that will either be a login button or a profile icon
    This will be styled using tailwindcss
*/

import React from 'react';

const NavBar = () => {
    return (
        <div className="flex justify-between items-center h-16 bg-cyan text-black relative shadow-sm font-mono w-full">
            <a href="/" className="pl-8">WeatherNav</a>
            <div className="pr-8">
                <a href="/login" className="p-1">Login</a>
            </div>
        </div>
    )
};

export default NavBar;