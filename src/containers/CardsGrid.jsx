import { Row } from 'antd';
import { Col } from 'antd';

import CardsColumn from "./CardsColumn"
import LoadingCardsColumn from "./LoadingCardsColumn"

const CardsGrid = ({ dogs, loading, columns }) => {
    return (
        <Row gutter={16}>
            {[...Array(columns).keys()].map((i) => (<Col span={14 - columns*2}>
                {loading && <LoadingCardsColumn number={3} />}
                <CardsColumn dogs={dogs.filter((dog, index) => index % columns == i)} />
            </Col>))}
        </Row>
    )
}

export default CardsGrid;