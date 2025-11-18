import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600">Nous sommes là pour vous aider</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 group">
              <div className="p-4 bg-red-100 rounded-full group-hover:bg-red-600 transition-colors">
                <MapPin className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Adresse</h3>
                <p className="text-gray-600">ANFAPLACE MALL, Casablanca</p>
                <a
                  href="https://www.google.com/maps/place/ANFAPLACE+MALL/@33.5895058,-7.6374731,17z/data=!4m2!3m1!1s0x0:0xb91ed398330cf3cd?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-medium mt-2 inline-block"
                >
                  Voir sur Google Maps →
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="p-4 bg-red-100 rounded-full group-hover:bg-red-600 transition-colors">
                <Mail className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                <a
                  href="mailto:omasport@gmail.com"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  omasport@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="p-4 bg-red-100 rounded-full group-hover:bg-red-600 transition-colors">
                <Phone className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/212700879491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  +212 700 879 491
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8374858772844!2d-7.639662723729705!3d33.58950577333003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb91ed398330cf3cd!2sANFAPLACE%20MALL!5e0!3m2!1sen!2sma!4v1234567890123!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
