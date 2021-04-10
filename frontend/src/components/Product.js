import styled from "styled-components/macro";
import {Card, CardActionArea, CardContent, IconButton, makeStyles, Typography} from "@material-ui/core";
import ShowImage from "./ShowImage";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import ShowNutrientImage from "./ShowNutrientImage";



const useStyles = makeStyles(() => ({
    cancel: {
        width: "auto",
        color:"var(--borderColor)",
        marginLeft: 330,
        position: "absolute",
        marginBlock: -50
    },
}));

export default function Product({ product , onDeleteProduct }) {
    const detailsUrl = `/products/details/${product.id}`
    const classes = useStyles();

    return (
        <ListItem >
            <Card style={cardStyle} >
                <CardActionArea href={detailsUrl} >
                <CardContent>
                    <CardContentOrder >
                        <Typography variant="h6" component="h5" gutterBottom>{product.product_name}</Typography>
                        <ShowImage product={product}/>
                    </CardContentOrder>
                    <CardContentOrder>
                    <Typography  gutterBottom>Marke: {product.brands}</Typography>
                    </CardContentOrder>
                </CardContent>
                </CardActionArea>
                <IconButton aria-label="delete"
                            className={classes.cancel} onClick={() => onDeleteProduct(product.id)}
                            type="button">
                    <DeleteIcon />
                </IconButton>
            </Card>
        </ListItem>
    )
}

const ListItem = styled.li`
  margin: 3px;
`
const CardContentOrder = styled.div`
  display: flex;
  justify-content: space-between;
`

const cardStyle = {
    backgroundColor: "var(--text-color, #EAE0D5)",
    borderRadius: "12px",
    margin: "12px",
}







