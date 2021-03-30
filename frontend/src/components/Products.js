import styled from "styled-components/macro";
import {Card, CardContent, Typography} from "@material-ui/core";

export default function Products({product}) {
    return (
        <ListItem key={product.id}>
            <Card style={cardStyle}>
                <CardContent>
                    <CardContentOrder>
                        <Typography>{product.name}</Typography>
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
    borderColor: "var(--borderColor)",
    borderStyle: "solid"
}