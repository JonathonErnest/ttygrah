const classType = [
    "Mage", "Warrior", "Demon", "Necromancer", "Draconian", "Monster", "Assassin", "Demon"
];

const rank = [
    "F", "E", "D", "C", "B", "A", "S", "SS"
];

const classSelect = document.getElementById("classType");

for (const classItem of classType) {
    const option = document.createElement("option");
    option.value = classItem;
    option.text = classItem;
    classSelect.appendChild(option);
}



const mage = {
    name: "",
    magicPoints: 200,
    healthPoints: 100,
    attackStr: 50,
    accuracy: 100,
    agility: 50,
    class: classType[0],
    rank: rank[0],
}


const warrior = {
    name: "",
    magicPoints: 100,
    healthPoints: 100,
    attackStr: 100,
    accuracy: 100,
    agility: 100,
    class: classType[1],
    rank: rank[0],
}


const necromancer = {
    name: "",
    magicPoints: 225,
    healthPoints: 75,
    attackStr: 50,
    accuracy: 100,
    agility: 50,
    class: classType[3],
    rank: rank[0],
}


const draconian = {
    name: "",
    magicPoints: 150,
    healthPoints: 225,
    attackStr: 50,
    accuracy: 50,
    agility: 25,
    class: classType[4],
    rank: rank[0],
}


const assassin = {
    name: "",
    magicPoints: 50,
    healthPoints: 75,
    attackStr: 150,
    accuracy: 100,
    agility: 125,
    class: classType[6],
    rank: rank[0],
}


const demon = {
    name: "",
    magicPoints: 175,
    healthPoints: 100,
    attackStr: 75,
    accuracy: 100,
    agility: 50,
    class: classType[2],
    rank: rank[0],
}

const slime = {
    name: "slime",
    magicPoints: 0,
    healthPoints: 50,
    attackStr: 5,
    class: classType[5],
    rank: rank[0],
    uid: 1

}

const goblin = {
    name: "goblin",
    magicPoints: 50,
    healthPoints: 150,
    attackStr: 25,
    class: classType[5],
    rank: rank[0],
    uid: 2

}

const ogre = {
    name: "ogre",
    magicPoints: 250,
    healthPoints: 350,
    attackStr: 75,
    class: classType[5],
    rank: rank[3],
    uid: 3

}

const dragon = {
    name: "Dragon",
    magicPoints: 1500,
    healthPoints: 2500,
    attackStr: 500,
    class: classType[5],
    rank: rank[6],
    uid: 4

}