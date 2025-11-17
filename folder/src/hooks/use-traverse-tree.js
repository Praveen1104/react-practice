// Custom hook that returns tree traversal helpers
const useTraverseTree = () => {
  // Function to insert a new node (file/folder) into the tree
  const insertNode = (tree, folderId, name, isFolder) => {
    // ✅ Base case: If the current node matches the folderId and is a folder
    if (tree.id === folderId && tree.isFolder) {
      return {
        ...tree, // Keep everything else the same
        items: [
          {
            id: Date.now().toString(), // Unique ID for new node
            name: name.trim(), // Remove spaces around name
            isFolder, // Boolean → true = folder, false = file
            items: [], // New nodes always start with empty children
          },
          ...tree.items, // Keep existing items
        ],
      };
    }

    // ✅ Recursive case: Traverse children if not found yet
    return {
      ...tree, // Keep current node same
      items: tree.items.map((child) => {
        // 🔥 FIX: Must RETURN insertNode, otherwise undefined!
        return insertNode(child, folderId, name, isFolder);
      }),
    };
  };

  return { insertNode };
};

export default useTraverseTree;
