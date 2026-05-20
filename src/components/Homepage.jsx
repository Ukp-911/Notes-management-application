import { useState } from 'react'
import './homepage.css'
const Homepage = () => {

	const [title,settitle]=useState("")
	const [content,setcontent]=useState("")

	const handlecreatebtn=(e)=>{
		e.preventDefault()
		if(content && title){
			console.log(content)
		}
	}

	const handleinpchnge=(e)=>{
		settitle(e.target.value)
	}

	const handletextchnge=(e)=>{
		setcontent(e.target.value)
	}
	return (
		<>
			<div className='home'>
				<input type="text" placeholder='Enter your title' onChange={handleinpchnge}/>
				<button onClick={handlecreatebtn}>Create Paste</button>
			</div>
			<div className="text">
				<textarea placeholder='Likh na Maderchod' onChange={handletextchnge}/>
			</div>
		</>
	)
}
export default Homepage	