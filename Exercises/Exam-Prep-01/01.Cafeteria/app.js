function solve(input) {
    const baristaCount = Number(input.shift());
    const team = {};

    // Prepare Baristas team
    for (let i = 0; i < baristaCount; i++) {
        const [name, shift, coffeeTypes] = input[i].split(' ');

        team[name] = {
            shift,
            coffeeTypes: coffeeTypes.split(','),
        }
    }
    // Execute commands
    let commandLine = input.shift();
    while (commandLine != 'Closed') {
        const [command, name, firstArg, secondArg] = commandLine.split(' / ');
        const barista = team[name];

        let shift, coffeeType;
        switch(command) {
            case 'Prepare':
                shift = firstArg;
                coffeeType = secondArg;

                if (barista.shift === shift && barista.coffeeTypes.includes(coffeeType)) {
                    console.log(`${name} has prepared a ${secondArg} for you!`)
                } else {
                    console.log(`${name} is not available to prepare a ${coffeeType}.`);
                }
                break;
            case 'Change Shift':
                shift = firstArg;
                barista.shift = shift;
                console.log(`${name} has updated his shift to: ${shift}`);
                break;
            case 'Learn':
                coffeeType = firstArg;
                if (barista.coffeeTypes.includes(coffeeType)) {
                    console.log(`${name} knows how to make ${coffeeType}.`)
                } else {
                    barista.coffeeTypes.push(coffeeType);
                    console.log(`${name} has learned a new coffee type: ${coffeeType}.`)
                }

                break;
        }

        commandLine = input.shift();
    }

    for (const baristaName in team) {
        console.log(`Barista: ${baristaName}, Shift: ${team[baristaName].shift}, Drinks: ${team[baristaName].coffeeTypes.join(', ')}`)
        
    }

}