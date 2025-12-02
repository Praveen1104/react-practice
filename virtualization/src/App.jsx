import { useMemo, useState } from "react";

import "./App.css";
import VirtualList from "../components/VirtualList";

function App() {
  const [count, setCount] = useState(0);
  const items = useMemo(
    () =>
      Array.from({ length: 100000 }, (_, i) => ({
        id: i + 1,
        label: `Item ${i + 1}`,
      })),
    []
  );
  console.log(items);
  return (
    <>
      <div className="p-8">
        <h1>Custom Virtualization</h1>
        <VirtualList items={items} height={500} />
      </div>
    </>
  );
}

export default App;
