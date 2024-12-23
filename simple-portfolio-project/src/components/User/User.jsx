import {useParams} from 'react-router-dom'

const User = () => {
  const {id} = useParams()
  return (
    <div className="bg-orange-500 text-black text-3xl text-center py-5">
        {(id) ? <p>User: {id}</p> : <p>User</p> }
    </div>
  )
}

export default User