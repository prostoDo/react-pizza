import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";

function Pagination({ currentPage, onChangePage }) {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={8}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
