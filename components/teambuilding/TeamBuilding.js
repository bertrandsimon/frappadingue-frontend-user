
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import TeamBuildingForm from './TeamBuildingForm';

function TeamBuilding() {

  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">



    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-[#ffe500]">Team Building</p>
            <h1 className="mt-2 text-3xl font-light tracking-tight text-white-900 sm:text-4xl">Organisez votre événement !</h1>
            <p className="mt-6 text-xl leading-8 text-white-700">
            Remplissez le formulaire ci-contre pour organiser un événement team building avec Frappadingue.
            </p>
          </div>
        </div>
      </div>
      <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">

       
        <TeamBuildingForm></TeamBuildingForm>

      </div>
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="max-w-xl text-base leading-7 text-white-700 lg:max-w-lg">
            <p>
            Frappadingue propose des événements team building sur mesure pour votre entreprise ou groupe.
            <br /><br />
           
            </p>
            <ul role="list" className="mt-8 space-y-8 text-white-600">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-[#ffe500]" aria-hidden="true" />
                <span>
                Deux distances disponibles : 6 Kms ou 12 Kms
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-[#ffe500]" aria-hidden="true" />
                <span>
                Option t-shirt personnalisé disponible
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-[#ffe500]" aria-hidden="true" />
                <span>
                Groupes de 1 à 200 personnes
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-[#ffe500]" aria-hidden="true" />
                <span>
                Parcours adapté à tous les niveaux
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-[#ffe500]" aria-hidden="true" />
                <span>
                Animation et encadrement professionnel
                </span>
              </li>
         
            </ul>


            <p className="mt-8">
              <p className='text-1xl yellow pb-4'>INFORMATIONS</p>
              <p>Pour toute demande spécifique ou personnalisation, n'hésitez pas à nous contacter directement.
              <br /><br />
              Téléphone: 06.28.93.10.50
              <br /><br />
              Email: <a href="mailto:contact@frappadingue.fr" className="text-[#ffe500] hover:underline">contact@frappadingue.fr</a></p>
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default TeamBuilding;

