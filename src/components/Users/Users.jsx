import React from 'react';
import styleCSS from './Users.module.css';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
      pages.push(i);
    }

  return <div>
    <div>
      {pages.map(p => {
        return <span className={props.currentPage === p && styleCSS.selectedPage}
        onClick={(event) => { props.onPageChanged(p); }}> {p} </span>
      })}
    </div>

    {
      props.data.map(u =>
          <div key={u.id}>
          <span>
           <div>{u.name}</div>
            <div>{u.id}</div>
            <img className={styleCSS.imgItem} src={u.photos.small != null ? u.photos.small : "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"}></img>
            <div>___</div>
          </span>
      </div>)
    }
  </div>
}

export default Users;

//<button className={styleCSS.button} onClick={onAddItem}>CONTACT US</button>