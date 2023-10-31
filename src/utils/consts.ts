import { MenuItemForHome, SocialMediaItems } from './types'

export const ulrBack = 'http://localhost:1337'

export const menuItemsForHome: MenuItemForHome[] = [
  {
    key: 'gigs',
    to: '/gigs',
    name: { EN: 'GIGS', ES: 'EVENTOS' }
  },
  {
    key: 'podcasts',
    to: '/podcasts',
    name: { EN: 'PODCASTS', ES: 'PODCASTS' }
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
  }
]

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
]

export const footerButtonsInfo: MenuItemForHome[] = [
  {
    key: '1',
    name: {
      EN: 'LEGAL NOTICE',
      ES: 'AVISO LEGAL'
    },
    to: '/terms'
  },
  {
    key: '2',
    name: {
      EN: 'PRIVACY POLICY',
      ES: 'POLÍTICA DE PRIVACIDAD'
    },
    to: '/privacy-policy'
  }
]

export const itemsForNavbar: MenuItemForHome[] = [
  {
    key: 'artists',
    to: '/artists',
    name: { EN: 'ARTISTS', ES: 'ARTISTAS' }
  },
  {
    key: 'gigs',
    to: '/gigs',
    name: { EN: 'GIGS', ES: 'EVENTOS' }
  },
  {
    key: 'podcasts',
    to: '/podcasts',
    name: { EN: 'PODCASTS', ES: 'PODCASTS' }
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
  }
]
