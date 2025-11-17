import { useState } from "react";
import "./App.css";
import explorer from "./data/folderData"; // initial folder structure
import Folder from "./components/Folder"; // component to render folders/files
import useTraverseTree from "./hooks/use-traverse-tree"; // custom hook for DFS

export default function App() {
  // State to hold the current folder structure
  const [explorerData, setExplorerData] = useState(explorer);

  // Get the insertNode function (DFS logic) from the custom hook
  const { insertNode } = useTraverseTree();

  // 📌 This handles when user adds a file/folder
  const handleInsertNode = (folderId, item, isFolder) => {
    console.log(folderId, item, isFolder);

    // Call DFS insert function -> returns updated tree
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    // Update state with new tree
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      {/* Pass data + handler to Folder component */}
      <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  );
}
