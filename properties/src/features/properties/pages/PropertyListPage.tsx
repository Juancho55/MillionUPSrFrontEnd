import { useState } from "react";
import { useProperties } from "../hooks/useProperties";
import PropertyCard from "../../../components/PropertyCard";
import { TextField, Slider, Typography, Box, CircularProgress, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PropertyListPage: React.FC = () => {
    const { data: properties, isLoading } = useProperties();
    const [search, setSearch] = useState("");
    const [priceRange, setPriceRange] = useState<number[]>([0, 1000000]);
    const navigate = useNavigate();

    if (isLoading) {
        return (
            <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
                <CircularProgress />
            </Box>
        );
    }

    const filtered = properties.filter(
        (p: any) =>
            p.name.toLowerCase().includes(search.toLocaleLowerCase()) &&
            p.price >= priceRange[0] &&
            p.price <= priceRange[1]
    );

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" mb={2}>
                Propiedades
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                sx={{ mb: 3 }}
                onClick={() => navigate("/properties/register")}
            >
                Registrar Nueva Propiedad
            </Button>
            <TextField
                label="Buscar por nombre"
                variant="outlined"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{ mb: 4 }}
            />

            <Typography gutterBottom>Rango de Precio</Typography>
            <Slider
                value={priceRange}
                onChange={(e, newValue) => setPriceRange(newValue as number[])}
                valueLabelDisplay="auto"
                min={0}
                max={1000000}
                sx={{ mb: 4 }}
            />

            <Box sx={{ display: "grid", gap: 2 }}>
                {filtered?.map((property: any) => (
                    <PropertyCard
                        key={property.id}
                        id={property.id}
                        name={property.name}
                        address={property.address}
                        price={property.price}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default PropertyListPage;