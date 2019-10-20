class Mockup{
    async getTable(name, callback) {
        let url = `https://5da7897d23fa740014697829.mockapi.io/${name}`;
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

    getID(table, id) {
        for(let i = 0; i < table.length; i++) {
            if(table[i].id == id) {
                return table[i];
            }
        }
    }

    async getRandom(table, number) {
        let items = await this.getTable(table);
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
}

let mockup = new Mockup();

function log(data) {
    data.forEach((person) => {
        console.log(person.firstName);
        console.log(person.lastName);
    })
}
async function get() {
    let table = await mockup.getTable('customer');
    mockup.getID(table, 2);
    let random = await mockup.getRandom('Order', 10);
    console.log(random);
}

get();