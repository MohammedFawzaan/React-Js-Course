import { useState, useEffect } from "react";
import CommentsForm from "./CommentsForm";

const Comments = () => {
    let [comments, setComments] = useState([]); // array of objects

    // Load comments from localStorage on component mount
    useEffect(() => {
        const storedComments = localStorage.getItem("comments");
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, []); // Only runs once, when the component mounts

    function addComment(comment) {
        // setting newState: comment in array of object
        setComments((currComments) => {
            return [...currComments, comment];
        });
    }

    // Delete comment functionality
    function deleteComment(commentId) {
        // Remove the comment from the comments array
        const updatedComments = comments.filter(comment => comment.id !== commentId);
        setComments(updatedComments);

        // Save the updated list of comments to localStorage
        localStorage.setItem("comments", JSON.stringify(updatedComments));
    }

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <CommentsForm addComment={addComment} />
            <div className="max-w-2xl mx-auto mt-8 space-y-4">
                {comments.map((object) => (
                    <div
                        key={object.id}
                        className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500">
                        <h4 className="text-lg font-semibold text-gray-800">{object.username}</h4>
                        <p className="text-gray-600">{object.remarks}</p>
                        <span className="text-yellow-500 font-bold">⭐ {object.rating}/5</span>
                        <button
                            onClick={() => deleteComment(object.id)}
                            className="ml-5 text-red-500 mt-2 hover:text-red-700 transition">
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;