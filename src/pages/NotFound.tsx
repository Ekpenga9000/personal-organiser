import {Link} from 'react-router-dom'; 

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-600 mb-4">404</h1>
      <p className="text-2xl text-gray-600">Page Not Found</p>
      <Link to="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  )
}

export default Notfound