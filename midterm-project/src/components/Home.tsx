import { Link } from 'react-router-dom';
import { posts } from '../assets/data/posts';

const Home = () => {
    const recentPosts = posts.slice(0, 3);

    return (
        <div>
            <h1>Welcome to the Blog!</h1>
            <p>Here are some recent blog posts...</p>

            <div className="posts-container">
                {recentPosts.map((post) => (
                    <div key={post.id} className="post-card">
                        <img src={post.image} alt={post.title}/>
                        <h3>{post.title}</h3>
                        <p>{post.content.substring(0, 100)}...</p>
                        <Link to={`/post/${post.id}`}>Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;