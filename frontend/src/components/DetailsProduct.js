import React, {useEffect, useState} from "react";
import {getUserProductsById} from "../service/ApiService";
import {useParams} from "react-router";
import {Card, CardContent, Typography} from "@material-ui/core";
import styled from "styled-components/macro";
import Nutrients from "./Nutrients";
import ShowNutrientsPicture from "./ShowNutrientsPicture";


export default function DetailsProduct({product}) {
    const [productDetails, setProductDetails] = useState([])
    const { id } = useParams();



    useEffect(() => {
        getUserProductsById(id)
            .then(setProductDetails)
            .catch((error) => console.error(error))
    }, [id])


    return (
        <Card style={cardStyle} >
                <CardContent>
                    <CardContentOrder >
                        <Typography variant="h6" component="h5" gutterBottom><b>{productDetails.product_name}</b></Typography>
                        <img src="/nutri.png" alt="Nutri-Score-Table"/>
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
                    <Div ><b>Serving by 100g</b></Div>
                    <Nutrients  />
                    <ShowNutrientsPicture productDetails={productDetails}/>
                </CardContent>
        </Card>
    )
}

const CardContentOrder = styled.div`
  display: grid;
  justify-content: space-between;
  
  img {
    width: 90px;
    height: 50px;
    position: absolute;
    padding-left: 250px;
    padding-top: 40px;
  }
  
    .MuiCardContent-root > div:nth-child(9) {

      padding-bottom: 0.25em;
    }
`

const cardStyle = {
    backgroundColor: "var(--backgroundColorPrimary)",
    borderColor: "var(--text-color, beige)",
    borderStyle: "double",
}

const Div = styled.div`
    padding-bottom: 0.4em;
    `

