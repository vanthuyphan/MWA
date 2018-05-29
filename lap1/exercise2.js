const dayType = {WEEKEND: "weekend", WEEKDAY: "weekday"}
const dayMap = {
    0: dayType.WEEKEND,
    1: dayType.WEEKDAY,
    2: dayType.WEEKDAY,
    3: dayType.WEEKDAY,
    4: dayType.WEEKDAY,
    5: dayType.WEEKDAY,
    6: dayType.WEEKEND
}
const isWeekend = () => {
    const today = new Date();
    const day = today.getDay();
    return dayMap[day];
}

const test1 = isWeekend();
console.log(test1);