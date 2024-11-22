import { useEffect, useState } from "react";

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

    return (
        <div>
            <h1>Hakkkımızda ?</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}
