import { useEffect, useState } from "react";
import CardsGrid from "../containers/CardsGrid";

const Cards = ({ page, pageSize }) => {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        setDogs([])
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "live_QD4JgO7ZsxyBUsQyKNRFZFojHozzA9NPd6y56WXioFki6uPvFmTAESh7ZiZwOVPe"
            }
        }
        let url = `https://api.thedogapi.com/v1/images/search?limit=${pageSize}&page=${page - 1}&order=ASC&has_breeds=1`;
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(dogs => {
                setLoading(false);
                setDogs(dogs.map((dog) => ({ name: dog["breeds"][0]["name"], image: dog["url"], id: dog["id"] })));
            })
    }, [page, pageSize])
    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CardsGrid dogs={dogs} loading={loading} columns={4} />
    </div>
}

export default Cards;