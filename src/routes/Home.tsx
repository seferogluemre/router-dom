import { useState } from "react"
import { Button } from "react-bootstrap";

export default function HomePage() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount((_) => _ + 1)
    }
    const decreaseCount = () => {
        setCount((_) => _ - 1)
    }




    return (
        <div>
            <h1>Anasayfaya hoşgeldiniz</h1>
            <div>
                sayac{count}
            </div>
            <div style={{ margin: "50px" }}>
                <Button onClick={increaseCount} >Sayacı arttır</Button>
                <Button onClick={decreaseCount}>Sayacı azalt</Button>
            </div>
        </div>
    )
}