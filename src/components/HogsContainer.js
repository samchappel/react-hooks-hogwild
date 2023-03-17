import hogs from "../porkers_data";
import HogTile from "./HogTile"
import Filters from "./Filters"
import { useState } from 'react';


function HogsContainer() {
    const [greaseChecked, setGreaseChecked] = useState(false);
    const [sortBy, setSortBy] = useState('original')
    
    // const filterGreasedHogs = hogs.filter((hog) => {
    //     if (greaseChecked) {
    //     return hog.greased
    // } 
    //         return true;
    //     })
    // }

    const filterGreasedHogs = greaseChecked ? hogs.filter((hog) => hog.greased) : hogs

    
    function handleGreasedChange(e) {
        // console.log(e.target.checked)
        setGreaseChecked(e.target.checked)
    }
    
    // console.log(greaseChecked)
    
    const hogTiles = filterGreasedHogs.map((hog) => <HogTile key={hog.name} {...hog}/>)

    return (
        <section>
            <Filters greaseChecked={greaseChecked} handleGreasedChange={handleGreasedChange} 
            sortBy={sortBy}/>
            {hogTiles}
        </section>
    )
}

export default HogsContainer