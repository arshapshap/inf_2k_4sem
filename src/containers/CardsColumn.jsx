import DogCard from "../components/DogCard"

const CardsColumn = ({dogs}) => {
    return (
        <div>
        {dogs.map((dog) => (
          <div>
            <DogCard id={dog.id} image={dog.image} name={dog.name}/>
          </div>

        ))}
        </div>
    )
}

export default CardsColumn;