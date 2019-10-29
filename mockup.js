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

    async put(table, id, data) {
        fetch(`${this.url}${table}/${id}`, {
            method: 'put',
            body: data
        }).then(res => {
            console.log(`updated id ${id} from table ${table}`)
            console.log(res);
        })                   
    }

    async post(table, data) {
        console.log(data);
        fetch(`${this.url}${table}`, {
            method: 'post',
            body: data
        }).then(res => {
            console.log(`posted to table ${table}`)
            console.log(res);
        })             
    }
}

let mockup = new Mockup();

async function get() {
    let random = await mockup.getRandom('Order', 10);
    console.log(random);
}
