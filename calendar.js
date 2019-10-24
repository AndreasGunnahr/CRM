class EventItem {
    constructor(parent, content) {
        this.parent = parent;
        this.content = content;
        this.content = 'wowow test test';
        this.html = {}
    }

    createHTML() {
        this.html = {
            root: document.createElement('event-item')
        }
        
        this.parent.appendChild(this.html.root);
    }
}

class Event {
    constructor(date, parent) {
        this.parent = parent;
        this.date = new Date(date);
        this.parent.addEventListener('click', () => {
            this.toggle();        
        })
        this.html = {};
        this.items = [];
        this.createHTML();
        this.populateItems();
    }

    populateItems() {
        this.items.forEach((item) => {
            item.createHTML();
        })
    }

    createHTML() {
        this.html = {
            root: document.createElement('event-root')
        }

        this.html.root.classList.add('hidden');

        this.parent.appendChild(this.html.root);

        for(let i = 0; i < 5; i++) {
            let item = new EventItem(this.html.root, 'wowowow');
            this.items.push(item);
        }   
    }

    updateMargin() {
        console.log('resized');
        let offset = this.parent.offsetTop;
        let height = getComputedStyle(this.parent).height;
        height = Math.round(height.replace('px', ''));
        this.html.root.style.top = offset + height + 'px';
        this.html.root.style.left = this.parent.parentNode.offsetLeft + 'px';
        console.log(this.parent.parentNode.offsetLeft);

        console.log(this.html.root.style.top);
    }

    toggle() {   
        this.updateMargin();    
        this.html.root.classList.toggle('hidden');
    }
}

class Calendar {
    constructor(pathToCSS) {
        this.linkCSS(pathToCSS);
        this.container = document.querySelector('calendar-module');
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
        this.createHTML();
        this.events = [];
        window.addEventListener('resize', () => {
            if(this.events.length > 0) {
                this.events.forEach((event) => {
                    event.updateMargin();
                })
            }
        })
    }

    linkCSS(pathToCSS) {
        let head = document.querySelector('head');
        let link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', pathToCSS + 'calendar.css');
        head.appendChild(link);
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

    isCurrentMonth(month) {
        return new Date().getMonth() == month;
    }

    createEvent(day) {
        if (this.posValid(day)) {
            let event = new Event('2019-10-' + day, this.dates[day]);
            console.log(event);

            this.dates[day].classList.add('event');

            this.events.push(event);
        }
    }
}

let calendar;

document.addEventListener('DOMContentLoaded', () => {
    calendar = new Calendar('');
    calendar.createEvent(4);
    calendar.createEvent(25);
})



