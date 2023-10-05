import { MenuItemForHome, SocialMediaItems } from "./types";

export const menuItemsForHome: MenuItemForHome[] = [
    {
        key: 'gigs',
        to: '/gigs',
        name: { EN: 'GIGS', ES: 'EVENTOS' }
    },
    {
        key: 'podcast',
        to: '/podcast',
        name: { EN: 'PODCAST', ES: 'PODCAST' }
    },
    {
        key: 'about',
        to: '/about',
        name: { EN: 'ABOUT', ES: 'NOSOTROS' }
    },
    {
        key: 'book',
        to: '/book',
        name: { EN: 'BOOK', ES: 'RESERVAR' }
    },
];

export const socialMediaLinks: SocialMediaItems[] = [
    {
        name: 'FACEBOOK',
        url: 'https://www.facebook.com',
        key: 'facebook'
    },
    {
        name: 'SOUNDCLOUD',
        url: 'https://www.soundcloud.com',
        key: 'soundcloud'
    },
    {
        name: 'INSTAGRAM',
        url: 'https://www.instagram.com',
        key: 'instagram'
    }
];

export const footerButtonsInfo: MenuItemForHome[] = [
    {
        key: '1',
        name: {
            EN: 'LEGAL NOTICE',
            ES: 'AVISO LEGAL'
        },
        to: '/legal-notice'
    },
    {
        key: '2',
        name: {
            EN: 'PRIVACY POLICY',
            ES: 'POLÍTICA DE PRIVACIDAD'
        },
        to: '/privacy-policy'
    }
];