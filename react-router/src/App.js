import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
// import About from "./Components/About";
import { NavBar } from "./Components/NavBar";
import OrderSummary from "./Components/OrderSummary";
import NoMatch from "./Components/NoMatch";
import Products from "./Components/Products";
import FeaturedProducts from "./Components/FeaturedProducts";
import NewProducts from "./Components/NewProducts";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";
import Admin from "./Components/Admin";
import { Profile } from "./Components/Profile";
import { AuthProvider } from "./Components/Auth";
import { Login } from "./Components/Login";
import { RequireAuth } from "./Components/RequireAuth";
const LazyAbout = React.lazy(() => import("./Components/About"));

function App() {
  return (
    <AuthProvider>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout></LazyAbout>
            </React.Suspense>
          }
        />
        <Route
          path="order-summary"
          element={<OrderSummary></OrderSummary>}
        ></Route>
        <Route path="products" element={<Products></Products>}>
          <Route index element={<FeaturedProducts></FeaturedProducts>}></Route>
          <Route
            path="featured"
            element={<FeaturedProducts></FeaturedProducts>}
          ></Route>
          <Route path="new" element={<NewProducts></NewProducts>}></Route>
        </Route>
        <Route path="users" element={<Users></Users>}>
          <Route path=":userId" element={<UserDetails></UserDetails>}></Route>
          <Route path="admin" element={<Admin></Admin>}></Route>
        </Route>

        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile></Profile>
            </RequireAuth>
          }
        ></Route>

        <Route path="login" element={<Login></Login>}></Route>
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
