import { Card } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;

export const DogCard = ({ id, image, name }) => (
  <Link to={ `/${id}` }>
    <Card
      hoverable
      style={{
        width: 300,
        margin: 20,
        height: 300,
      }}
      cover={<img alt="example" src={image} style={{ height: 240, borderRadius: 10, objectFit: "cover" }} />}
    >
      <Meta title={name} />
    </Card>
  </Link>
);

export default DogCard;