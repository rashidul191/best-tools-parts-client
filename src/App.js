import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./Pages/Blogs/Blogs";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageTools from "./Pages/Dashboard/ManageTools/ManageTools";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Home from "./Pages/Home/Home";
import PurchasePage from "./Pages/Home/Tools/PurchasePage/PurchasePage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>

        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <PurchasePage></PurchasePage>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="makeAdmins"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addTool"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageTools"
            element={
              <RequireAdmin>
                <ManageTools></ManageTools>
              </RequireAdmin>
            }
          ></Route>

        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
