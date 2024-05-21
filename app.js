const classType = [
    "Mage", "Warrior", "Sword master", "Necromancer", "Dragon-Kind", "Monster", "Healer"
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



const player = {
    name: "",
    magicPoints: 500,
    healthPoints: 500,
    attackStr: {
        light: 25,
        heavy: 50
    },
    class: {
        mainClass: "",
        subClass: ""
    },
    rank: rank[0],
    uid: ""



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