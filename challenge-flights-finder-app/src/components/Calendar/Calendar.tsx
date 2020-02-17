import React from 'react'

interface Imonth {

}
export default function Calendar() {
    // async function getCalendar() {
    //     const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/calendarId/acl/ruleId');
    //     console.log(response);
    //     const month = await response.json();
    //     return month;
    // }

    return(
        <div>
            <input type="date"/>
        </div>
    )
}