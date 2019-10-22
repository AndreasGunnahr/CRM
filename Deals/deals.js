class Deals {
    constructor() {

    }


async getDeals() {
    let deals = await mockup.getRandom('Order', 5);
    let companies = await mockup.getRandom('customer', 5);
    companies = companies.map((customer) => {
        return customer.companyName;
    })

    console.log(companies);

    items.forEach((item, i) => {
        let todoItem = new TodoItem(item.data, item.date, companies[i]);
        todoItem.createHTML();
    })


}
}