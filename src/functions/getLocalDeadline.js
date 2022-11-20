import dayjs from "dayjs";

export default function getLocalDeadline(time, timezone) {
    if (!timezone) {
        return dayjs(time);
    }
    const originalDeadline = dayjs.tz(time, timezone);
    const currentTimezoneDeadline = dayjs(originalDeadline);
    // return currentTimezoneDeadline;
    return originalDeadline;
}

export function convertToLocalTimezone(time, timezone) {
    if (!timezone) {
        return dayjs(time);
    }
    const originalDeadline = dayjs.tz(time, timezone);
    const currentTimezoneDeadline = originalDeadline.tz(dayjs.tz.guess());
    return currentTimezoneDeadline;
}