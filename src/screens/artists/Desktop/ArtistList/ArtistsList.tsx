'use client';
import React from 'react';
import { TextColors } from 'src/utils/Colors';
import styles from './ArtistsList.module.css';
import TitleSmall from 'src/screens/components/texts/TitleSmall';
import InfiniteScroll from 'react-infinite-scroller';
import { useAppSelector } from 'src/redux/hooks';
import { useRouter } from 'next/navigation';
import { ArtistModel } from 'src/proxy/queries/artists/artistModel';
import { selectArtist } from 'src/redux/features/artistsSlice';
import { useDispatch } from 'react-redux';

const ArtistList = () => {
    const [selectedArtist, setSelectedArtist] = React.useState<null | ArtistModel>(null);

    const artists = useAppSelector(state => state.artistsReducer.data);
    const router = useRouter();
    const dispatch = useDispatch();

    if (!artists) {
        router.push('/');
        return null;
    }

    const artistData = artists.map(artist => ({
        id: artist.id,
        name: artist.name
    }));
    artistData.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    const [items, setItems] = React.useState(artistData);

    const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);

    const loadMore = () => {
        if (scrollContainerRef.current) {
            if (scrollContainerRef.current.scrollTop < 10) {
                setItems(prevItems => ([...artistData, ...prevItems]));
                scrollContainerRef.current.scrollTop = (artistData[0] as any).offsetHeight * artists.length;
            } else {
                setItems(prevItems => ([...prevItems, ...artistData]));
            }
        }
    };

    const handleArtistClick = (artist: ArtistModel) => {
        setSelectedArtist(artist);
        dispatch(selectArtist(artist));
    };

    return (
        <div className={`relative h-screen ${styles.artistListContainer} text-center`} style={{ flexBasis: "28.125%" }}>
            <div ref={scrollContainerRef} className={`overflow-y-scroll h-full ${styles.scrollContainer}`}>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={loadMore}
                    hasMore={true}
                    loader={<div key={0}></div>}
                    useWindow={false}
                    threshold={10}
                >
                    <div className="flex items-center justify-center h-full">
                        <ul className="space-y-2 p-4 text-left">
                            {items.map((item) => (
                                <li key={item.id} onClick={() => handleArtistClick(item)}>
                                    <TitleSmall
                                        text={item.name}
                                        color={TextColors.white}
                                        className={item === selectedArtist ? `hover:opacity-100` : `opacity-40 hover:opacity-100`}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </InfiniteScroll>
            </div>

            <div className={`${styles.mask} ${styles.maskTop}`}></div>
            <div className={`${styles.mask} ${styles.maskBottom}`}></div>
        </div>
    );
}

export default ArtistList;
