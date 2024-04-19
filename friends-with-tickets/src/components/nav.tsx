import React from 'react';
import { Link } from "react-router-dom";

export default function Navgation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/dashboard/messages">Messages (Dashboard)</Link></li>
                <li><Link to="/dragonPromises">Dungeon and Dragons - Promises</Link></li>
            </ul>
        </nav>
    )
}