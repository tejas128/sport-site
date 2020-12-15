import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Sport() {
    const [Sports, setSports] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            const sports = await axios(`https://www.thesportsdb.com/api/v1/json/1/all_sports.php`);
            console.log(sports.data.sports)
            setSports(sports.data.sports)

        }
        fetchdata()
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Sport
