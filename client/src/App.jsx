import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateStudents from "./pages/CreateStudents";
import Home from "./pages/Home";
import CreateSession from "./pages/CreateSession";
import SingleStudent from "./pages/SingleStudent";
import UploadResult from "./pages/UploadResult";
import ResultSheet from "./pages/ResultSheet";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <div>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 2000,
            style: {
              fontSize: "0.875rem",
            },
            success: {
              style: {
                backgroundColor: "#DCFCE7",
                color: "#14532D",
              },
            },
          }}
        />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student/create" element={<CreateStudents />} />
          <Route path="/student/:studentId" element={<SingleStudent />} />
          <Route
            path="/student/result/:studentId/:term"
            element={<UploadResult />}
          />
          <Route
            path="/student/result/view/:studentId/:term"
            element={<ResultSheet />}
          />
          <Route path="/session/create" element={<CreateSession />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
