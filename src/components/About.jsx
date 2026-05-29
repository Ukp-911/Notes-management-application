import React from 'react'
import './about.css'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-card">
                <h1 className="about-title">About NotesVault</h1>
                <p className="about-desc">
                    NotesVault is a powerful and reliable notes management system built
                    for people who take their thoughts seriously. Engineered with a
                    robust React and Redux architecture, NotesVault ensures your notes
                    are always persisted, instantly accessible, and effortlessly manageable
                    — no account, no server, no compromise.
                </p>
                <div className="about-features">
                    <h2>Features</h2>
                    <ul>
                        <li>📝 Create and store important notes</li>
                        <li>👁️ View notes in a focused reading mode</li>
                        <li>✏️ Edit notes with real time updates</li>
                        <li>🗑️ Delete notes with instant state sync</li>
                        <li>💾 Persistent storage — survives every refresh</li>
                        <li>⚡ Blazing fast UI powered by Redux</li>
                    </ul>
                </div>
                <div className="about-tech">
                    <h2>Built With</h2>
                    <div className="tech-stack">
                        <span>React</span>
                        <span>Redux Toolkit</span>
                        <span>LocalStorage</span>
                    </div>
                </div>
                <p className="about-footer">
                    Your thoughts are valuable — NotesVault makes sure they are never lost.
                </p>
            </div>
        </div>
    )
}

export default About