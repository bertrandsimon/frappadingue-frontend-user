import VolunteerForm from "./VolunteerForm";

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

function Volunteer() {

  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
    </div>
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-yellow-300">Deviens bénévole !</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">Intègre La Frappateam !</h1>
            <p className="mt-6 text-xl leading-8 text-white-700">
            Rejoins la team Frappadingue en nous accompagnant le jour de la course !

            Ce que l’on te propose ? Participer à une expérience unique, une journée de plaisir en accompagnant nos sportifs d’un jour lors d’une épreuve délirante.
            </p>
          </div>
        </div>
      </div>
      <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        {/* <img
          className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
          alt=""
        /> */}
        <VolunteerForm></VolunteerForm>
      </div>
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="max-w-xl text-base leading-7 text-white-700 lg:max-w-lg">
            <p>
            Au programme : Une ambiance fun et carnavalesque et le verre de l’amitié en fin de journée.
            Pour te remercier, tu recevras Le cadeau Frappadingue TEAM 2023 à l’issue de la manifestation ainsi qu’UNE place pour participer à la Frappadingue de ton choix.
            <br /><br />
            Les missions frappées :
            </p>
            <ul role="list" className="mt-8 space-y-8 text-white-600">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-yellow-300" aria-hidden="true" />
                <span>
                Distribution des dossards (samedi/dimanche)
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-yellow-300" aria-hidden="true" />
                <span>
                Remise des médailles/retrait des puces
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-yellow-300" aria-hidden="true" />
                <span>
                Surveillance atelier
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-yellow-300" aria-hidden="true" />
                <span>
                Orientation/signaleurs parcours
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-yellow-300" aria-hidden="true" />
                <span>
                Distribution des ravitaillements, de la bière
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-yellow-300" aria-hidden="true" />
                <span>
                Surveillance atelier
                </span>
              </li>
            </ul>
            <p className="mt-8">
            Alors motive toi et inscris toi 🙂
            Si tu as des questions, n’hésites pas à nous écrire à contact@frappadingue.fr
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
