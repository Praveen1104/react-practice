import React, { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./components/Product";
import { ErrorBoundary } from "react-error-boundary";
import { fallbackRender } from "./components/ErrorBoundary";
import { BrowserRouter, Route, Routes } from "react-router-dom"
const ComponentLazyLoad = React.lazy(() => import("../src/components/Product"));
const PageLazyLoad=React.lazy(()=>import("./pages/ProdutList"))

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>im not error</h1>
      <ErrorBoundary FallbackComponent={fallbackRender}>
        {/* <Suspense fallback={<h1>Loading....</h1>}>
          <ComponentLazyLoad />
        </Suspense> */}
      </ErrorBoundary>

      <BrowserRouter>
       <Suspense fallback={<h1>Page Code Splitting is Rendering</h1>}>
        <Routes>
         
            <Route path="/page" element={<PageLazyLoad />}/>
         
          
        </Routes>
         </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
