
import { useState } from "react";

export default function Photos() {

    const [number, setNumber] = useState(0)

    return (
        <section>
            <h2>{number}</h2>
            <button onClick={ () => setNumber(number - 1) }>Prev</button>
            <button onClick={ () => setNumber(0) }>Reset</button>
            <button onClick={ () => setNumber(number + 1) }>Next</button>
        </section>
    )
}