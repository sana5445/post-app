import React, { useEffect, useState } from 'react';
import PostNavbar from './PostNavbar';
import axios from 'axios';

const ViewAllPost = () => {
  const [postData, changePostData] = useState([]);

  const fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      changePostData(response.data);
    }).catch();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: '#FAF0E6', minHeight: '100vh', paddingBottom: '30px' }}>
      <PostNavbar />

      <div className="container mt-4">
        <h2 style={{ color: 'black', textAlign: 'center' }}>ALL POST</h2>

        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>User ID</th>
              <th>Post ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {postData.map((value, index) => (
              <tr key={index}>
                <td>{value.userId}</td>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllPost;
