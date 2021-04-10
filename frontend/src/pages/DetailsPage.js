import React, {useEffect, useState} from "react";
import {getUserProductsById} from "../service/ApiService";
import {useParams} from "react-router";
import {Card, CardContent, Typography} from "@material-ui/core";
import styled from "styled-components/macro";
import Nutrients from "../components/Nutrients";
import ShowNutrientImage from "../components/ShowNutrientImage";


export default function DetailsPage({product}) {
    const [productDetails, setProductDetails] = useState([])
    const { id } = useParams();



    useEffect(() => {
        getUserProductsById(id)
            .then(setProductDetails)
            .catch((error) => console.error(error))
    }, [id])


    return (

        <Card style={cardStyle}>
                <CardContent>
                    <CardContentOrder >
                        <Typography variant="h6" component="h5" gutterBottom><b>{productDetails.product_name}</b></Typography>
                        <img src="/nutri.png"  />
                    </CardContentOrder>
                    <CardContentOrder>
                        <Typography   gutterBottom><b>Marke:</b> {productDetails.brands}</Typography>
                    </CardContentOrder>
                    <CardContentOrder>
                        <Typography   gutterBottom><b>Nutri-Score:</b> {productDetails.nutriscore_grade}</Typography>
                    </CardContentOrder>
                    <CardContentOrder>
                        <Typography   gutterBottom><b>Nova-Gruppe:</b> {productDetails.nova_group}</Typography>
                    </CardContentOrder>
                    <CardContentOrder>
                        <Typography   gutterBottom><b>Allergene:</b> {productDetails.allergens_tags}</Typography>
                    </CardContentOrder>
                    <CardContentOrder>
                        <Typography   gutterBottom><b>Zusätze: </b>{productDetails.additives_prev_original_tags}</Typography>
                    </CardContentOrder>
                    <CardContentOrder>
                        <Typography   gutterBottom><b>Menge: </b>{productDetails.quantity}</Typography>
                    </CardContentOrder>
                    <CardContentOrder>
                        <Typography   gutterBottom><b>Inhaltsstoffe:</b> {productDetails.ingredients_text_de}</Typography>
                    </CardContentOrder>
                    <div><b>Serving by 100g</b></div>
                    <Nutrients />
                    <ShowNutrientImage productDetails={productDetails}/>
                </CardContent>
        </Card>
    )
}

const CardContentOrder = styled.div`
  display: flex;
  justify-content: space-between;
  
  img {
    width: 90px;
    height: 50px;
    border-radius: 20%;
  }
  
`

const cardStyle = {
    backgroundColor: "var(--backgroundColorPrimary)",
    borderColor: "var(--text-color, beige)",
    borderStyle: "double"
}
