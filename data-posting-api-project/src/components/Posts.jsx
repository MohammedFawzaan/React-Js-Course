import { useEffect, useState } from "react";
import { deleteMethod, getMethod } from "../api/PostApi";
import Form from "./Form";

const Posts = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({});

  const getPostData = async () => {
    try {
      const res = await getMethod();
      if (res.status === 200) {
        setData(res.data);
      } else {
        console.error('Failed to fetch posts:', res.status);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteMethod(id);
      if (res.status === 200) {
        const newUpdatedPost = data.filter((element) => element.id !== id);
        setData(newUpdatedPost);
      } else {
        console.error('Failed to delete:', res.status);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleUpdatePost = (element) => {
    setUpdateData(element);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen py-0">
      <div className="max-w-full mx-auto shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Posts</h1>
        <Form setData={setData} updateData={updateData} setUpdateData={setUpdateData} />
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {data.map((element) => {
            const { id, body, title } = element;
            return (
              <li
                key={id}
                className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:shadow-xl transition-shadow duration-300 transform hover:cursor-pointer">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2 text-sm">{body}</p>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleUpdatePost(element)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Posts;