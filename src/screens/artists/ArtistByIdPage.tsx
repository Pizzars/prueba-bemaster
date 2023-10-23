import React from 'react';
import ArtistByIdMobile from './Mobile/ArtistByIdMobile';
import ArtistByIdDesktop from './Desktop/ArtistByIdDesktop';

const ArtistByIdPage = () => {
    return (
        <div className="w-full">
            <div className="sm:block md:hidden">
                <ArtistByIdMobile />
            </div>
            <div className="hidden md:block">
                <ArtistByIdDesktop />
            </div>
        </div>
    );
};

export default ArtistByIdPage;
