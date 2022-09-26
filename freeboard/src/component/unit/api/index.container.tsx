import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 300px;
  overflow: hidden;
`;

export default function DogContainer() {
  const [dogRandom, setDogRandom] = useState();

  useEffect(() => {
    const CatUpdate = async () => {
      const result: any = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      console.log(result.data.message);
      setDogRandom(result.data.message);
    };

    CatUpdate();
  }, []);

  return (
    <Wrapper>
      <div>{dogRandom}</div>
      <img src={dogRandom}></img>
    </Wrapper>
  );
}
