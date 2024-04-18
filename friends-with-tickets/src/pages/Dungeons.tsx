import React from 'react';
import { establishContact } from '../APIS/dungeonsAndDragons'


// do we need a timeout
// a want loading and error sreen
function DungeonsPage() {
    const results = establishContact()
    console.log(results)

    return (
        <div>
            <h2>Dungeon Page</h2>
            <p></p>
        </div>
    )
}

export default DungeonsPage;