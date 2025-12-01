import React, { useMemo, useRef, useState } from "react";

const ITEM_HEiGHT = 35;
const OVERSCAN = 5;
function VirtualList({ items, height }) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  const totalHeight = items.length * ITEM_HEiGHT;

  const handleScroll = (e) => {
    //console.log(e.target.scrollTop);
    setScrollTop(e.target.scrollTop);
  };

  const { start, end } = useMemo(() => {
    const start = Math.floor(scrollTop / ITEM_HEiGHT) - OVERSCAN;
    const visibleCount = Math.ceil(height / ITEM_HEiGHT) + OVERSCAN * 2;
    const safeStart = Math.max(0, start);
    const safeEnd = Math.min(items.length - 1, safeStart + visibleCount);
    return { start: safeStart, end: safeEnd };
  }, [scrollTop, height, items.length]);
  console.log(start);
  console.log(end);
  const visibleItems = items.slice(start, end);
  const paddingTop = start * ITEM_HEiGHT;
  const paddingBottom = totalHeight - paddingTop - visibleItems.length * 2;
  console.log(visibleItems);
  return (
    <div
      style={{
        height,
        border: "2px solid ",
        overflowY: "auto",
        position: "relative",
      }}
      onScroll={handleScroll}
      ref={containerRef}
    >
      <div style={{ paddingTop: paddingTop, paddingBottom: paddingBottom }}>
        above
        {visibleItems.map((ele, i, items) => {
          return (
            <div
              style={{
                height: ITEM_HEiGHT,
                display: "flex",
                // backgroundColor: "orange",
                padding: "2px",
                border: "2px solid",
              }}
            >
              <span key={i}>{ele?.label}</span>;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VirtualList;
