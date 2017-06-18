import moment from 'moment';

export function formatDate(date, includeYear = false) {
    const mask = includeYear ? 'DD/MM/YYYY' : 'DD/MM';
    return moment(date).format(mask);
}

export function formatDateTime(dateTime, includeYear = false) {
    const mask = includeYear ? 'DD/MM/YYYY HH:mm' : 'DD/MM HH:mm';
    return moment(dateTime).format(mask);
}
