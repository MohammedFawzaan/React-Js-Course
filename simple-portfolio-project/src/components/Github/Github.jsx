// import { useEffect, useState } from "react"
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData();

    //   const [data, setData] = useState("");
    //   useEffect(() => {
    //     let url =  fetch('https://api.github.com/users/MohammedFawzaan')
    //     url.then((response) => {
    //         return response.json();
    //     }).then((data) => {
    //         setData(data);
    //     })
    //   }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <h1> {data.login} </h1>
            <span>
                GitHub Followers: {data.followers}
            </span>
            <img src={data.avatar_url} alt="Logo" />
        </div>
    )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/MohammedFawzaan');
    return response.json();
}