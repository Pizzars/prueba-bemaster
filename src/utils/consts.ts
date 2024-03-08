import { MenuItemForHome, SocialMediaItems } from './types'

// export const ulrBack = 'http://localhost:1337'
// Produción
export const ulrBack = 'https://b4backend.promokore.com'
// Test local no SSL
// export const ulrBack = 'http://b4backendtest.promokore.com'

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
]

export const itemsForNavbar: MenuItemForHome[] = [
  {
    key: 'home',
    to: '/',
    name: { EN: 'HOME', ES: 'INICIO' }
  }
]

export const noEventsMessage = {
  EN: 'No upcoming events scheduled.',
  ES: 'No hay eventos programados próximamente.'
}

export const gigsFallbackMessages = {
  artist: {
    EN: 'Artist not available',
    ES: 'Artista no disponible'
  },
  venue: {
    EN: 'Venue not available',
    ES: 'Lugar no disponible'
  },
  location: {
    EN: 'Location not available',
    ES: 'Ubicación no disponible'
  }
}

export interface TextSection {
  ES: string
  EN: string
}

export enum KeyLanguage {
  ES = 'ES',
  EN = 'EN'
}
