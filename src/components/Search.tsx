/*
    This component will be used to search for directions
    It will contain two fields for the user to input the starting and ending locations
    It will also contain a button that will submit the form
    The handleClick function will be used to handle the form submission
    It will query google maps with the starting and ending locations using fetch
    This will be styled using tailwindcss
    This will have a white background and a shadow
*/

import React, { useState } from 'react';
import fetch from 'node-fetch';

const Search = () => {
    const [startingLocation, setStartingLocation] = useState('');
    const [endingLocation, setEndingLocation] = useState('');
    const handleClick = async () => {
        console.log(process.env)
        const results = await fetch(`/api/googlemaps
        ?destination=${endingLocation}
        &origin=${startingLocation}
        &key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`);
       console.log(results) 
    };

    return (
        <div className="w-6/12 m-auto mt-32 justify-center items-center h-16 bg-white text-black relative shadow-sm font-mono">
            <input onChange={e => setStartingLocation(e.target.value)} type="text" className="w-full mb-4" placeholder="Starting Location" value={startingLocation} />
            <input onChange={e => setEndingLocation(e.target.value)} type="text" className="w-full mb-4" placeholder="Ending Location" value={endingLocation} />
            <button onClick={() => handleClick()} className="bg-cyan px-3 py-2">Search</button>
        </div>
    )
};

export default Search;