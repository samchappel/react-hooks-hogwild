function Filters({ greaseChecked, handleGreasedChange }) {
    // const [checked, setChecked] = useState(false);

    // function handleGreasedChange(e) {
    //     console.log(e.target.checked)
    //     setChecked(e.target.checked)
    // }

    return (
        <form>
            <label htmlFor="greased">Greased</label>
            <input 
            id="greased" 
            type="checkbox" 
            checked={greaseChecked} 
            onChange={handleGreasedChange}
            />

            <fieldSet>
                <legend>Select a sort:</legend>
                <div>
                    <input 
                    type="radio" 
                    id="original" 
                    value="original" 
                    checked={sortBy === "original" } />
                    <label htmlFor="original">Original</label>
                </div>                
                <div>
                    <input 
                    type="radio" 
                    id="name" 
                    value="name" 
                    checked={sortBy === "name" } />
                    <label htmlFor="name">Name</label>
                </div>
                <div>
                    <input 
                    type="radio" 
                    id="weight" 
                    value="weight" 
                    checked={sortBy === "weight" } />
                    <label htmlFor="weight">Weight</label>
                </div>
            </fieldSet>
        </form>
    )
}

export default Filters