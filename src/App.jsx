import React, { useEffect, useState } from "react";

const App = () => {
  //usss
  //array dönüyor
  const [images, setImages] = useState([]);

  useEffect(() => {
    const API_URL = "https://dog.ceo/api/breed/chihuahua/images";
    fetch(API_URL)
      .then((res) => res.json())
      .then((veri) => setImages(veri.message));
  }, []);

  return (
    <div>
      {images.map((imageUrl) => (
        <img src={imageUrl} width={100} height={100} />
      ))}
    </div>
  );
};

export default App;