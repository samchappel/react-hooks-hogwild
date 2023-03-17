function HogDetails({ greased, highestMedal, specialty, weight}) {
    return (
        <ul>
            <li>{greased ? "Greased" : "Not Greased"}</li>
            <li>Specialty: {specialty}</li>
            <li>Highest Medal: {highestMedal}</li>
            <li>Weight: {weight}</li>
        </ul>
    )
}

export default HogDetails