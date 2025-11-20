import React, { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./components/Product";
import { ErrorBoundary } from "react-error-boundary";
import { fallbackRender } from "./components/ErrorBoundary";
const ComponentLazyLoad = React.lazy(() => import("../src/components/Product"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>im not error</h1>
      <ErrorBoundary FallbackComponent={fallbackRender}>
        <Suspense fallback={<h1>Loading....</h1>}>
          <ComponentLazyLoad />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
