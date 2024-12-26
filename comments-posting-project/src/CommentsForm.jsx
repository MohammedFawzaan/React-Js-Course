/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const CommentsForm = ({ addComment }) => {
    // formData: Object of the form details 
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
        id: uuidv4(),
    });

    // Load formData from localStorage if available
    useEffect(() => {
        const storedFormData = localStorage.getItem("formData");
        if (storedFormData) {
            setFormData(JSON.parse(storedFormData));
        }
    }, []);

    // handling all input changes in one function using formData which is an object
    let handleInputChange = (event) => {
        setFormData((currData) => {
            const obj = { ...currData };
            obj[event.target.name] = event.target.value;
            // Stringify and save updated formData to localStorage
            localStorage.setItem("formData", JSON.stringify(obj));
            return obj;
        });
    };

    // handling Submit when Form submits this function works
    let handleSubmit = (event) => {
        event.preventDefault();
        // validation
        if (!formData.username || !formData.remarks || formData.rating < 1 || formData.rating > 5) {
            alert("Please fill out all fields");
            return;
        }
        // newComment created
        const newComment = { ...formData, id: uuidv4() };
        // adding newComment to comments array
        addComment(newComment);
        // Load comments from localStorage
        const storedComments = localStorage.getItem("comments");
        //  If available push the new comment
        const existingComments = storedComments ? JSON.parse(storedComments) : [];
        existingComments.push(newComment);
        // setting formData to default
        setFormData({
            username: "",
            remarks: "",
            rating: 5,
        });
        // Stringify and save the comment to localStorage
        localStorage.setItem("comments", JSON.stringify(existingComments));
    };

    return (
        <div>
            <h1 className="mt-10 font-bold text-3xl text-center">Comments Rendering</h1>
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto mt-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block font-bold text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="remarks" className="block font-bold text-gray-700">
                            Remarks
                        </label>
                        <textarea
                            name="remarks"
                            id="remarks"
                            rows={3}
                            placeholder="Add your remarks"
                            value={formData.remarks}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="rating" className="block font-bold text-gray-700">
                            Rating
                        </label>
                        <input
                            type="number"
                            name="rating"
                            id="rating"
                            min={1}
                            max={5}
                            value={formData.rating}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                        Add Comment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommentsForm;