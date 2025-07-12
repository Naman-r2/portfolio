import Lottie from 'lottie-react'
import heroAnim from '../../public/animations/hero.json'

export default function Hero() {
  return (
  <section className="h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-700 to-purple-700 text-white p-8">
    
    <div className="w-40 h-40 mb-6">
      <Lottie animationData={heroAnim} loop />
    </div>
    <br/>
    <h1 className="text-6xl md:text-5xl font-extrabold mt-4">Naman Sharma</h1>
    <p className="text-lg md:text-xl mt-2 max-w-xl">
      Python | C++ | Data Structures & Algorithms | AWS | PostgreSQL | FastAPI
    </p>

  </section>
);


}
