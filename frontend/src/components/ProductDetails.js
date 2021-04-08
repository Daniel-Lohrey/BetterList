import {Card, CardContent, Typography} from "@material-ui/core";
import styled from "styled-components/macro";

export default function ProductDetails({product}) {


    return (
        <ListItem >
            <Card style={cardStyle}>
                    <CardContent>
                        <CardContentOrder >
                            <Typography variant="h6" component="h5" gutterBottom>{product.product_name}</Typography>
                        </CardContentOrder>
                        <CardContentOrder>
                            <Typography   gutterBottom>Marke: {product.brands}</Typography>
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
    backgroundColor: "var(--backgroundColorPrimary)",
    borderColor: "var(--text-color, beige)",
    borderStyle: "double"
}


