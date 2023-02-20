import { Descriptions, Image, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

export const DogPage = (props) => {
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams(props)

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "live_QD4JgO7ZsxyBUsQyKNRFZFojHozzA9NPd6y56WXioFki6uPvFmTAESh7ZiZwOVPe"
      }
    }
    let url = `https://api.thedogapi.com/v1/images/${params.id}`;
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(dog => {
        setLoading(false);
        setDog(({ name: dog["breeds"][0]["name"], weight: dog["breeds"][0]["weight"]["metric"], height: dog["breeds"][0]["height"]["metric"], life_span: dog["breeds"][0]["life_span"], image: dog["url"], id: dog["id"] }));
      })
  }, [])
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: 20 }}>
        <Link to="/">
          <HomeOutlined style={{ marginBottom: 10, zoom: 2 }} />
        </Link>
        {loading && <Spin tip="Loading" size="large" />}
        {!loading &&
          <Image
            width={400}
            height={loading && 400}
            src={!loading && dog.image}
            placeholder={true}
          />
        }
        {!loading &&
          <Descriptions title="Info" bordered>
            <Descriptions.Item label="Name">{dog.name}</Descriptions.Item>
            <Descriptions.Item label="Weight">{dog.weight}</Descriptions.Item>
            <Descriptions.Item label="Height">{dog.height}</Descriptions.Item>
            <Descriptions.Item label="Life span">{dog.life_span}</Descriptions.Item>
          </Descriptions>
        }
      </div>
    </>
  );
};

export default DogPage;