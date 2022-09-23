import axios from "axios";
import { useEffect, useState } from "react";

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
    <>
      <div>{dogRandom}</div>
      <img src={dogRandom}></img>
    </>
  );
}
