const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => (Math.floor(Math.random() * (dragon.strength - 15) + 15));


const warriorDamage = () => (Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength));

const mageDamage = () => {
    const currentStats = {
        damage: (Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence)),
        mana: mage.mana - 15,
    }
    if (mage.mana < 15) {
        currentStats.damage = 'No mana!';
        currentStats.mana = mage.mana;
    }
    return currentStats;
}

const warriorTurn = (callback) => {
    const warriorCurrentDmg = callback();
    dragon.healthPoints -= warriorCurrentDmg;
    warrior.damage = warriorCurrentDmg;
}

const mageTurn = (callback) => {
    const mageCurrentDmgAndMana = callback();
    dragon.healthPoints -= mageCurrentDmgAndMana.damage;
    mage.damage = mageCurrentDmgAndMana.damage;
    mage.mana = mageCurrentDmgAndMana.mana;
}

const dragonTurn = (callback) => {
    const dragonCurrentDmg = callback();
    warrior.healthPoints -= dragonCurrentDmg;
    mage.healthPoints -= dragonCurrentDmg;
    dragon.damage = dragonCurrentDmg;
}

const turnResult = () => console.log(battleMembers);

const gameActions = {
    // Crie as HOFs neste objeto.
    warriorTurn,
    mageTurn,
    dragonTurn,
    turnResult,
};

gameActions.turnResult();
gameActions.mageTurn(mageDamage);
gameActions.warriorTurn(warriorDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.turnResult();