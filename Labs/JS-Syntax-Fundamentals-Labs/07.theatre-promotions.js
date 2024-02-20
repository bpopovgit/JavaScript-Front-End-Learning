function solve(day, age) {
    let ticketPrice;
    if (!((0 <= age && age <= 18) || (18 < age && age <= 64) || (64 < age && age <= 122))) {
        console.log("Error!");
    } else if ((day === 'Weekday') && (0 <= age && age <= 18)) {
        ticketPrice = 12;
    } else if ((day === 'Weekend') && (0 <= age && age <= 18)) {
        ticketPrice = 15;
    } else if ((day === 'Holiday') && (0 <= age && age <= 18)) { 
        ticketPrice = 5;
    } else if ((day == 'Weekday') && (18 < age && age <= 64)) {
        ticketPrice = 18;
    } else if ((day == 'Weekend') && (18 < age && age <= 64)) {
        ticketPrice = 20;
    } else if ((day == 'Holiday') && (18 < age && age <= 64)) {
        ticketPrice = 12;
    } else if ((day == 'Weekday') && (64 < age && age <= 122)) {
        ticketPrice = 12;
    } else if ((day == 'Weekend') && (64 < age && age <= 122)) {
        ticketPrice = 15;
    } else if ((day == 'Holiday') && (64 < age && age <= 122)) {
        ticketPrice = 10;
    } 

    if (ticketPrice) {
        console.log(`${ticketPrice}$`);
    }

}

solve('Holiday', -12)