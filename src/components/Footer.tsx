export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/oma sport.png" alt="Oma Sport" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-400">
              Votre partenaire de confiance pour les vêtements de sport au Maroc.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#produits" className="text-gray-400 hover:text-white transition-colors">Produits</a></li>
              <li><a href="#equipe" className="text-gray-400 hover:text-white transition-colors">Équipe</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Livraison</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Retours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>ANFAPLACE MALL</li>
              <li>Casablanca, Maroc</li>
              <li>omasport@gmail.com</li>
              <li>+212 700 879 491</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Oma Sport. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
