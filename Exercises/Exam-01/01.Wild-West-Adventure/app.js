function solve(input) {
    const numberOfCharacters = Number(input.shift());
    const team = {};


    for (i = 0; i < numberOfCharacters; i++) {
        const [name, hitPoints, bullets] = input[i].split(' ');

        team[name] = {
            hitPoints: Number(hitPoints),
            bullets: Number(bullets),
        }
        
    }

    let commandLine = input.shift();
    while (commandLine != 'Ride Off Into Sunset') {
        const [command, name, firstArg, secondArg] = commandLine.split(' - ');
        const character = team[name];

        switch(command) {
            case 'FireShot':
                if (character.bullets > 0) {
                    character.bullets -= 1;
                    console.log(`${name} has successfully hit ${firstArg} and now has ${character.bullets} bullets!`)
                } else {
                    console.log(`${name} doesn't have enough bullets to shoot at ${firstArg}!`)
                }
                break;
            case 'TakeHit':
                let currentHp = character.hitPoints - firstArg
                character.hitPoints = currentHp;
                if (currentHp > 0) {                   
                    console.log(`${name} took a hit for ${firstArg} HP from ${secondArg} and now has ${currentHp} HP!`)
                } else {
                    delete team[name];
                    console.log(`${name} was gunned down by ${secondArg}!`)
                }
                break;
            case 'Reload':
                let bulletsLeft = character.bullets;
                if (bulletsLeft < 6) {
                    character.bullets += (6 - bulletsLeft);
                   console.log(`${name} reloaded ${6 - bulletsLeft} bullets!`) 
                } else {
                    console.log(`${name}'s pistol is fully loaded!`)
                }
                break;
            case 'PatchUp':
                if (character.hitPoints === 100) {
                    console.log(`${name} is in full health!`)
                } else {
                    character.hitPoints += Number(firstArg);
                    if (character.hitPoints > 100) {
                        character.hitPoints = 100;
                    }
                    console.log(`${name} patched up and recovered ${firstArg} HP!`)
                }
        }

        commandLine = input.shift();

    }

    for (const characterName in team) {
        console.log(`${characterName}\n HP: ${team[characterName].hitPoints}\n Bullets: ${team[characterName].bullets}`)
    }
}


solve((["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"])
)