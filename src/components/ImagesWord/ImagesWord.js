import axios from "axios";
import { useEffect, useState } from 'react';
import './ImagesWord.scss';

const ImagesWord = ({wordSearch, imgPerPage}) => {
    const [dataImages, setDataImages]=useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try{
                const response = await axios
                    .post(`${process.env.REACT_APP_BACKEND_URL}/api/pexels/images`,{
                        query: wordSearch,
                        perPage: imgPerPage
                    });
                const data = response.data;

                if (data.length > 0){
                    setDataImages(data);
                }
            }catch(error){
                console.log("Error fetching images.")
            }
        }
        if (wordSearch){
            fetchImages();
        }
    }, [wordSearch]);

    return (
        <section className="images">
           {dataImages.length > 0 ? (
                dataImages.map((image, index) => (
                    <img className="images-img" src={image.url} alt={wordSearch} key={index}></img>
                ))
           ) : (
                <p className="images-text">Downloading images...</p>
            )}
        </section>
    );
};

export default ImagesWord;