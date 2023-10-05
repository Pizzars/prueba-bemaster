import React, { FC } from 'react';
import { TextColors } from 'src/utils/Colors';
import { menuItemsForHome } from 'src/utils/consts';
import TextIcon, { TextIcons, SizeIcons } from '../components/icons/TextIcon';
import TitleSection from '../components/texts/TitleSection';

interface MenuSectionProps {
    language: 'EN' | 'ES';
    toggleLanguage: React.Dispatch<React.SetStateAction<"EN" | "ES">>;
}

const MenuSection: FC<MenuSectionProps> = ({ language, toggleLanguage }) => {

    const handleLanguageToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        toggleLanguage(prev => prev === 'EN' ? 'ES' : 'EN');
    };

    return (
        <div style={{ background: '#D2FF37' }} className="flex w-full items-center pl-4">
            <div className='my-8 flex w-full flex-col items-start space-y-8'>
                {menuItemsForHome.map(item => (
                    <div key={item.key} className='flex'>
                        <TitleSection text={item.name[language]} color={TextColors.black} />
                        <TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TITLE} color={TextColors.black} />
                    </div>
                ))}
                <button onClick={handleLanguageToggle} className='self-end mr-8' style={{ marginTop: '6rem' }}>
                    <TitleSection text={language} color={TextColors.black} />
                </button>
            </div>
        </div>
    );
};

export default MenuSection;
