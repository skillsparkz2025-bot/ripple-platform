import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import School from "./pages/School";
import Admin from "./pages/Admin";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/school" element={<School />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
