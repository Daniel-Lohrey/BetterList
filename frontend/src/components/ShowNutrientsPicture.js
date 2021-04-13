import axios from "axios";
import {useEffect, useState} from "react";
import styled from "styled-components/macro";



export default function ShowNutrientsPicture({ productDetails}){
    const [nutrientImageUrl , setNutrientImageUrl] = useState("")



    useEffect(() => {
        axios({
            method: 'get',
            url: `https://world.openfoodfacts.org/api/v0/product/${productDetails.id}.json`,
        })
            .then(response => setNutrientImageUrl(response.data.product.image_nutrition_url))
            .catch((error) => console.error(error))
    }, [productDetails.id])


    return (
        <Wrapper>
            <img src={nutrientImageUrl} alt="Nutrient" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  img {
    margin-top: 20px;
    width: 150px;
    height: 120px;
    border-radius: 10px 25% 20px;
  } `



