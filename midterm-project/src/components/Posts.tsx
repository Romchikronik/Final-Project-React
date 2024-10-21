import { Link } from 'react-router-dom';
import { posts } from '../assets/data/posts';

const Posts = () => {
    return (
        <div>
            <h1>All Blog Posts</h1>

            <div className="posts-container">
                {posts.map((post) => (
                    <div key={post.id} className="post-card">
                        <img src={post.image} alt={post.title} />
                        <h3>{post.title}</h3>
                        <p>{post.content.substring(0, 100)}...</p>
                        <Link to={`/post/${post.id}`}>Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
