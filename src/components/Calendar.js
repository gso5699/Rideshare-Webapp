import React from "react";

const Calendar = () => {
  return (
    <div className="calendarWidget">
        <iframe src="https://calendar.google.com/calendar/embed?src=8969186c602e9e6a4fec3426297af786195f562b788cdcf48c4d4427c96de513%40group.calendar.google.com&ctz=America%2FToronto" 
            width="400"
            height="300"
            frameborder="0" 
            title="calendar">
         </iframe>
    </div>
  );
};

export default Calendar;
