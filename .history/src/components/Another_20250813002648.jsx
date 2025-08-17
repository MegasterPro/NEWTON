export default function Another() {
    return (
      <section className="another-section p-6 space-y-12">
        {/* Clubs */}
        <div className="clubs grid md:grid-cols-2 gap-8">
          <span className="flex items-center space-x-4">
            <img
              src="/images/club-sport.jpg"
              alt="Club Sportif"
              className="w-20 h-20 rounded-full object-cover"
            />
            <p className="text-lg">
              Nos clubs sportifs encouragent l’esprit d’équipe et la performance.
            </p>
          </span>
          <span className="flex items-center space-x-4">
            <img
              src="/images/club-science.jpg"
              alt="Club Scientifique"
              className="w-20 h-20 rounded-full object-cover"
            />
            <p className="text-lg">
              Le club scientifique stimule la curiosité et l’innovation.
            </p>
          </span>
        </div>
  
        {/* Professeurs */}
        <div className="professeurs">
          <h2 className="text-2xl font-bold mb-4">Notre équipe pédagogique</h2>
          <p className="text-gray-700 leading-relaxed">
            Composée de professeurs qualifiés et passionnés, notre équipe accompagne
            chaque élève vers la réussite avec un suivi personnalisé.
          </p>
        </div>
  
        {/* Participation aux cours & culture générale */}
        <div className="participation-cours-cultureG">
          <h2 className="text-2xl font-bold mb-4">Cours et culture générale</h2>
          <p className="text-gray-700 leading-relaxed">
            Nos programmes allient excellence académique et ouverture culturelle.
            Des ateliers, conférences et sorties éducatives complètent les cours
            traditionnels.
          </p>
        </div>
  
        {/* Cadre éducatif */}
        <div className="le-cadre-educatif">
          <h2 className="text-2xl font-bold mb-4">Un cadre propice à l’apprentissage</h2>
          <p className="text-gray-700 leading-relaxed">
            L’école offre un environnement calme et motivant, avec des installations
            modernes et des espaces verts pour favoriser l’épanouissement des élèves.
          </p>
        </div>
      </section>
    );
  }
  