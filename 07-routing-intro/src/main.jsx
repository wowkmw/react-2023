import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route path="" element={<Home />} />
  //       <Route path="about" element={<About />} />
  //       <Route path="contact" element={<Contact />} />
  //       <Route path="user/:userid?" element={<User />} />
  //       <Route path="github" element={<Github />} />
  //       <Route
  //         path="*"
  //         element={
  //           <div className="flex w-screen bg-red-700">
  //             <h1 className="flex mx-auto text-center text-4xl font-bold my-10  text-white py-5">
  //               Page not found
  //             </h1>
  //           </div>
  //         }
  //       />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
);
