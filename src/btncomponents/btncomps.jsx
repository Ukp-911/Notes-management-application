import { useState } from 'react'
import '../btncomponents/btncomps.css'
import toast from 'react-hot-toast'
const btncomps = () => {

    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [titleError, settitleError] = useState(false)
    const [contError, setcontError] = useState(false)

    const notify=()=>{
		toast("paste updated",{
			duration:1000
		})
	}
    const handleinpchnge = (e) => {
		settitle(e.target.value)
		if (title!==""){
			settitleError(false)
		}
	}

	const errnotify=()=>{
		toast("enter all the fields",{
			duration:1000
		})
	}

    const handletextchnge = (e) => {
		setcontent(e.target.value)
		if (content!==""){
			setcontError(false)
		}
	}

    const handlebtn = (e) => {
        e.preventDefault()
        if (title === "") {
            settitleError(true)
        }
        if (content === "") {
            setcontError(true)
        }
        if (title !== "" && content !== "") {
            // const pastedata = {
            //     title,
            //     content,
            //     id: Date.now()
            // };
            notify()
        }
        else {
            errnotify()
        }
    }

    return (
        <div className='superdiv'>
            <div className='hom'>
                <input id='uk' type="text" placeholder='Update your title' onChange={handleinpchnge}
                style={{
					borderColor : titleError ? "red":""
				}}
                />
                <button onClick={handlebtn}>Update Paste</button>
            </div>
            <div className="tex">
                <textarea id='pk' placeholder='Update your content' onChange={handletextchnge}
                style={{
					borderColor : contError? "red":""
				}} /> 
            </div>
        </div>
    )
}

export default btncomps