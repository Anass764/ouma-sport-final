const teamMembers = [
  { name: 'AYMEN ER-RARHMI', role: 'developer', image: '/team/AYMEN ER-RARHMI.jpg' },
  { name: 'SAAD ATIF', role: 'CEO', image: '/team/SAAD ATIF.jpg' },
  { name: 'OUSSAMA BOUKALKHA', role: 'Responsable Logistique', image: '/team/OUSSAMA BOUKALKHA.jpg' },
  { name: 'REDA TALIBI', role: 'Chef Marketing', image: '/team/reda.jpg' },
  { name: 'ADAM HERRAZ', role: 'Responsable Qualité', image: '/team/adam.jpg' }
];

export default function Team() {
  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Notre Équipe</h2>
          <p className="text-xl text-gray-600">Les experts passionnés derrière Oma Sport</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-slideUp animate-rotate3D perspective-1000"
              style={{
                animationDelay: `${index * 100}ms`,
                transform: 'perspective(1000px)'
              }}
            >
              <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200">
                    <span className="text-6xl font-bold text-red-300">?</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 text-center transform group-hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-red-600 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
