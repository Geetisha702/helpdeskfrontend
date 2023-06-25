

import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Active, Inactive } from "./pages/Dashboard";
import {
CreateTicket
} from "./pages/CreateTicket";
import { Logout } from "./pages/Logout";
import  UpdateTicket  from "./pages/UpdateTicket";
import ViewRecords from "./pages/ViewRecords";

function App() {
return (
	<Router>
	<Sidebar />
		<div className="container"> 
	<Routes>
		localhost:3000/Tickets
	
		<Route path='/dashboard' element={<Dashboard/>} />
		<Route path='/dashboard/active' element={<Active/>} />
		<Route path='/dashboard/inactive' element={<Inactive/>} />
		<Route path='/create' element={<CreateTicket/>} />
		<Route path='/logout' element={<Logout/>} />
                
		
		<Route path='/ticket/:ticketId' element={<UpdateTicket/>} />
		<Route path='/tickets/:ticketId' element={<ViewRecords/>} />

</Routes></div>
		
	</Router>
);
}

export default App;
