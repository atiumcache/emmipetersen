import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gumroad-pink/5 px-4">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-gumroad-pink/80 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Oops! The page you're looking for doesn't exist. 
          Let's get you back on track.
        </p>
        <Link 
          to="/" 
          className="relative w-[200px] h-[50px] bg-black text-white font-medium text-lg flex items-center justify-center group mx-auto transition-all duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 bg-gumroad-yellow transition-transform duration-300 group-hover:translate-y-[3px] group-hover:translate-x-[3px] border border-black z-0" />
          <span className="absolute inset-0 bg-gumroad-green border border-black z-10" />
          <span className="absolute inset-0 bg-black transition-transform duration-300 group-hover:translate-y-[-3px] group-hover:translate-x-[-3px] border border-black z-20 flex items-center justify-center">
            <span className="relative z-10">
              Go Home
            </span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NotFound