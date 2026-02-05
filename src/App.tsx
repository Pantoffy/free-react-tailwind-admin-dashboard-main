import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ToastContainer } from "./components/common/Toast";
import { ConfirmDialog } from "./components/common/ConfirmDialog";
import SignIn from "./pages/AuthPages/SignIn";
import NotFound from "./pages/OtherPage/NotFound";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import Calendar from "./pages/Calendar";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import NhapKho from "./pages/Forms/NhapKho";
import DonDatHang from "./pages/Forms/DonDatHang";
import XuatKho from "./pages/Forms/XuatKho";
import Materials from "./pages/Inventory/Materials";
import Suppliers from "./pages/Inventory/Suppliers";
import Warehouse from "./pages/Inventory/Warehouse";

export default function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <ConfirmDialog />
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />
            <Route path="/nhap-kho" element={<NhapKho />} />
            <Route path="/xuat-kho" element={<XuatKho />} />
            <Route path="/don-dat-hang" element={<DonDatHang />} />

            {/* Inventory Management */}
            <Route path="/quan-ly-nguyen-lieu" element={<Materials />} />
            <Route path="/quan-ly-nha-cung-cap" element={<Suppliers />} />
            <Route path="/quan-ly-kho" element={<Warehouse />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
