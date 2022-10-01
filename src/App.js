import axios from "axios"
import React, { useEffect, useState } from "react";
import Roter from "./components/Roter"


function App() {
	const [ name, setName ] = useState("")


	async function postName(e) {
		e.preventDefault()
		try {
			await axios.post("http://localhost:4000/Login", {
				name
			})
		} catch (error) {
			console.error(error)
		}
	}

	return (
<div >
<Roter />		
	<form onSubmit={postName}>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<button type="submit">Send Name</button>
			</form>
		</div>
		
	)
}

export default App