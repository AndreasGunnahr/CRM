class CalendarDate {
    constructor(element) {
        this.element = element;
    }
}

class Calendar {
    constructor() {
        this.container = document.createElement('calendar-container');
        this.date = {};
        this.getDate();
        this.months =
            ["January", "February", "March",
                "April", "May", "June",
                "July", "August", "September",
                "October", "November", "December"];
        this.weekdays =
            ["Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday", "Sunday"];
        this.month = document.createElement('current-month');
        this.dates = [];
    }

    posValid(day) {
        return day >= 1 && day <= this.daysInMonth();
    }

    getDate() {
        let date = new Date();
        this.date = {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate(),
            functions: date
        }

        return this.date;
    }

    createHTML() {
        this.month.innerText = this.months[this.date.month];
        this.container.appendChild(this.month);

        this.weekdays.forEach((day) => {
            let element = document.createElement('week-day');
            element.innerText = day.slice(0, 3);
            this.container.appendChild(element);
        })

        for (let i = 0; i < 7 * 5; i++) {
            let cell = document.createElement('date-cell');
            this.container.appendChild(cell);
            this.dates.push(cell);
        }

        this.renderMonth();
    }

    append(node) {
        node.appendChild(this.container);
    }

    renderMonth() {
        this.month.innerText = this.months[this.date.month];

        this.dates.forEach((date, i) => {
            date.classList.remove('current');
            let day = i + 2 - this.weekdayOfFirstOfMonth();
            if (this.posValid(day)) {
                date.innerText = day;
                if (this.isCurrentDate(day)) {
                    date.classList.add('current');
                }
            }
        })
    }

    daysInMonth() {
        return new Date(this.date.year, this.date.month + 1, 0).getDate();
    }

    weekdayOfFirstOfMonth() {
        let date = new Date(this.date.year, this.date.month, 1);
        return date.getDay();
    }

    isCurrentDate(day) {
        let date = new Date();
        return day == this.date.day && this.date.month == date.getMonth();
    }

    isCurrentMonth(month){
        return new Date().getMonth() == month;
    }

    createEvent(day) {
        if (this.posValid(day)) {
            this.dates[day].classList.add('event');
            this.dates[day].addEventListener('click', () => {
                console.log('clicked event');
            })
        }
    }

}

let calendar = new Calendar();
calendar.createHTML();
calendar.append(document.querySelector('body'));
calendar.createEvent(2);