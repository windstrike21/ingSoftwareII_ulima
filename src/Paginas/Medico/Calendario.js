import React from "react"
import '../../css/App.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timegrid from '@fullcalendar/timegrid'
const Calendario = () => {
    return (
        <div className="container">
            <FullCalendar
                plugins={[dayGridPlugin,timegrid]}
                initialView='dayGridMonth'
                headerToolbar={{
                    center: 'dayGridMonth,timeGridWeek,timeGridDay',
                  }}
                events={[
                    {title:'evento',date:'2022-11-27',start:'2022-11-27 07:00:00',end:'2022-11-27 11:15:00'},
                    {title:'evento2',date:'2022-11-27',start:'2022-11-27 07:00:00',end:'2022-11-27 08:30:00',color:'red'}
                ]}

                
            />
        </div>

    )
}
export default Calendario;