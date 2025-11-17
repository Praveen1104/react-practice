// Import external CSS for styling the pagination component
import "./Pagination.css";

// Import useState hook from React to manage component state
import { useState } from "react";

// Pagination component accepts two props:
// - items: the array of data/products to paginate
// - pageSize: number of items to show per page
function Pagination({ items, pageSize }) {
  // State to track the current active page (starting from 1)
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages based on items length and pageSize
  const totalPages = Math.ceil(items.length / pageSize);

  // Function to get only the items for the current page
  const getPageItems = () => {
    const start = (currentPage - 1) * pageSize; // Calculate starting index
    return items.slice(start, start + pageSize); // Slice array for current page
  };

  // Function to change page
  const goTopage = (page) => {
    console.log(page); // Debug: log the page being clicked
    // Prevent going out of bounds
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page); // Update current page state
  };

  return (
    // Block: pagination wrapper
    <div className="pagination">
      {/* Element: grid container for product cards */}
      <div className="pagination__grid">
        {/* Map over current page items and render a card for each */}
        {getPageItems()?.map((product) => (
          <div className="pagination__card" key={product?.id}>
            {/* Product image */}
            <img
              src={product?.thumbnail} // optional chaining to avoid errors if thumbnail is undefined
              alt={product.title} // accessibility: alt text for image
              className="pagination__card-image"
            />

            {/* Product title */}
            <h4 className="pagination__card-title">{product.title}</h4>
          </div>
        ))}
      </div>

      {/* Element: pagination controls (Prev, page numbers, Next) */}
      <div className="pagination__controls">
        {/* Previous page button */}
        <button
          className="pagination__button"
          onClick={() => goTopage(currentPage - 1)} // Go to previous page
          disabled={currentPage === 1} // Disable on first page
        >
          Prev
        </button>

        {/* Page number buttons */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            className={`pagination__button ${
              currentPage === i + 1 ? "pagination__button--active" : "" // Modifier class for active page
            }`}
            key={i} // Unique key required by React
            onClick={() => goTopage(i + 1)} // Go to the clicked page
          >
            {i + 1} {/* Display page number */}
          </button>
        ))}

        {/* Next page button */}
        <button
          className="pagination__button"
          onClick={() => goTopage(currentPage + 1)} // Go to next page
          disabled={currentPage === totalPages} // Disable on last page
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Export the component so it can be imported in App.js or other components
export default Pagination;
