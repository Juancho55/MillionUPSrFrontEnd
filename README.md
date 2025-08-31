Add

Para ejecutar el proyecto por favor ejecutar primero.

1. npm install
2. npm run dev

con esto el proyecto levanta sin problema ahora no olvidar poner a ejecutar el api.

* Arquitectura

Framework base: React + Vite (para desarrollo rápido y build optimizado).

Lenguaje: TypeScript (tipado estático, mejor mantenibilidad).

Estructura modular por features:

src/features/properties/ → Módulos relacionados a propiedades (páginas, componentes, lógica).

src/api/ → Centralización de servicios HTTP (axios).

src/components/ → Componentes reutilizables (si tienes algunos genéricos).

Patrón de diseño aplicado:

Separación UI (componentes) y lógica de negocio (api, hooks, state).

Manejo de formularios con useState.

Comunicación con el backend mediante servicios centralizados (propertyApi.ts).

* Librerías principales

React Router DOM → Navegación y rutas (ej: /properties/register).

Axios → Cliente HTTP para consumir APIs (métodos GET/POST).

MUI (Material UI) → Componentes de UI modernos y responsivos (TextField, Button, Typography, Box).

TypeScript → Tipado estricto para prevenir errores.

* Funcionalidades implementadas

Formulario de registro de propiedades:

Campos: nombre, dirección, precio.

Upload de imagen con conversión a Base64.

Validaciones básicas en el frontend (no enviar si faltan campos).

Previsualización de imagen antes de enviar.

Integración con API REST (POST de propiedades con JSON).

* Flujo de una operación

El usuario llena el formulario y sube una imagen.

La imagen se convierte a base64 (sin el prefijo data:image/jpeg;base64,).

Se construye un JSON con los campos requeridos:

{
  "name": "Ejemplo",
  "address": "Calle 123",
  "price": 1200000.50,
  "imageId": "9j/4AAQSkZJRgABAQAAAQABAAD..."
}


Axios envía este objeto al backend (createProperty).

Se muestra feedback al usuario: éxito o error.

* Ventajas de la arquitectura usada

Escalable: cada feature está aislada en su propio módulo.

Reutilizable: componentes UI desacoplados de la lógica.

Mantenible: services centralizados facilitan cambios futuros en endpoints.

Productiva: uso de MUI + Vite permite rapidez en desarrollo.