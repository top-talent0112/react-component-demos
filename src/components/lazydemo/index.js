import React from 'react';
import LazyLoad from 'react-lazyload';
import data from './data';
import './style.css';

const Loading = () => (
  <div className="post loading">
    <h5> Loading.... </h5>
  </div>
)

const Post = ({id, title, body}) => (
  <div className="post">
    <LazyLoad 
      once={true}
      placeholder={<Loading />}
    >
      <div className="post-img">
        <img src={`https://picsum.photos/id/${id}/200/200`} alt="Not found" />
      </div>
    </LazyLoad>  
    <div className="post-body">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  </div>
)

const LazyDemo = () => (
    <div className="lazy-demo">
      <h2>Lazy demo</h2>
      <div className="post-container">
        {data.map(post => (
          <LazyLoad 
            key={post.id}
            height={100}
            offset={[-100, 100]}
            placeholder={<Loading />}>
            <Post key={post.id} {...post} />
          </LazyLoad>
        ))}
      </div>
    </div>
)

export default LazyDemo;
