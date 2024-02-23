function solve(group, groupType, day) {
    
    let pricePerPerson;
    let totalPrice = 0;
    let studentDiscount;
    let businessDiscount;
    let regularDiscount;

    if (groupType === 'Students') {
        if (day === 'Friday') {
            pricePerPerson = 8.45;
        } else if (day === 'Saturday') {
            pricePerPerson = 9.80;
        } else if (day === 'Sunday') {
            pricePerPerson = 10.46;
        }
    } else if (groupType === 'Business') {
        if (day === 'Friday') {
            pricePerPerson = 10.90;
        } else if (day === 'Saturday') {
            pricePerPerson = 15.60;
        } else if (day === 'Sunday') {
            pricePerPerson = 16;
        }
    } else if (groupType === 'Regular') {
        if (day === 'Friday') {
            pricePerPerson = 15;
        } else if (day === 'Saturday') {
            pricePerPerson = 20;
        } else if (day === 'Sunday') {
            pricePerPerson = 22.50;
        }
    } 

    totalPrice += group * pricePerPerson;

    if ((groupType === 'Students') && (group >= 30)) {
        studentDiscount = totalPrice * 0.15;
        totalPrice -= studentDiscount;
    } else if ((groupType === 'Business') && (group >= 100)) {
        businessDiscount = 10 * pricePerPerson
        totalPrice -= businessDiscount
    } else if ((groupType === 'Regular') && (group >= 10) && (group <= 20)) {
        regularDiscount = totalPrice * 0.05;
        totalPrice -= regularDiscount;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)


}

solve(30,
    "Students",
    "Sunday"
    )