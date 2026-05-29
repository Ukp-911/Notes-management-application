import { useState } from 'react'
import './viewpastes.css'
import { useSelector } from 'react-redux'
import Btn from '../btncomponents/btncomps.jsx'
import { useDispatch } from 'react-redux'
import { deletepaste } from '../pasteslice.jsx'
import toast from 'react-hot-toast'


const Viewpastes = () => {
    const dummyPastes = useSelector((state) => state.paste.value)
    const [view, setview] = useState(false)
    const [update, setupdate] = useState('')
    const [pasteid, setpasteid] = useState('')

    const dispatch = useDispatch()

    const Close = () => {
        setview(false)
        setupdate(false)
    }
    const delnotify=()=>{
        toast("Note deleted", { duration: 1000 })
    }

    const config = {
        view,
        update,
        pasteid,
        Close,
    }

    return (
        <div className="viewpaste-container">

            {(view || update) && (
                <div className="overlay">
                    <div className="modal">
                        <Btn config={config} />
                    </div>
                </div>
            )}

            <div className={view || update ? "blurred" : ""}>
                <h1 className="heading">All Pastes</h1>
                <div className="paste-wrapper">
                    {dummyPastes.length === 0 ? (
                        <div className="empty-state">
                            <h2>No Items Created Yet</h2>
                        </div>
                    ) : (
                        dummyPastes.map((paste) => (
                            <div className="paste-card" key={paste.id}>
                                <div className="paste-top">
                                    <h2>{paste.title}</h2>
                                    <div className="btn-group">
                                        <button onClick={() => { setview(true); setupdate(false); setpasteid(paste.id) }}>View</button>
                                        <button onClick={() => { setupdate(true); setview(false); setpasteid(paste.id) }}>Edit</button>
                                        <button onClick={() => { dispatch(deletepaste(paste.id));delnotify() }}>Delete</button>
                                    </div>
                                </div>
                                <p>{paste.content}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>

        </div>
    )
}

export default Viewpastes