import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomDogs } from "../redux/dogs/dogsAction";

const dogs = () => {


  const dogImage = useSelector((state) => state.dogs);
  const ImageSrc = dogImage ? dogImage.state : 'https://images.dog.ceo/breeds/pyrenees/n02111500_7583.jpg'
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   console.log(dogImage)

  // },[])
  const handleDog = ()=> {
    
    dispatch(getRandomDogs())
  }
  return (
    <div style={{backgroundColor:'purple'}} className="vw-100 vh-100 d-flex gap-3 flex-column justify-content-center align-items-center">
      <div className="position-relative w-50 h-50 shadow-lg">
      <Image src={ImageSrc} layout="fill" />
      </div>

      <button className="btn btn-outline-dark" onClick={handleDog}>Get Random Dogs</button>
    </div>
  );
};

export default dogs;
