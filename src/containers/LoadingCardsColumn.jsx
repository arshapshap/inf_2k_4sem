import LoadingCard from "../components/LoadingCard"

const LoadingCardsColumn = ({number}) => {
    return (
        <div>
        {[...Array(number).keys()].map(() => (
          <div>
            <LoadingCard/>
          </div>

        ))}
        </div>
    )
}

export default LoadingCardsColumn;