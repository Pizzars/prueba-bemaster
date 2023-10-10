import React from 'react';
import Image from 'next/image';
import TitleMedium from 'src/screens/components/texts/TitleMedium';
import TitleSmall from 'src/screens/components/texts/TitleSmall';
import TextIcon, { TextIcons, SizeIcons } from 'src/screens/components/icons/TextIcon';
import { TextColors } from 'src/utils/Colors';
import TextParagraph from 'src/screens/components/texts/TextParagraph';
import Divider from 'src/screens/components/general/Divider';
import profilePic from './artist.jpg'

const ArtistInfoMobile = () => {
    return (
        <div className="relative py-8">
            <div className="relative h-[325px] w-full">
                <Image
                    src={profilePic}
                    alt="Placeholder"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div
                    style={{
                        backgroundColor: '#00E482',
                        opacity: 0.4,
                        mixBlendMode: 'multiply'
                    }}
                    className="absolute inset-0"
                ></div>
            </div>

            <div className="flex justify-between items-center bg-[#222222] text-white px-7 py-5">
                <TitleSmall text={`Book Artist`} color={TextColors.white} className='uppercase' />
                <TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TITLE_SMALL} color={TextColors.white} />
            </div>

            <div className='flex flex-col mt-3'>
                <div className='flex flex-col mt-5'>
                    <TitleMedium text={`31·07·23`} className='uppercase' />
                    <TitleSmall text={`Social club mallorca`} className='uppercase mt-1' />
                    <TextParagraph text={`Palma, España`} className='uppercase mt-1 opacity-40' />
                </div>

                <div className='flex flex-col mt-5'>
                    <TitleMedium text={`31·07·23`} className='uppercase' />
                    <TitleSmall text={`Social club mallorca`} className='uppercase mt-1' />
                    <TextParagraph text={`Palma, España`} className='uppercase mt-1 opacity-40' />
                </div>

                <div className='flex flex-col mt-5'>
                    <TitleMedium text={`31·07·23`} className='uppercase' />
                    <TitleSmall text={`Social club mallorca`} className='uppercase mt-1' />
                    <TextParagraph text={`Palma, España`} className='uppercase mt-1 opacity-40' />
                </div>
            </div>

            <Divider className='my-5' />

            <div className='flex flex-wrap'>
                <div className='w-1/2 flex mb-3'>
                    <TitleSmall text={`PRESS KIT`} className='uppercase' />
                    <TextIcon icon={TextIcons.DIAGONAL_ARROW} size={SizeIcons.TITLE_MEDIUM} color={TextColors.blue} className='self-center' />
                </div>
                <div className='w-1/2 flex mb-3'>
                    <TitleSmall text={`ARTWORK REQ.`} className='uppercase' />
                    <TextIcon icon={TextIcons.DIAGONAL_ARROW} size={SizeIcons.TITLE_MEDIUM} color={TextColors.blue} className='self-center' />
                </div>
                <div className='w-1/2 flex mb-3'>
                    <TitleSmall text={`Facebook`} className='uppercase' />
                    <TextIcon icon={TextIcons.DIAGONAL_ARROW} size={SizeIcons.TITLE_MEDIUM} color={TextColors.blue} className='self-center' />
                </div>
                <div className='w-1/2 flex mb-3'>
                    <TitleSmall text={`Twitter`} className='uppercase' />
                    <TextIcon icon={TextIcons.DIAGONAL_ARROW} size={SizeIcons.TITLE_MEDIUM} color={TextColors.blue} className='self-center' />
                </div>
                <div className='w-1/2 flex mb-3'>
                    <TitleSmall text={`Instagram`} className='uppercase' />
                    <TextIcon icon={TextIcons.DIAGONAL_ARROW} size={SizeIcons.TITLE_MEDIUM} color={TextColors.blue} className='self-center' />
                </div>
                <div className='w-1/2 flex mb-3'>
                    <TitleSmall text={`Soundcloud`} className='uppercase' />
                    <TextIcon icon={TextIcons.DIAGONAL_ARROW} size={SizeIcons.TITLE_MEDIUM} color={TextColors.blue} className='self-center' />
                </div>
                <div className='w-1/2 flex mb-3'>
                    <TitleSmall text={`Spotify`} className='uppercase' />
                    <TextIcon icon={TextIcons.DIAGONAL_ARROW} size={SizeIcons.TITLE_MEDIUM} color={TextColors.blue} className='self-center' />
                </div>
                <div className='w-1/2 flex mb-3'>
                    <TitleSmall text={`Beatport`} className='uppercase' />
                    <TextIcon icon={TextIcons.DIAGONAL_ARROW} size={SizeIcons.TITLE_MEDIUM} color={TextColors.blue} className='self-center' />
                </div>
            </div>


            <div className='flex flex-col'>
                <TextParagraph text={`Mejor DJ de House de Brasil.`} className='mt-1 opacity-40' />
                <div className='flex items-center mt-0.5'>
                    <TitleSmall text={`MORE`} className='uppercase' />
                    <TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TITLE_MEDIUM} color={TextColors.black} className='self-center opacity-40 ml-0.5' />
                </div>
            </div>

            <Divider className='my-5' />



        </div>
    );
};

export default ArtistInfoMobile;
