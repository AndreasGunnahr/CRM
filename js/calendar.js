class CalendarUtils {
    posValid(date) {
        return date.getDay() >= 1 && 
                date.getDay() <= this.daysInMonth(date);
    }

    daysInMonth(date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }

    weekdayOfFirstOfMonth(date) {
        date = new Date(date.getFullYear(), date.getMonth(), 1);
        return date.getDay();
    }

    isCurrentDate(day) {
        return day == this.currentDate.getDate() && this.date.getMonth() == this.currentDate.getMonth();
    }

    isCurrentMonth(month) {
        return new Date().getMonth() == month;
    }
}

class EventItem {
    constructor(parent, content) {
        this.parent = parent;
        this.content = content;
        this.html = {};
        this.created = false;
    }

    createHTML() {
        if(!this.created) {
            this.html = {
                root: document.createElement('event-item'),
                text: document.createElement('event-text'),
                customer: document.createElement('event-customer')
            }

            this.html.text.innerText = this.content.text;
            this.html.root.appendChild(this.html.text);

            if(this.content.ckecked == 1){
                this.html.text.classList.add('strikethrough')
                this.html.customer.classList.add('strikethrough')
            }

            this.html.customer.innerText = this.content.customer;
            this.html.root.appendChild(this.html.customer);
            
            this.parent.appendChild(this.html.root);
            
            this.created = true;
        }
    }
}

class EventList {
    constructor(parent, date) {
        this.date = date;
        this.parent = parent;
        this.html = {};
        this.items = [];
        this.createHTML();
        this.populateItems();
        this.checkCurrent = new CustomEvent('checkCurrent', {
            detail: this.parent.querySelector('p').innerText
        });

        this.parent.addEventListener('click', () => {
            this.parent.parentNode.dispatchEvent(this.checkCurrent);  
        })
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
    }

    updateMargin() {
        let offset = this.parent.offsetTop;
        let height = getComputedStyle(this.parent).height;
        height = Math.round(height.replace('px', ''));
        this.html.root.style.top = offset + height + 'px';
        this.html.root.style.left = this.parent.parentNode.offsetLeft + 'px';
        this.html.root.style.width = getComputedStyle(this.parent.parentNode).width;
    }

    toggle() {   
        this.updateMargin();    
        this.html.root.classList.toggle('hidden');
    }

    hide() {
        this.updateMargin();
        this.html.root.classList.add('hidden');        
    }

    checkToggle(date) {
        if(this.parent.querySelector('p').innerText == date) {
            this.toggle();
        } else {
            this.hide();
        }
    }
}

class Calendar extends CalendarUtils {
    constructor(pathToCSS) {
        super();
        this.linkCSS(pathToCSS);
        this.container = document.querySelector('calendar-module');
        this.container.addEventListener('checkCurrent', (e) => {
            this.events.forEach((event) => {
                event.checkToggle(e.detail);
            })
        })

        this.date = new Date();
        this.currentDate = new Date();
        this.months =
            ["January", "February", "March",
                "April", "May", "June",
                "July", "August", "September",
                "October", "November", "December"];
        this.weekdays =
            ["Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday", "Sunday"];
        this.month = document.createElement('current-month');
        this.nav = [
            document.createElement('nav-right'),
            document.createElement('nav-current'),
            document.createElement('nav-left')
        ]
        this.dates = [];
        this.createHTML();
        this.events = [];
        this.todoItems = [];

        window.addEventListener('resize', () => {
            if(this.events.length > 0) {
                this.events.forEach((event) => {
                    event.updateMargin();
                })
            }
        })
    }

    linkCSS(pathToCSS) {
        if(!pathToCSS) {
            console.log('path to CSS not set');
        }
        let head = document.querySelector('head');
        let link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', pathToCSS + 'calendar.css');
        head.appendChild(link);
    }

