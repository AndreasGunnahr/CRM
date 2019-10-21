class Mockup{
    constructor() {
        this.url = 'https://5da7897d23fa740014697829.mockapi.io/';
    }

    async get(table, id, callback) {
        let url = this.url + table;

        if(id) {
            url += `/${id}`;
        }

        let response = await fetch(url).then(res =>{
            return res.json();
        }).then(data => {
            return data;
        });

        if(callback) {
            callback(response);
        }
        
        return response;
    }

    async getRandom(table, number) {
        let items = await this.get(table);
        let filtered = [];
        let randomNumbers = [];
        
        while(filtered.length < number) {
            let num = Math.floor(Math.random() * items.length);
            if(!randomNumbers.includes(num)) {
                randomNumbers.push(num);
                filtered.push(items[num]);
            }
        }

        return filtered;
    }

    async deleteID(table, id) {
        fetch(`${this.url}${table}/${id}`, {
            method: 'delete'
        }).then(res => {
            console.log(`deleted id ${id} from table ${table}`)
            console.log(res);
        })   
    }

    async put() {
                
    }
}

let mockup = new Mockup();

function log(data) {
    data.forEach((person) => {
        console.log(person.firstName);
        console.log(person.lastName);
    })
}
async function get() {
    let random = await mockup.get('Order', 10);
    console.log(random);
}

get();