import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'reactstrap';
import { getAllPosts } from '../../Redux/Actions/AsyncAction';
import ModalWindow from './ModalWindow';
import OnePost from './OnePost';
import SearchForm from './SearchForm';

function Posts() {
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [users]);
  return (
    <div>
      <div className="btnAndSearch">
        <ModalWindow />
        <SearchForm />
      </div>
      {posts.length > 0
        ? (
          <Row>

            {posts.map((el) => <OnePost key={el.id} id={el.id} title={el.title} text={el.text} />)}

          </Row>
        )
        : (
          <div>
            <h2>Posts are not found</h2>
          </div>
        )}
    </div>
  );
}

export default Posts;
