import {Card, CardActionArea, CardContent, IconButton, Typography} from "@material-ui/core";
import ShowImage from "./ShowImage";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import styled from "styled-components/macro";

export default function CustomerProduct({productName}) {


    return (
        <ListItem>
            <Card style={cardStyle}>
                <CardContent>
                    <CardContentOrder>
                        <Typography variant="h6" component="h5" gutterBottom>{productName}</Typography>
                    </CardContentOrder>
                </CardContent>
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