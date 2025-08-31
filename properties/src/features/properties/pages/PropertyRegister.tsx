import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createProperty } from "../../../api/propertyApi";
import { useNavigate } from "react-router-dom";

const PropertyRegister: React.FC = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [price, setPrice] = useState<number | "">("");
    const [imageBase64, setImageBase64] = useState("");
    const [imageId, setImageId] = useState("");
    const navigate = useNavigate();

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setImageBase64(result);
                setImageId(result.split(",")[1]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        if (!name || !address || !price || !imageId) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        try {
            await createProperty({ name, address, price: Number(price), imageId });
            alert("Propiedad creada con éxito.");
            setName(""); setAddress(""); setPrice(""); setImageId("");
        } catch (error) {
            console.error(error);
            alert("Error al crear la propiedad.");
        }
    };
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 4, maxWidth: 600, mx: "auto" }}>
            <Typography variant="h4" mb={2}>
                Registrar Propiedad
            </Typography>
            <TextField
                label="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                label="Dirección"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                label="Precio"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                sx={{ mb: 2 }}
            />
            <Button variant="contained" component="label" sx={{ mb: 2 }}>
                Subir Imagen
                <input type="file" hidden accept="image/*" onChange={handleImageChange} />
            </Button>
            {imageBase64 && <img src={imageBase64} alt="Preview" style={{ width: '40%', marginBottom: '16px' }} />}
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Registrar
            </Button>
            <Button
                variant="contained"
                color="primary"
                sx={{ mb: 3 }}
                onClick={() => navigate(-1)}
            >
                Volver
            </Button>
        </Box>
    );
};

export default PropertyRegister;