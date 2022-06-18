import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <div>{status}</div>
    </div>

  );
}

export default Categories;
