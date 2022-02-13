import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { clearPosts } from '../../Redux/Actions/Actions';
import { getLogout } from '../../Redux/Actions/AsyncAction';

function Header() {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const delHandler = () => {
    dispatch(getLogout());
    dispatch(clearPosts([]));
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src="https://evernote.com/img/logo/evernote/primary.svg" alt="" /></Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {!user.name
                ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/signup">Registration</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/signin">Login</Link>
                    </li>
                  </>
                )
                : (
                  <>
                    <li className="nav-item" aria-current="page" style={{ lineHeight: '2.5', color: 'gray' }}>
                      Hello
                      {' '}
                      {user.name}
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/" onClick={() => delHandler()}>Logout</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/posts">Posts</Link>
                    </li>
                  </>
                )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
