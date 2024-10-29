// const events = [
//     {
//         title: "Wedding",
//         date: new Date("2024-09-28T11:29:10.642Z"),
//         location: "Moi Avenue",
//         attendees: new Set(["Alice", "Joy"]),
//     },
//     {
//         title: "Authorisation",
//         date: new Date("2024-09-28T11:29:10.642Z"),
//         location: "Archives",
//         attendees: new Set(["students"]),
//     },
//     {
//         title: "Graduation",
//         date: new Date("2024-09-28T11:29:10.642Z"),
//         location: "Afya Center",
//         attendees: new Set(["all leaders", "chair ladies"]),
//     },
//     {
//         title: "Chrismas",
//         date: new Date("2024-09-28T11:29:10.642Z"),
//         location: "Tomboya",
//         attendees: new Set(["parents", "guardians", "elders"]),
//     },
// ];
const events = [
    {
      title: "Workshop",
      date: new Date(new Date().setDate(new Date().getDate() + 3)), // 3 days from now
      location: "Conference Room A",
      attendees: new Set(["John", "Jane"]),
    },
    {
      title: "Team Meeting",
      date: new Date(new Date().setDate(new Date().getDate() +1)), // 1 day from now
      location: "Office 101",
      attendees: new Set(["Paul", "Rita"]),
    },
    {
      title: "Annual Gathering",
      date: new Date(new Date().setDate(new Date().getDate() + 10)), // 10 days from now
      location: "Auditorium",
      attendees: new Set(["Lisa", "Tom"]),
    },
        {
        title: "Wedding",
        date: new Date("2024-09-28T11:29:10.642Z"),
        location: "Moi Avenue",
        attendees: new Set(["Alice", "Joy"]),
    },
    {
        title: "Authorisation",
        date: new Date("2024-09-28T11:29:10.642Z"),
        location: "Archives",
        attendees: new Set(["students"]),
    },
    {
        title: "Graduation",
        date: new Date("2024-09-28T11:29:10.642Z"),
        location: "Afya Center",
        attendees: new Set(["all leaders", "chair ladies"]),
    }
   
];
  

const eventOrganizers = new WeakMap();
eventOrganizers.set(events[0], "Michael");
eventOrganizers.set(events[1], "Sandra");
eventOrganizers.set(events[2], "Robert");

displayEvents();

function displayEvents(){
    const tableBody = document.querySelector('#tbody');
    tableBody.innerHTML = '';

    events.forEach(event => {
        const row = document.createElement('tr');

        for (const key in event) {
            const cell = document.createElement('td');

            if (key === 'attendees') {
                cell.textContent = Array.from(event[key]).join(', ');
            } else {
                cell.textContent = event[key];
            }

            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    });
}


const isEventInNext7Days = (event) => {
    const now = new Date();
    const nextWeek = new Date(now);
    nextWeek.setDate(now.getDate() + 7);
    return event.date >= now && event.date <= nextWeek;
  };

   const upcomingEvents = events.filter(isEventInNext7Days);
   displayEvents();
//    populateEvents(upcomingEvents);

function populateEvents() {
    const eventsTableBody = document.querySelector(" tbody");
    eventsTableBody.innerHTML = ""; // Clear previous table rows
    events.forEach(({ title, date, location, attendees }) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${title}</td>
      <td>${date.toLocaleDateString("en-US")}</td>
      <td>${location}</td>
      <td>${Array.from(attendees).join(", ")}</td>
    `;
      eventsTableBody.appendChild(row);
    });
    console.log(events);
  }
  window.onload = populateEvents; // Call the function when the page loads
   

function addNewAttendee(eventTitle, attendeeName) {
    const event = events.find((event) => event.title === eventTitle);
    if (event) {
      event.attendees.add(attendeeName);
      
      alert(`Added ${attendeeName} to ${eventTitle}`);
      populateEvents(); // Refresh the display
      displayEvents();
    }
    else{
        alert("event not found")
    }
  }


function convertToJSON() {
    return JSON.stringify(events.map(event => ({
        ...event,
        formattedDate: event.date.toLocaleDateString()
    })));
}
  // Display first event's properties using Object methods
  const firstEvent = events[0];
  console.log("Keys:", Object.keys(firstEvent));
  console.log("Values:", Object.values(firstEvent));
  console.log("Entries:", Object.entries(firstEvent));
  
  // Log each event's title and date using forEach
  events.forEach((event) => {
    console.log(`Event: ${event.title}, Date: ${event.date.toLocaleDateString()}`);
  });
  

function deleteEvent(eventTitle) {
    if (!eventTitle) {
        alert("Please provide an event title to delete.");
        return;
    }
    const eventIndex = events.findIndex(e => e.title === eventTitle);
    if (eventIndex !== -1) {
        events.splice(eventIndex, 1);
        populateEvents();
        displayEvents();
    }
}
  
document.getElementById('deleteEventButton').addEventListener('click', () => {
    const eventTitle = document.getElementById('deleteEventTitle').value;
    deleteEvent(eventTitle);
});

document.getElementById('addAttendeeButton').addEventListener('click', () => {
    const eventTitle = document.getElementById('eventTitle').value;
    const attendeeName = document.getElementById('attendeeName').value;
    addNewAttendee(eventTitle, attendeeName);
});

populateEvents()
  // Bonus: Find the event with the most attendees
  const eventWithMostAttendees = events.reduce((maxEvent, currentEvent) =>
    currentEvent.attendees.size > maxEvent.attendees.size ? currentEvent : maxEvent
  );
  console.log("Event with the most attendees:", eventWithMostAttendees.title);
