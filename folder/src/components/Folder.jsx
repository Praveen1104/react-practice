import { useState } from "react";

function Folder({ explorer, handleInsertNode }) {
  // State for expand/collapse folder
  const [expand, setExpand] = useState(false);

  // State to show input field when adding new file/folder
  const [isInputVisible, setIsInputVisible] = useState(false);

  // Track whether user is creating a folder (true) or file (false)
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);

  /**
   * Handles the click on "Folder+" or "File+" buttons
   * - Expands the folder (so we see children)
   * - Shows the input box
   * - Sets what type of item we are creating (folder/file)
   */
  const handleNewClick = (e, isFolder) => {
    e.stopPropagation(); // prevent parent expand toggle
    setExpand(true);
    setIsInputVisible(true);
    setIsCreatingFolder(isFolder);
  };

  /**
   * Handles adding a new item when user presses "Enter"
   * - Calls `handleInsertNode` from parent
   * - Hides the input box afterwards
   */
  const handleAddItem = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      handleInsertNode(explorer.id, e.target.value, isCreatingFolder);
      setIsInputVisible(false); // close input after successful add
    }
  };

  return (
    <div style={{ marginTop: 5 }}>
      {explorer.isFolder ? (
        <>
          {/* ================= FOLDER NODE ================= */}
          <div className="folder" onClick={() => setExpand(!expand)}>
            <span>📁 {explorer.name}</span>
            <div>
              {/* Add new folder/file buttons */}
              <button onClick={(e) => handleNewClick(e, true)}>Folder+</button>
              <button onClick={(e) => handleNewClick(e, false)}>File+</button>
            </div>
          </div>

          {/* ================= CHILDREN ================= */}
          <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
            {/* Input field for creating new file/folder */}
            {isInputVisible && (
              <div className="inputContainer">
                <span>{isCreatingFolder ? "📁" : "📄"}</span>
                <input
                  type="text"
                  className="inputContainer_input"
                  autoFocus
                  onKeyDown={handleAddItem} // Add item on Enter
                  onBlur={() => setIsInputVisible(false)} // Hide on blur
                />
              </div>
            )}

            {/* Recursive rendering of children */}
            {explorer.items.map((exp) => (
              <Folder
                key={exp.id}
                explorer={exp}
                handleInsertNode={handleInsertNode}
              />
            ))}
          </div>
        </>
      ) : (
        // ================= FILE NODE =================
        <span className="file">📄 {explorer.name}</span>
      )}
    </div>
  );
}

export default Folder;
