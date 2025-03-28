import { Routes, Route } from "react-router-dom";
import Init from "../pages/init";
import Register from "../pages/register";
import Confirmation from "../pages/confirmation";
import Dashboard from "../pages/dashboard";
import Benefits from "../pages/benefits";
import Duels from "../pages/duels";
import Friends from "../pages/friends";
import NotFound from "../pages/not-found";
import MainLayout from "../layout/main-layout";
import ConfirmationDuel from "../pages/confirmation-duel";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="init" element={<Init />} />
        <Route path="register" element={<Register />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="benefits" element={<Benefits />} />
        <Route path="duels" element={<Duels />} />
        <Route path="friends" element={<Friends />} />
        <Route path="confirmation-duel" element={<ConfirmationDuel />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
