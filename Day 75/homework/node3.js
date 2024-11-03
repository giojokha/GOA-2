// Date

function displayCurrentDate() {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();
    return `${month}/${day}/${year}`;
}
console.log(displayCurrentDate());

function displayCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}
console.log(displayCurrentTime());

function getDayOfWeek(number) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[number - 1] || "Invalid day number";
}
console.log(getDayOfWeek(3));

function daysBetweenDates(date1, date2) {
    const timeDiff = Math.abs(new Date(date2) - new Date(date1));
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
console.log(daysBetweenDates("2024-01-01", "2024-01-15")); 


function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
console.log(formatDate(new Date())); 

function compareDates(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    if (d1 < d2) {
        return `${date1} is earlier than ${date2}`;
    } else if (d1 > d2) {
        return `${date1} is later than ${date2}`;
    } else {
        return `${date1} is the same as ${date2}`;
    }
}
console.log(compareDates("2024-01-01", "2024-01-15")); 

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(2, 2024));

function timeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - new Date(date)) / 1000);
    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count > 0) {
            return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
        }
    }
    return 'just now';
}
console.log(timeAgo("2023-09-01")); 

function daysUntilNextBirthday(birthdate) {
    const now = new Date();
    const birthdayThisYear = new Date(now.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (birthdayThisYear < now) {
        birthdayThisYear.setFullYear(now.getFullYear() + 1);
    }
    return Math.ceil((birthdayThisYear - now) / (1000 * 60 * 60 * 24));
}
console.log(daysUntilNextBirthday(new Date("1990-10-15"))); 

function calculateAge(birthdate) {
    const now = new Date();
    let age = now.getFullYear() - birthdate.getFullYear();
    const monthDiff = now.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}
console.log(calculateAge(new Date("1990-10-15")));
}
