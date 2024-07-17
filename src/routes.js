const { BrowserRouter, Routes, Route } = require("react-router-dom");
const { default: Inicio } = require("./pages/inicio/Inicio");

function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio />} />
        </Routes>
        </BrowserRouter>
        );
}

export default AppRoutes