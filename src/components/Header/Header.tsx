import React from 'react'
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';


const Header = () => {

  const dispatch = useDispatch();
  
  return (
    <div className="header">
      <div className="header-left">
        <h1>大喜利掲示板</h1>
      </div>
      <div className="header-right">
      </div>
    </div>
  );
}
export default Header;