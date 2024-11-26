import { useEffect, useState } from "react";
import { useBearStore } from "../stores/CounterStore";

export default function AboutPage() {
    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/2')
        const json = await response.json();
        setData(json)
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (!data) {
        <div>yükleniyor....</div>
    }
    const bears = useBearStore((state) => state.bears)
    const increasePopulation = useBearStore((state) => state.increasePopulation)

    return (
        <div>
            <h1>Hakkkımızda ?</h1>
            <p>{JSON.stringify(data)}</p>
            <p>ayı sayısı:{bears}</p>
            <button onClick={increasePopulation}>Yeni ayı ekle</button>

        </div>
    )
}
