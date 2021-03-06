import styled from "styled-components/macro";
import ShowProduct from "./ShowProduct";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {Card, CardActionArea, CardContent, IconButton, makeStyles, Typography} from "@material-ui/core";





const useStyles = makeStyles(() => ({
    cancel: {
        width: "auto",
        color:"var(--borderColor)",
        marginLeft: 300,
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
                        <ShowProduct product={product}/>
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







