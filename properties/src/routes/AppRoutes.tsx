import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyListPage from "../features/properties/pages/PropertyListPage";
import PropertyDetail from "../features/properties/pages/PropertyDetailPage";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PropertyListPage />} />
                <Route path="/properties/:id" element={<PropertyDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
