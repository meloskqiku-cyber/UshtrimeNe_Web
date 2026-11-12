const events = [
  "Web Programming Workshop",
  "Career Day",
  "Programming Club meeting",
];

console.log(events[0]);
console.log(events[1]);
console.log(events[2]);

console.log("Length: " + events.length);

events[1] = "Tech Conference"; //me ndryshu elementin

events.push("Hackathon");
console.log("Shtimi: ", events);

events.pop();
console.log("Fshirja: " + events);

console.log("includes", events.includes("Tech Conference "));

const events2 = ["Workshop", "Career Day", "Hackathon", "Club Meeting"];

const selected = events2.slice(1, 3);

console.log("Selected: ", selected, events2);

events2.splice(1, 1);
console.log("Splice fshirja: ", events2);

events2.splice(1, 0, "Club Meeting");
console.log("Splice shtimi:", events2);

//loops

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let j = 0; j < events.length; i++) {
  console.log("Events: ", events[j]);
}

for (let event of events) {
  comsole.log("event:", event);
}

let y = 0;

while (y < 3) {
  console.log(y);

  y++;
}

const programmingEvent = {
  name: "Web Development Workshop",
  location: "Room 202",
  participants: 35,
  registration: true,
};

console.log("Emri:", programmingEvent.name); //Dot notation
console.log("Location", programmingEvent["location"]); // bracket notation

programmingEvent.date = "15 October";
console.log(programmingEvent);

const selectedEvents = [
  {
    name: "Web Development Workshop",
    location: "Room 202",
    participants: 35,
    registration: true,
  },
  {
    name: "Career",
    location: "Room 206",
    participants: 32,
    registration: false,
  },
  {
    name: "Web 2",
    location: "Room 201",
    participants: 34,
    registration: true,
  },
];
console.log("Elementi 2:", selectedEvents[1]["location"]);
console.log(
  "Elementi 2:",
  selectedEvents[selectedEvents.length - 1],
  participants,
);

for (const event of selectedEvents) {
  console.log(event.name);
  console.log(event.registration);
}

const eventNames = selectedEvents.map(function (event) {
  return event.name;
});

const eNames = selectedEvents.map((event) => event.name);
console.log(eventNames, eNames, selectedEvents);

const selectedParticipants = selectedEvents.filter(function (event) {
  return event.participants > 35;
});
console.log("Filter: ", selectedParticipants);

const sPartipcipants = selectedEvents.filter(
  (event) => event.participants > 35,
);

const foundEvent = selectedEvents.find(function (event) {
  return event.name === "Career Day";
});
