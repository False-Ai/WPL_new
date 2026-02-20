alert("Welcome to Smart City Transport Portal");
document.write("<h3>Enjoy smart travel!</h3>");
console.log("Portal loaded successfully");

let now = new Date();
document.getElementById("dateTime").innerHTML =
"Current Date & Time: " + now;

function showRoutes() {
    document.getElementById("routes").innerHTML =
    "Route 101: Station → Market → Mall<br>Route 102: Airport → City Center → Bus Stand";
}

function calculateFare() {
    let stops = document.getElementById("stops").value;
    let fare = stops * 5;
    document.getElementById("fareResult").innerHTML = "Total Fare = ₹" + fare;
}

function checkAvailability() {
    let hour = new Date().getHours();

    if (hour >= 6 && hour <= 22) {
        document.getElementById("availability").innerHTML = "Bus Service Available";
    } else {
        document.getElementById("availability").innerHTML = "Bus Service Not Available";
    }
}

let stops = ["Station", "Market", "Mall", "Airport", "City Center"];

let stopList = "";
for (let i = 0; i < stops.length; i++) {
    stopList += "<li>" + stops[i] + "</li>";
}
document.getElementById("busStops").innerHTML = stopList;

function searchBusStop() {
    let input = document.getElementById("searchStop").value;
    let found = false;

    for (let i = 0; i < stops.length; i++) {
        if (stops[i].toLowerCase() === input.toLowerCase()) {
            found = true;
        }
    }

    if (found) {
        document.getElementById("searchResult").innerHTML = "Stop Found";
    } else {
        document.getElementById("searchResult").innerHTML = "Stop Not Found";
    }
}

function showRoute() {
    let route = document.getElementById("routeNumber").value;

    if (route == 101) {
        document.getElementById("routeDetails").innerHTML =
        "Station → Market → Mall";
    } else if (route == 102) {
        document.getElementById("routeDetails").innerHTML =
        "Airport → City Center → Bus Stand";
    } else {
        document.getElementById("routeDetails").innerHTML = "Route not found";
    }
}

function showDelay() {
    document.getElementById("delayMsg").innerHTML =
    "Bus is delayed by 10 minutes";
}

let schedule = [
    {bus: 101, time: "08:00 AM", destination: "Mall"},
    {bus: 102, time: "09:30 AM", destination: "Airport"},
    {bus: 103, time: "11:00 AM", destination: "City Center"}
];

let table = "<tr><th>Bus</th><th>Time</th><th>Destination</th></tr>";

for (let i = 0; i < schedule.length; i++) {
    table += "<tr>" +
        "<td>" + schedule[i].bus + "</td>" +
        "<td>" + schedule[i].time + "</td>" +
        "<td>" + schedule[i].destination + "</td>" +
        "</tr>";
}

document.getElementById("scheduleTable").innerHTML = table;