import React ,{useEffect, useLayoutEffect, useState}from 'react'
import TicketService from '../services/TicketService'
import { Link } from 'react-router-dom'

const GetActiveRecords = () => {
    const[tickets,setTickets]=useState([])
   useEffect(() =>{
    TicketService.getAllTicketss().then((response)=>{
        setTickets(response.data)
        console.log(response.data);
    }).catch(error=>{console.log(error)});

   },[])
  return (
    <div className="container">
        <h2 className='text-center py-3'>Inactive Tickets</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>ticketid</th>
                <th>employeeid</th>
                <th>employeeName</th>
                <th>remarks</th>
               <th>status</th>
                <th>ticketcate</th>
               <th>ticketsubcate</th>
                </thead>
                <tbody>
                    {tickets.map
                    (ticket=>
                    <tr key={ticket.id}>
                        <td>{ticket.ticketId}</td>
                        <td>{ticket.empId}</td>
                        <td>{ticket.empName}</td>
                        <td>{ticket.remark}</td>
                        <td>{ticket.status}</td>
                        <td>{ticket.ticketCate}</td>
                        <td>{ticket.ticketSubCate}</td>
                        <td><Link className='btn btn-info' to={"/tickets/"+ticket.ticketId} >view</Link></td>
                    </tr>)}
                </tbody>
        </table>
      
    </div>
  )
}

export default GetActiveRecords