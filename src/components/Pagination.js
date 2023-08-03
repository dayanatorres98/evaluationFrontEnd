// Componente para realizar la paginacion de los 30 usuarios 

import React from 'react';

function Pagination({ pageNumbers, currentPage, handleClick, pageRange }) {
  return (
    <nav className='pagination-nav'>
      <ul className='pagination'>
        <li className='page-item'>
          <button className='page-link' onClick={() => handleClick('prev')}>
            Anterior
          </button>
        </li>
        {pageNumbers.slice(pageRange[0] - 1, pageRange[1]).map(number => (
          <li key={number} className='page-item'>
            <button
              className={`page-link ${currentPage === number ? 'active' : ''}`}
              onClick={() => handleClick(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li className='page-item'>
          <button className='page-link' onClick={() => handleClick('next')}>
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
