import VolunteerForm from "./VolunteerForm";

import { CheckIcon } from '@heroicons/react/20/solid'
import Link from "next/link";


function Volunteer() {

  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">



    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-yellow-400">Deviens bénévole !</p>
            <h1 className="mt-2 text-3xl font-light tracking-tight text-white-900 sm:text-4xl">Intègre La Frappateam !</h1>
            <p className="mt-6 text-md font-light text-white-700">
            Rejoins la team Frappadingue en nous accompagnant le jour de la course !

            Ce que l’on te propose ? Participer à une expérience unique, une journée de plaisir en accompagnant nos sportifs d’un jour lors d’une épreuve délirante.
            </p>
          </div>
        </div>
      </div>
      <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
    
        <VolunteerForm></VolunteerForm>
      </div>
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="max-w-xl text-md  font-light text-white-700 lg:max-w-lg">
            <p>
            Au programme : Une ambiance fun et carnavalesque et le verre de l’amitié en fin de journée.
            Pour te remercier, tu recevras Le cadeau Frappadingue TEAM 2023 à l’issue de la manifestation ainsi qu’UNE place pour participer à la Frappadingue de ton choix.
            <br /><br />
            Les missions frappées :
            </p>
            <ul role="list" className="mt-8 space-y-8 text-white-600">
              <li className="flex gap-x-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
                <span>
                Distribution des dossards (samedi/dimanche)
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
                <span>
                Remise des médailles/retrait des puces
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
                <span>
                Surveillance atelier
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
                <span>
                Orientation/signaleurs parcours
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
                <span>
                Distribution des ravitaillements, de la bière
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
                <span>
                Surveillance atelier
                </span>
              </li>
            </ul>
            <p className="mt-8">
            Alors motive toi et inscris toi 🙂
            Si tu as des questions, n’hésite pas à nous écrire à  
            <span className="px-2">
              <Link href="mailto:contact@frappadingue.fr" >
                <a className="hover:text-yellow-400 underline">contact@frappadingue.fr</a>
              </Link>
            </span>
            Si tu es motivé, remplis le formulaire et nous le recevrons directement 🙂
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Volunteer;
