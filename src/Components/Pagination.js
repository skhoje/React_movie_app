import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={handlePrevPage}>Previous</button>
      )}
      <span>{currentPage} / {totalPages}</span>
      {currentPage < totalPages && (
        <button onClick={handleNextPage}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
