import moment from 'moment';

export function formatDate(date, includeYear = false) {
    const mask = includeYear ? 'DD/MM/YYYY' : 'DD/MM';
    return moment(date).utc().format(mask);
}

export function formatDateTime(dateTime, includeYear = false) {
    const mask = includeYear ? 'DD/MM/YYYY HH:mm' : 'DD/MM HH:mm';
    return moment(dateTime).utc().format(mask);
}

export function formatTime(dateTime) {
    const mask = 'HH:mm';
    return moment(dateTime).utc().format(mask);
}
