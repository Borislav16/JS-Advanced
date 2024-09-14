function ticketGenerator(ticketsInput, sorting) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    ticketsInput.map((e) => {
        let [destination, price, status] = e.split("|");
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    });
    let sorted = tickets.sort((a, b) => {
        if (typeof a[sorting] === 'number') {
            return a[sorting] - b[sorting];
        } else {
            return a[sorting].localeCompare(b[sorting]);
        }
    });
    return sorted;
}