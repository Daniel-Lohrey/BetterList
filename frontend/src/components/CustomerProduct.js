import {Card, CardContent, Typography} from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import React from "react";
import styled from "styled-components/macro";

export default function CustomerProduct({productName}) {


    return (
        <ListItem>
            <Card style={cardStyle}>
                <CardContent>
                    <CardContentOrder>
                        <Typography  gutterBottom>{productName}</Typography>
                        <Checkbox color="default" />
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

