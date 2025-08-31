import { Card, CardContent, Typography, Button} from "@mui/material";
import {Link} from "react-router-dom";

interface PropertyCardProps {
  id: string;
  name: string;
  address: string;
  price: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ id, name, address, price }) => {
    return(
        <Card sx={{p:2, mb:2}}>
            <CardContent>
                <Typography variant="h6">{name}</Typography>
                <Typography>{address}</Typography>
                <Typography color="primary">${price}</Typography>
                <Button component={Link} to={`/property/${id}`} variant="contained" sx={{mt:2}}>
                    Ver más
                </Button>
            </CardContent>            
        </Card>
    );
};

export default PropertyCard;