import React, { useState } from "react";
import "../Home/Home.css";

const TableComponent = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleContent = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="h1-tag">Balaji N</h1>
        <p className="p-tag">
          A highly organised and hard working individual looking for a
          responsible position to gain practical experience, seeking an
          entry-level position to begin my career in a high-level professional
          environment. To secure a position that offers a challenging work
          environment, where I can actively contribute to my interest and also
          build upon my present knowledge and experience.
        </p>
        {!showMore && (
          <a className="a-tag" href="#about" onClick={handleToggleContent}>
            Learn More
          </a>
        )}
        {showMore && (
          <div className="more-content">
           
            <a className="a-tag" href="#about" onClick={handleToggleContent}>
              Show Less
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TableComponent;
