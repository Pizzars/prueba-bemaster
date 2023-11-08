import { EventModel } from "src/proxy/queries/events/eventModel"
import { FormattedEvent } from "./types"

export const addZero = (value: number) => {
  if (value < 10) {
    return `0${value}`
  }
  return `${value}`
}

export const formatDate = (date: Date) => {
  return `${addZero(date.getDay())}-${addZero(date.getMonth() + 1)}-${date.getFullYear()}`
}

export function formatDescription(text: string | null | undefined) {
  if (!text) return '';

  return text
    .replace(/<\/p><p>&nbsp;<\/p><p>/g, '\n\n')
    .replace(/<p>|<\/p>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&ntilde;/g, 'ñ')
    .replace(/&aacute;/g, 'á')
    .replace(/&eacute;/g, 'é')
    .replace(/&iacute;/g, 'í')
    .replace(/&oacute;/g, 'ó')
    .replace(/&uacute;/g, 'ú')
    .replace(/<\/p><p>/g, '\n\n')
    .replace(/<\/p>|<p>/g, '')
    .replace(/&quot;/g, '"')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&lsquo;/g, '‘')
    .replace(/&rsquo;/g, '’')
    .replace(/&hellip;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&iexcl;/g, '¡')
    .replace(/&iquest;/g, '¿')
    .replace(/&ntilde;/g, 'ñ')
    .replace(/&aacute;/g, 'á')
    .replace(/&eacute;/g, 'é')
    .replace(/&iacute;/g, 'í')
    .replace(/&oacute;/g, 'ó')
    .replace(/&uacute;/g, 'ú')
    .replace(/&ccedil;/g, 'ç')
    .replace(/&euro;/g, '€')
}

export function truncateText(text: string | null | undefined, maxChars: number) {
  if (!text) return '';

  // Comprueba si el texto ya es lo suficientemente corto
  if (text.length <= maxChars) {
    return text;
  }

  // Encuentra el índice aproximado donde se podría cortar el texto
  let end = maxChars;

  // Intenta no cortar a la mitad una palabra
  // Busca el siguiente espacio después de los 20 caracteres
  while (end < text.length && text[end] !== ' ' && end < maxChars + 10) {
    end++;
  }

  // Si no encontramos un espacio, simplemente corta en maxChars
  if (end === text.length) {
    return text;
  }

  // Corta el texto y añade los puntos suspensivos
  return `${text.substring(0, end)}...`;
}

export const filterFutureEvents = (events: EventModel[] | null | undefined, limit: number): FormattedEvent[] | [] => {
  if (!events) return [];

  const today = new Date();

  const futureEvents = events.filter(event => event.date && new Date(event.date) > today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, limit);

  const formattedEvents = futureEvents.map((event, index): FormattedEvent | undefined => {
    if (!event.date) return undefined; // Skip mapping if event.date does not exist
    return {
      date: formatEventDate(new Date(event.date)),
      venue: event.place,
      location: `${event.city}, ${event.country}`,
      id: index
    };
  });

  return formattedEvents.filter(event => event) as FormattedEvent[]; // Filter out undefined values
};

const formatEventDate = (date: Date): string => {
  // Convertimos la fecha a un string en formato ISO
  const isoDate = date?.toISOString(); // '2022-06-17T03:00:00.000Z'

  // Extraemos la parte de la fecha del string ISO
  const [year, month, day] = isoDate.split('T')[0].split('-');

  // Devolvemos la fecha en el nuevo formato
  return `${day}·${month}·${year.slice(2)}`;
};
