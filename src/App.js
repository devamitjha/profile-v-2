import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from "./admin/user/UserProfile";
import Admin_Layout from "./admin/Admin_Layout";
import AllPosts from "./admin/post/AllPosts";
import AddPost from "./admin/post/AddPost";
import PostCategories from "./admin/post/Categories";
import Tags from "./admin/post/Tags";
import MediaLibrary from "./admin/media/MediaLibrary";
import AddMedia from "./admin/media/AddMedia";
import Comments from "./admin/comment/Comments";
import AllUser from "./admin/user/Allusers";
import AddUser from "./admin/user/AddUser";
function App() {
  const location = useLocation();
  const user = true;
  return (
    <>
      <ToastContainer />
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
          <Route path="admin" element={<Admin_Layout />}>
            <Route index element={<AllPosts />} />
            <Route path="allposts" element={<AllPosts />} />
            <Route path="addpost" element={<AddPost />} />
            <Route path="categories" element={<PostCategories />} />
            <Route path="tags" element={<Tags />} />
            <Route path="library" element={<MediaLibrary />} />
            <Route path="addmedia" element={<AddMedia />} />
            <Route path="comments" element={<Comments />} />
            <Route path="alluser" element={<AllUser />} />
            <Route path="adduser" element={<AddUser />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
        </Routes >
      </AnimatePresence>
    </>
  );
}

export default App;

