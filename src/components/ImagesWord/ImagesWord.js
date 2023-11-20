import axios from "axios";
import { useEffect, useState } from 'react';
import './ImagesWord.scss';

const ImagesWord = ({wordSearch, category}) => {
    const [dataImages, setDataImages]=useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try{
                const searchImg = wordSearch + ' ' + category;
                const response = await axios
                    .post(`${process.env.REACT_APP_BACKEND_URL}/api/pexels/images`,{
                        query: searchImg,
                        perPage: 4
                    });
                const data = response.data;
                if (data.length > 0){
                    setDataImages(data);
                }
            }catch(error){
                console.log("Error fetching images.")
            }
        }
        if (wordSearch && category){
            fetchImages();
        }
    }, [wordSearch, category]);

    return (
        <section className="images">
           {dataImages.length > 0 ? (
                dataImages.map((image, index) => (
                    <img className="images-img" src={image.url} alt={wordSearch} key={index}></img>
                ))
           ) : (
                <p>Downloading images...</p>
            )}
        </section>
    );
};

export default ImagesWord;