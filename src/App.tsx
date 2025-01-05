import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { Transactions } from "./pages/Transactions/Transactions";
import { LoanManagement } from "./pages/LoanManagement/LoanManagement";
import { MainProvider } from "./context/mainContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <MainProvider>
      <ToastContainer position="top-right" autoClose={5000} />
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/loans" element={<LoanManagement />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </MainProvider>
    </div>
  );
}

export default App;
