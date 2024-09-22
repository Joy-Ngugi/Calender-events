const events=[
    {
        title:'Wedding',
        date:new Date('12/7/2025'),
        location:'Moi Avenue',
        Attendees:new Set(['Alice','Joy']),
      
    },
    {
        title:'Authorisation',
        date:new Date('12/6/2025'),
        location:'Archives',
        Attendees:new Set(['students']),
       
    },
    {
        title:'Graduation',
        date: new Date ('2/5/2025'),
        location:'Afya Center',
        Attendees:new Set(['all leaders','chair ladies']),
       
    },
    {
        title:'Chrismas',
        date:new Date ('3/7/2025'),
        location:'Tomboya',
        Attendees:new Set(['parents','guardians','elders']),
    
    }
]
const today = new Date();

const next7days= events.filter(event)
    function event(){
     const timeDifference= events.date-today;
     const daysDifference = timeDifference / (1000*60*60*24)
     return daysDifference >= 0 && daysDifference <= 7;
}

const eventDetails = events.map(event => {
    return {
      title: event.title,
      date: event.date.toString(),
      location: event.location
    };
  });

  console.log(eventDetails);

  events.forEach(event => {
    // Destructure title, date, and location from the event array
    const { title, date, location } = event;
  
    // Format and display the data in table format
    console.log(`${title}\t${date.toString()}\t${location}`);
  });  

  function addAttendee(eventTitle, attendee) {
    const event = events.find(e => e.title === eventTitle);
    if (event) {
        event.Attendees.add(attendee);
        console.log(`${attendee} added to ${eventTitle}`);
    } else {
        console.log('Event not found.');
    }
}


addAttendee('Wedding', 'George');

function toJSONWithFormattedDate(events) {
    return JSON.stringify(events, (key, value) => {
        if (key === 'date') {
            return { formattedDate: new Date(value).toLocaleDateString('en-US') };
        }
        return value;
    });
}

console.log(toJSONWithFormattedDate(events));

const firstEvent = events[0];

console.log(Object.keys(firstEvent)); // Properties
console.log(Object.values(firstEvent)); // Values
console.log(Object.entries(firstEvent)); // Key-Value pairs

events.forEach(event => {
    console.log(`Title: ${event.title}, Date: ${event.date.toLocaleDateString()}`);
});


function deleteEvent(Wedding) {
    const index = events.findIndex(event => event.title === Wedding);
    if (index !== -1) {
        events.splice(index, 1);
        console.log(`Event Wedding has been deleted.`);
    } else {
        console.log('Event not found.');
    }
}


const eventWithMostAttendees = events.reduce((maxEvent, currentEvent) =>
    currentEvent.Attendees.size > maxEvent.Attendees.size ? currentEvent : maxEvent
);

console.log(`Event with most attendees: ${eventWithMostAttendees.title}`);
