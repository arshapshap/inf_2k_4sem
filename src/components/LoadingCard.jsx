import { Card } from 'antd';

export const LoadingCard = () => (
    <Card
        style={{
          width: 300,
          height: 300,
          margin: 20,
        }}
        loading={true}
      />
);

export default LoadingCard;