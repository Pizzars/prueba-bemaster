import React from 'react';
import ArtistsMobile from './Mobile/ArtistsMobile';
import ArtistsDesktop from './Desktop/ArtistsDesktop';

const Artists = () => {
    return (
        <div className="w-full">
            <div className="sm:block md:hidden">
                <ArtistsMobile />
            </div>
            <div className=" hidden md:block">
                <ArtistsDesktop />
            </div>
        </div>
    );
};

export default Artists;
