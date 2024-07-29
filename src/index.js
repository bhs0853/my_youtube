// import React from "react";
// import ReactDOM from "react-dom/client";
// import Header from "components/Header";
// import Body from "components/Body";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import WatchPage from "components/WatchPage";
// import HomePage from "components/HomePage";
// import { Provider } from "react-redux";
// import store from "store/store";
// const Approuter = createBrowserRouter([
//     {
//         path: "/",
//         element: <Body/>,
//         children:[
//             {
//                 path:"/",
//                 element: <HomePage />
//             },
//             {
//                 path:"watch",
//                 element: <WatchPage />
//             }
//         ]
//     }
// ]);

// const AppLayout = function(){
//     return (
//         <Provider store={store}>
//             <div>
//                 <Header/>
//                 <RouterProvider router={Approuter}/>
//             </div>
//         </Provider>
//     );
// }


import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Body from "./Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import WatchPage from "./pages/WatchPage.js";
import HomePage from "./pages/HomePage.js";
import SearchPage from "./pages/SearchPage.js";

const AppLayout = function() {
    return ( 
    <Provider store = {store}>
         <div>
             <Header />
             <Outlet/>
             {/* <Footer /> */}
         </div>
     </Provider>)
 };

const AppRouter = createBrowserRouter([
    {
        path:"",
        element: <AppLayout/>,
        children:[
            {
                path : "",
                element: <Body/>,
                children:[
                    {
                        path: "/",
                        element: <HomePage/>
                    },
                    {
                        path: "watch",
                        element: <WatchPage />
                    },
                    {
                        path: "results",
                        element: <SearchPage />
                    }
                ]
            },
        ]
    }

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);