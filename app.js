const classType = [
    "Mage", "Warrior", "Demon", "Necromancer", "Draconian", "Assassin", "Demon"
];

const mobType = ["Slime", "Goblin", "Ogre", "Dragon"]

const rank = [
    "F", "E", "D", "C", "B", "A", "S", "SS"
];

const classSelect = document.getElementById("classType");
const statsDiv = document.getElementById("stats");

// Populate dropdown options
for (const classItem of classType) {
    const option = document.createElement("option");
    option.value = classItem;
    option.text = classItem;
    classSelect.appendChild(option);
}

// Event listener for class selection
classSelect.addEventListener("change", function (event) {
    const selectedClass = event.target.value;
    updateStats(selectedClass);
});

// Function to update stats based on selected class
function updateStats(selectedClass) {
    const selectedClassObject = getClassObject(selectedClass);
    if (selectedClassObject) {
        statsDiv.style.display = "block"; // Show stats div
        document.getElementById("magicPoints").textContent = `Magic Points: ${selectedClassObject.magicPoints}`;
        document.getElementById("healthPoints").textContent = `Health Points: ${selectedClassObject.healthPoints}`;
        document.getElementById("attackStr").textContent = `Attack Strength: ${selectedClassObject.attackStr}`;
        document.getElementById("accuracy").textContent = `Accuracy: ${selectedClassObject.accuracy}`;
        document.getElementById("agility").textContent = `Agility: ${selectedClassObject.agility}`;
    } else {
        statsDiv.style.display = "none"; // Hide stats div if class not found
    }
}

// Function to get class object based on class name
function getClassObject(className) {
    switch (className) {
        case "Mage":
            return mage;
        case "Warrior":
            return warrior;
        case "Necromancer":
            return necromancer;
        case "Draconian":
            return draconian;
        case "Assassin":
            return assassin;
        case "Demon":
            return demon;
        default:
            return null;
    }
}

// Initially hide stats div
statsDiv.style.display = "none";

// Object definitions
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