    createHTML() {
        this.nav.forEach(element => {
            this.container.appendChild(element);
        })

        this.nav[0].addEventListener('click', () => {
            this.decrMonth();
        })

        this.nav[1].addEventListener('click', () => {
            this.setToCurrentMonth();
        })

        this.nav[2].addEventListener('click', () => {
            this.incrMonth();
        })

        this.month.innerText = this.months[this.date.getMonth()];
        this.container.appendChild(this.month);

        this.weekdays.forEach((day) => {
            let element = document.createElement('week-day');
            element.innerText = day.slice(0, 3);
            this.container.appendChild(element);
        })

        this.renderMonth();
    }

    append(node) {
        node.appendChild(this.container);
    }

    renderMonth() {
        if(document.querySelector('date-cell')) {
            this.dates = [];
            while(document.querySelector('date-cell')) {
                this.container.removeChild(document.querySelector('date-cell'));
            }
        }

        for (let i = 0; i < 7 * 5; i++) {
            let cell = document.createElement('date-cell');
            cell.appendChild(document.createElement('p'));
            cell.appendChild(document.createElement('daily-events'));
            this.container.appendChild(cell);
            this.dates.push(cell);
        }

        this.month.innerText = this.months[this.date.getMonth()] + ` ${this.date.getFullYear()}`;

        this.dates.forEach((date, i) => {
            date.querySelector('p').innerText = '';
            date.querySelector('p').classList.remove('current');

            let offset = this.weekdayOfFirstOfMonth(this.date);
            
            if(offset == 0) {
                offset = 7;
            }

            if (i + 1 >= offset && i - offset + 2 <= this.daysInMonth(this.date)) {
                date.querySelector('p').innerText = i - offset + 2;
                if (this.isCurrentDate(i)) {
                    date.querySelector('p').classList.add('current');
                }
            }
        })
    }

    renderEvents() {
        let eventList;
        this.clearEvents();
        this.todoItems.forEach((event) => {
            if(event.date != '' && event.date) {
                let eventDate = new Date(event.date);

                if(eventDate.getFullYear() == this.date.getFullYear() && eventDate.getMonth() == this.date.getMonth()) {
                    let dateCells = document.querySelectorAll('date-cell');
                    
                    dateCells.forEach((date) => {
                        let dateText = date.querySelector('p').innerHTML;
    
                        if(dateText == eventDate.getDate()) {
                            date.querySelector('daily-events').appendChild(document.createElement('event-dot'));
                                                  
                            if(!date.querySelector('event-root')) {
                                eventList = new EventList(date, eventDate);
                                this.events.push(eventList);
                                eventList.items.push(new EventItem(eventList.html.root, event))                             
                            } else {
                                eventList = this.events.find(event => {
                                    return event.date.getDay() == eventDate.getDay();
                                })
                                eventList.items.push(new EventItem(eventList.html.root, event))
                            }
                        }          
                    }) 
                }
    
                if(eventList) {
                    eventList.populateItems(); 
                }
            }
        })
    }

    clearEvents() {
        this.dates.forEach((date) => {
            while(date.querySelector('event-root')) {
                date.removeChild(date.querySelector('event-root'))
            }

            date.querySelector('daily-events').innerHTML = '';
        })

        this.events = [];
    }

    incrMonth() {
        this.date.setMonth(this.date.getMonth() + 1);
        this.renderMonth();
        this.renderEvents();
    }

    decrMonth() {
        this.date.setMonth(this.date.getMonth() - 1);
        this.renderMonth();
        this.renderEvents();
    }

    setToCurrentMonth(){
        this.date = this.currentDate;
        this.renderMonth();
        this.renderEvents();
    }
}

let calendar;

document.addEventListener('DOMContentLoaded', () => {
    calendar = new Calendar('css/');
    document.addEventListener('todoDone', (e) => {
        console.log(e);    
        calendar.todoItems = e.detail.items;   
        calendar.renderEvents();
    })
})



