import { useMemo, useState } from "react";

import "./App.css";
import VirtualList from "../components/VirtualList";

function App() {
  const [count, setCount] = useState(0);
  const items = useMemo(
    () =>
      Array.from({ length: 100_000 }, (_, i) => ({
        id: i + 1,
        label: `Item ${i + 1}`,
      })),
    []
  );
  console.log(items);
  return (
    <>
      <VirtualList items={items} />
    </>
  );
}

export default App;
