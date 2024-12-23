import { useEffect, useState } from "react";
import { postMethod, putMethod } from "../api/PostApi";

/* eslint-disable react/prop-types */
function Form({ setData, updateData, setUpdateData }) {
    const [addData, setaddData] = useState({
        title: "",
        body: "",
    });

    const [error, setError] = useState("");

    let isEmpty = Object.keys(updateData).length === 0;

    function handleChange(event) {
        setaddData((currData) => {
            const obj = { ...currData };
            obj[event.target.name] = event.target.value;
            return obj;
        });
    }

    useEffect(() => {
        if (updateData && Object.keys(updateData).length > 0) {
            setaddData({
                title: updateData.title || "",
                body: updateData.body || ""
            });
        }
    }, [updateData]);

    async function addPostData() {
        if (addData.title === "" || addData.body === "") {
            setError("Both title and body are required.");
            return;
        }

        try {
            const res = await postMethod(addData);
            if (res.status === 201) {
                setData((prevData) => [...prevData, res.data]);
                setaddData({ title: "", body: "" });
                setError("");
            }
        } catch (error) {
            console.error("Error adding post:", error);
            setError("Failed to add post. Please try again.");
        }
    }

    async function updatePostData() {
        if (addData.title === "" || addData.body === "") {
            setError("Both title and body are required.");
            return;
        }
        try {
            const res = await putMethod(updateData.id, addData);
            if (res.status === 200) {
                setData((prevData) => prevData.map((element) => 
                    element.id === updateData.id ? res.data : element
                ));
                setaddData({ title: "", body: "" });
                setUpdateData({});
                setError("");
            }
        } catch (error) {
            console.error("Error updating post:", error);
            setError("Failed to update post. Please try again.");
            setUpdateData({});
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setError(""); // Clear error on form submit
        if (isEmpty) {
            addPostData();
        } else {
            updatePostData();
        }
    }

    return (
        <div className="mb-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={addData.title}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    placeholder="Body"
                    name="body"
                    value={addData.body}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    {isEmpty ? "Add" : "Edit"}
                </button>
            </form>
        </div>
    );
}

export default Form;