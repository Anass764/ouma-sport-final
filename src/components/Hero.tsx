export default function Hero() {
  return (
    <section id="accueil" className="relative bg-gradient-to-br from-red-600 to-red-800 text-white overflow-hidden perspective-1000">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slideUp animate-pulse3D">
            Bienvenue chez <span className="text-white drop-shadow-lg">OMA SPORT</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slideUp animation-delay-200">
            Votre destination premium pour les vêtements de sport au Maroc
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-200 animate-slideUp animation-delay-400">
            Qualité professionnelle • Prix imbattables • Livraison rapide
          </p>
          <a
            href="#produits"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 shadow-2xl animate-slideUp animation-delay-600 animate-rotate3D hover:animate-none"
          >
            Découvrir nos produits
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
