import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../assets/data/posts';

const Post = () => {
    const { id } = useParams<{ id: string }>();
    const post = posts.find((p) => p.id === Number(id));

    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState('');
    const [likes, setLikes] = useState(0);

    if (!post) {
        return <p>Post not found</p>;  // Handle post not found
    }

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} />
            <p>{post.content}</p>

            <button onClick={() => setLikes(likes + 1)}>Like {likes}</button>

            <div>
                <h3>Comments</h3>
                {comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))}

                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment"
                />
                <button onClick={handleAddComment}>Submit</button>
            </div>
        </div>
    );
};

export default Post;