import axios from "axios";
import {useEffect, useState} from "react";
import styled from "styled-components/macro";


export default function ShowImage({product}){
 const [imageUrl , setImageUrl] = useState("")


    useEffect(() => {
        axios({
            method: 'get',
            url: `https://world.openfoodfacts.org/api/v0/product/${product.id}.json`,
        })
            .then(response => setImageUrl(response.data.product.image_small_url))
            .catch((error) => console.error(error))
        }, [product.id])


    return (
        <Wrapper>
            <img src={imageUrl} alt="Product Image" />
        </Wrapper>
    )
}

const Wrapper = styled.image`
  img {
    width: 85px;
    height: 70px;
    border-radius: 10px 25% 20px;
  } `

