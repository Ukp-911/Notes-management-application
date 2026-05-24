import './viewpastes.css'
import { useSelector } from 'react-redux'
const Viewpastes = () => {

    const dummyPastes = useSelector((state)=>state.paste.value)

    return (
        <div className="viewpaste-container">
            <h1 className="heading">
                All Pastes
            </h1>
            <div className="paste-wrapper">
                {
                    dummyPastes.map((paste) => (
                        <div className="paste-card" key={paste.id}>
                            <div className="paste-top">
                                <h2>{paste.title}</h2>
                                <div className="btn-group">
                                    <button>View</button>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                            <p>
                                {paste.content}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Viewpastes