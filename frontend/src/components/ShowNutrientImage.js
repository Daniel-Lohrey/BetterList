import axios from "axios";
import {useEffect, useState} from "react";



export default function ShowNutrientImage({product}){
    const [nutrientImageUrl , setNutrientImageUrl] = useState("")



    useEffect(() => {
        axios({
            method: 'get',
            url: `https://world.openfoodfacts.org/api/v0/product/${product.id}.json`,
        })
            .then(response => setNutrientImageUrl(response.data.product.image_ingredients_thumb_url))
            .catch((error) => console.error(error))
    }, [])


    return (
        <img src={nutrientImageUrl} width={100}  max-height={200}/>
    )
}




