const events = [
    {
        Title: "Wedding",
        Date: new Date("12/7/2025"),
        Location: "Moi Avenue",
        Attendees: new Set(["Alice", "Joy"]),
    },
    {
        Title: "Authorisation",
        Date: new Date("12/6/2025"),
        Location: "Archives",
        Attendees: new Set(["students"]),
    },
    {
        Title: "Graduation",
        Date: new Date("2/5/2025"),
        Location: "Afya Center",
        Attendees: new Set(["all leaders", "chair ladies"]),
    },
    {
        Title: "Chrismas",
        Date: new Date("3/7/2025"),
        Location: "Tomboya",
        Attendees: new Set(["parents", "guardians", "elders"]),
    },
];

function populateUpcoming() {
    const upcoming = document.querySelector("#upcoming tbody");
    upcoming.innerHTML = '';
    const now = new Date();
    const upcomingEvents = events.filter(event => {
        const diffTime = event.Date - now;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        return diffDays <= 7 && diffDays >= 0;
    });

      upcomingEvents.forEach(({ title, date, location, attendees }) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${title}</td>
          <td>${date.toLocaleDateString('en-US')}</td>
          <td>${location}</td>
          <td>${Array.from(attendees).join(', ')}</td>
        `;
        upcoming.appendChild(row);
      });
      console.log(upcoming)


    // const today = new Date();

    // const next7days = events.filter(event);
    // function event() {
    //     const timeDifference = events.date - today;
    //     const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    //     return daysDifference >= 0 && daysDifference <= 7;
    // }

//     const eventDetails = events.map((event) => {
//         return {
//             title: event.title,
//             date: event.date.toString(),
//             location: event.location,
//         };
//     });
// }
// console.log(eventDetails);
}
// function populateTable() {
//     const tableBody = document.querySelector("#eventsTable tbody");
//     tableBody.innerHTML = "";

//     events.forEach((event) => {
//         const { title, date, location, attendees } = event;
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${title}</td>
//             <td>${date.toLocaleDateString()}</td>
//             <td>${location}</td>
//             <td>${[...attendees].join(", ")}</td>
//             <td><button onclick="deleteEvent('${title}')">Delete</button></td>
//         `;
//         tableBody.appendChild(row);
//     });
// }

// // Format and display the data in table format
// console.log(`${title}\t${date.toString()}\t${location}`);
// function addAttendeeToEvent() {
//     const eventTitle = document.getElementById("eventTitle").value;
//     const attendeeName = document.getElementById("attendeeName").value;
// }

// function addAttendee(eventTitle, attendee) {
//     const event = events.find((e) => e.title === eventTitle);
//     if (event) {
//         event.Attendees.add(attendee);
//         console.log(`${attendee} added to ${eventTitle}`);
//     } else {
//         console.log("Event not found.");
//     }
// }

// addAttendee("Wedding", "George");

// function toJSONWithFormattedDate(events) {
//     return JSON.stringify(events, (key, value) => {
//         if (key === "date") {
//             return { formattedDate: new Date(value).toLocaleDateString("en-US") };
//         }
//         return value;
//     });
// }

// console.log(toJSONWithFormattedDate(events));

// const firstEvent = events[0];

// console.log(Object.keys(firstEvent)); // Properties
// console.log(Object.values(firstEvent)); // Values
// console.log(Object.entries(firstEvent)); // Key-Value pairs

// events.forEach((event) => {
//     console.log(
//         `Title: ${event.title}, Date: ${event.date.toLocaleDateString()}`
//     );
// });

// function deleteEvent(Wedding) {
//     const index = events.findIndex((event) => event.title === Wedding);
//     if (index !== -1) {
//         events.splice(index, 1);
//         alert(`Event Wedding has been deleted.`);
//     } else {
//         alert("Event not found.");
//     }
// }

// function findMostAttended() {
//     const eventWithMostAttendees = events.reduce((maxEvent, currentEvent) =>
//         currentEvent.Attendees.size > maxEvent.Attendees.size
//             ? currentEvent
//             : maxEvent
//     );
//     alert("Event with most attendees :${eventWithMostAttendees.title}");
// }
