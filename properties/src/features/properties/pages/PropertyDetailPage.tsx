import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPropertyById } from "../../../api/propertyApi";
import { Box, Typography, Card, CardMedia, CircularProgress } from "@mui/material";

const PropertyDetail: React.FC = () => {
    const { id } = useParams();

    const { data: property, isLoading } = useQuery({
        queryKey: ["property", id],
        queryFn: () => getPropertyById(id!),
        enabled: !!id,
    });

    if (isLoading) {
        return (
            <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!property) {
        return (
            <Box sx={{ p: 4 }}>
                <Typography variant="h6">Propiedad no encontrada.</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 4 }}>
            <Card sx={{ mb: 4 }}>
                {property.imageId && (
                    <CardMedia
                        component="img"
                        height="300"
                        image={`https://localhost:7121/api/Property/image/${property.imageId}`}
                        alt={property.name}
                    />
                )}
            </Card>

            <Typography variant="h4" mb={2}>
                {property.name}
            </Typography>
            <Typography variant="h6" mb={2}>
                {property.address}
            </Typography>
            <Typography variant="body1" mb={2}>
                ${property.price}
            </Typography>
        </Box>
    );
};

export default PropertyDetail;
