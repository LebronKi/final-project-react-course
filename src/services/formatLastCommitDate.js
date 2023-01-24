import {parseISO} from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {enGB} from 'date-fns/locale';

export function formatLastCommitDate(date) {
    if (date) {
        return formatDistanceToNow(parseISO(date), { locale: enGB });
    }
}