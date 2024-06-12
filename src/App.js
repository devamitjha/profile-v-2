import { Routes, Route, useLocation} from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import PortfolioWithSuspense from "./pages/Portfolio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Categories from "./pages/Categories";
import Post from "./pages/Post";
import Blog from "./pages/Blog"
import BlogList from "./pages/BlogList";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from 'framer-motion';
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import ProductCart from "./pages/ProductCart";
import PaymentMethod from "./pages/PaymentMethod";
import ProtectedRoute from "./utils/ProtectedRoute";
function App() {
  const location = useLocation();
  const user = true;
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="resume" element={<Resume />} /> */}
            {/* <Route path="portfolio" element={<PortfolioWithSuspense />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="blog" element={<Blog />}>
              <Route index element={<BlogList />} />
              <Route path="category/*" element={<BlogList />} />
              <Route path=":postId" element={<Post />} />
            </Route>
            <Route path="shop" element={<Products />}>
              <Route index element={<ProductCategory />} />
              <Route path="category/*" element={<ProductCategory />} />
              <Route path=":productName" element={<ProductDetails />} />
              <Route path="checkout/cart" element={<ProductCart />} />
              {/* <Route path="checkout/payment" element={<PaymentMethod />} /> */}
            </Route>
            {/* Protected Routes */}
            <Route element={<ProtectedRoute user={user} />}>
              <Route path="resume" element={<Resume />} />
              <Route path="portfolio" element={<PortfolioWithSuspense />} />
              <Route path="shop/checkout/payment" element={<PaymentMethod />} />
            </Route>
          </Route>
        </Routes >
      </AnimatePresence>
    </>
  );
}

export default App;


<Route path="category" element={<Categories />}>
  <Route path=":postId" element={<Post />} />
</Route>
