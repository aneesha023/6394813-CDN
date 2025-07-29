import React, { Component } from 'react';

class Posts extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
      .catch(err => console.error("Error fetching posts:", err));
  }

  componentDidCatch(error, info) {
    alert("Something went wrong: " + error);
  }

  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.slice(0, 10).map(post => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
