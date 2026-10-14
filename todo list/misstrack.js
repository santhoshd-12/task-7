function addMission() {

    let input = document.getElementById("missionInput");

    let name = input.value.trim();

    if (name === "") {
        alert("Please enter a mission");
        return;
    }

    let mission = document.createElement("p");

    mission.textContent = name;

    mission.onclick = function () {
        mission.style.color = "green";

        if (mission.style.textDecoration === "line-through") {
            mission.style.textDecoration = "none";
            mission.style.color = "black";
        } else {
            mission.style.textDecoration = "line-through";
        }
    };

    let deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        mission.remove();
      
    };

    document.getElementById("missionList").appendChild(mission);

    document.getElementById("missionList").appendChild(deleteButton);

    input.value = "";

    updateCount();
}


function updateCount() {

    let list = document.getElementById("missionList");

    let total = 0;

    for (let i = 0; i < list.children.length; i++) {

        if (list.children[i].tagName === "P") {
            total++;
        }
    }

    document.getElementById("count").textContent = total;

    return total;
}


let colourNumber = 0;

function changeColour() {

    if (colourNumber === 0) {
        document.body.style.backgroundColor = "lightblue";
        colourNumber = 1;
    }
    else if (colourNumber === 1) {
        document.body.style.backgroundColor = "lightgreen";
        colourNumber = 2;
    }
    else {
        document.body.style.backgroundColor = "lightyellow";
        colourNumber = 0;
    }
}
