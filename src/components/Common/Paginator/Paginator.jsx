import React from 'react';
import styleCSS from './Paginator.module.css';

let Paginator = ({currentPage, onPageChanged, totalCount, pageSize}) => {
    let pagesCount = Math.ceil(totalCount / pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
      pages.push(i);
    }

  return <div>
      {pages.map(p => {
        return <span className={currentPage === p && styleCSS.selectedPage}
                     onClick={(event) => {onPageChanged(p); }}> {p} </span>
      })}
  </div>
}

export default Paginator;