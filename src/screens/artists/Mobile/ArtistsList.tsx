'use client'
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import TextIcon, { TextIcons } from '../../components/icons/TextIcon';
import TitleMedium from '../../components/texts/TitleMedium';
import ArtistDetailsMobile from './ArtistDetails/ArtistDetailsMobile';
import { ArtistModel } from 'src/proxy/queries/artists/artistModel';
import { useAppSelector } from 'src/redux/hooks';
import { useDispatch } from 'react-redux';
import { selectArtist } from 'src/redux/features/artistsSlice';
import { useRouter } from 'next/navigation';

interface Props {
    customClassname?: string;
}

const ArtistsList: React.FC<Props> = ({ customClassname }) => {
    const artists = useAppSelector(state => state.artistsReducer.data);
    const [selectedArtist, setSelectedArtist] = useState<null | ArtistModel>(null);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [nextArtist, setNextArtist] = useState<string | null>(null);
    const router = useRouter();

    console.log(artists, 'artists')

    if (!artists) {
        router.push('/');
        return null;
    }

    const artistData = [...artists];


    const sortedArtists = [...artistData].sort((a, b) => (a.name || '').localeCompare(b.name || ''));

    const props = useSpring({
        minHeight: open ? 400 : 0,
        opacity: open ? 1 : 0,
        onRest: () => {
            if (!open) {
                setSelectedArtist(nextArtist);
                setNextArtist(null);
            }
        },
        reset: true,
    });

    useEffect(() => {
        if (selectedArtist !== null) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [selectedArtist]);

    const handleArtistClick = (artist: ArtistModel) => {
        if (selectedArtist?.id === artist.id) {
            setOpen(!open);
        } else if (open) {
            setOpen(false);
            setSelectedArtist(artist);
        } else {
            setSelectedArtist(artist);
        }

        dispatch(selectArtist(artist));
    };

    if (!artists) {
        return null;
    }

    return (
        <div className={`flex flex-col ${customClassname} w-full pl-8 pr-6 space-y-5`} style={{
            paddingTop: 200,
        }}>
            {sortedArtists?.map(artist => (
                <div key={artist.id} className="flex flex-col">
                    <div
                        onClick={() => handleArtistClick(artist)}
                        className="flex flex-row justify-between items-center"
                    >
                        <TitleMedium text={artist.name} />
                        <TextIcon icon={TextIcons.DOWN_TRIANGLE} />
                    </div>

                    {(selectedArtist?.id === artist.id) && (
                        <animated.div style={props} className="overflow-hidden">
                            <ArtistDetailsMobile />
                        </animated.div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ArtistsList;
