import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../../redux/actions";
import leftIcon from "../../img/chevron-left-solid.svg";
import rightIcon from "../../img/chevron-right-solid.svg";
import styles from "./PaginationBar.module.css";

function PaginationBar() {
  const dispatch = useDispatch();
  const { pages, current } = useSelector((state) => state);

  let pagination;

  if (pages.length <= 5) {
    pagination = pages.map((page, i) => (
      <button
        className={current === i && styles.current}
        onClick={() => dispatch(setCurrent(i))}
        key={i + 1}
      >
        {i + 1}
      </button>
    ));
  } else if (current < 2) {
    pagination = (
      <div className={styles.container}>
        <button
          className={current === 0 && styles.current}
          onClick={() => dispatch(setCurrent(0))}
        >
          1
        </button>
        <button
          className={current === 1 && styles.current}
          onClick={() => dispatch(setCurrent(1))}
        >
          2
        </button>
        <button
          className={current === 2 && styles.current}
          onClick={() => dispatch(setCurrent(2))}
        >
          3
        </button>
        <button>...</button>
        <button onClick={() => dispatch(setCurrent(pages.length - 1))}>
          {pages.length}
        </button>
      </div>
    );
  } else if (current === 2) {
    pagination = (
      <div className={styles.container}>
        <button
          className={current === 0 && styles.current}
          onClick={() => dispatch(setCurrent(0))}
        >
          1
        </button>
        <button
          className={current === 1 && styles.current}
          onClick={() => dispatch(setCurrent(1))}
        >
          2
        </button>
        <button
          className={current === 2 && styles.current}
          onClick={() => dispatch(setCurrent(2))}
        >
          3
        </button>
        <button onClick={() => dispatch(setCurrent(3))}>4</button>
        <button>...</button>
        <button onClick={() => dispatch(setCurrent(pages.length - 1))}>
          {pages.length}
        </button>
      </div>
    );
  } else if (current < pages.length - 3) {
    pagination = (
      <div className={styles.container}>
        <button onClick={() => dispatch(setCurrent(0))}>1</button>
        <button>...</button>
        <button onClick={() => dispatch(setCurrent(current - 1))}>
          {current}
        </button>
        <button
          className={styles.current}
          onClick={() => dispatch(setCurrent(current))}
        >
          {current + 1}
        </button>
        <button onClick={() => dispatch(setCurrent(current + 1))}>
          {current + 2}
        </button>
        <button>...</button>
        <button onClick={() => dispatch(setCurrent(pages.length - 1))}>
          {pages.length}
        </button>
      </div>
    );
  } else if (current < pages.length - 2) {
    pagination = (
      <div className={styles.container}>
        <button onClick={() => dispatch(setCurrent(0))}>1</button>
        <button>...</button>
        <button onClick={() => dispatch(setCurrent(current - 1))}>
          {current}
        </button>
        <button
          className={styles.current}
          onClick={() => dispatch(setCurrent(current))}
        >
          {current + 1}
        </button>
        <button onClick={() => dispatch(setCurrent(current + 1))}>
          {current + 2}
        </button>
        <button onClick={() => dispatch(setCurrent(pages.length - 1))}>
          {pages.length}
        </button>
      </div>
    );
  } else if (current + 1 === pages.length - 1) {
    pagination = (
      <div className={styles.container}>
        <button onClick={() => dispatch(setCurrent(0))}>1</button>
        <button>...</button>
        <button onClick={() => dispatch(setCurrent(current - 1))}>
          {current}
        </button>
        <button
          className={styles.current}
          onClick={() => dispatch(setCurrent(current))}
        >
          {current + 1}
        </button>
        <button onClick={() => dispatch(setCurrent(current + 1))}>
          {current + 2}
        </button>
      </div>
    );
  } else {
    pagination = (
      <div className={styles.container}>
        <button onClick={() => dispatch(setCurrent(0))}>1</button>
        <button>...</button>
        <button onClick={() => dispatch(setCurrent(current - 2))}>
          {current - 1}
        </button>
        <button onClick={() => dispatch(setCurrent(current - 1))}>
          {current}
        </button>
        <button
          className={styles.current}
          onClick={() => dispatch(setCurrent(current))}
        >
          {current + 1}
        </button>
      </div>
    );
  }

  const changeCurrent = (str) => {
    switch (str) {
      case "right":
        current < pages.length - 1 && dispatch(setCurrent(current + 1));
        break;
      case "left":
        current > 0 && dispatch(setCurrent(current - 1));
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.PaginationBar}>
      <button onClick={() => changeCurrent("left")}>
        <img width="10px" src={leftIcon} alt="right" />
      </button>
      {pagination}
      <button onClick={() => changeCurrent("right")}>
        <img width="10px" src={rightIcon} alt="right" />
      </button>
    </div>
  );
}

export default PaginationBar;

/* 

///////////////// LOGICA PAGINATION BAR///////////////

if pages = 5, current = any
    ---> 1, 2, 3, 4, 5

if pages > 5, current = 1
    ---> 1, 2, 3, ..., n

if pages > 5, current = 2
    ---> 1, 2, 3, ..., n

if pages > 5, current = 3
    ---> 1, 2, 3, 4, ..., n

if pages > 5, current = 4
    ---> 1, ...,  3, 4, 5, ..., n

if pages > 5, current = 5
    ---> 1, ...,  4, 5, 6, ..., n


resumen:
CASO 1 --- if pages <=5 , listar todas las paginas.

else if, depende de current:
CASO 2 --- if current 1 o 2: ---> 1, 2, 3, ..., n
CASO 3 --- if current 3: ---> 1, 2, 3, 4, ..., n
------------------------------------------- hsta aca esta bien

CASO 4    if (c < n - 2) {
            1 , ... , c-1 , c , c+1 , ... , n
CASO 5    } else if (c < n - 1) {
            1 , ... , c-1 , c , c+1 , n
CASO 6    } else {
            1 , ... , c-1 , c , n
CASO 7    }
    

c = 97
n = 100
---> 1, ... , 96 , 97 , 98 , ... , 100

c = 98
n = 100
---> 1, ... , 97 , 98 , 99 , 100

c = 99
n = 100
---> 1 , ... , 98, 99, 100


 */
