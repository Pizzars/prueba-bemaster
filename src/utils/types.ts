export interface MenuItemForHome {
    key: string;
    to: string;
    name: {
        EN: string;
        ES: string;
    };
}

export interface SocialMediaItems {
    name: string;
    url: string;
    key: string;
}

export interface FormattedEvent {
    date: string;
    venue: string;
    location: string;
    id: number;
}

export interface FormattedGig extends FormattedEvent {
    artist: string;
}

export interface WeekOption {
    title: string;
    option: {
        start: string;
        end: string;
    };
}
