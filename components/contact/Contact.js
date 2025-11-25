
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import ContactForm from './ContactForm';

function Contact() {

  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">



    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-[#ffe500]">Contactez nous</p>
            <h1 className="mt-2 text-3xl font-light tracking-tight text-white-900 sm:text-4xl">Nous avons la réponse !</h1>
            <p className="mt-6 text-xl leading-8 text-white-700">
            AVANT DE RÉDIGER UN MAIL : MERCI DE VÉRIFIER QUE LA RÉPONSE N’EST PAS DANS LA FAQ
            </p>
          </div>
        </div>
      </div>
      <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">

       
        <ContactForm></ContactForm>

      </div>
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="max-w-xl text-base leading-7 text-white-700 lg:max-w-lg">
            <p>
            Avant de rédiger votre requête, assurez-vous:
            <br /><br />
           
            </p>
            <ul role="list" className="mt-8 space-y-8 text-white-600">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-[#ffe500]" aria-hidden="true" />
                <span>
                Préciser la course concernée
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-[#ffe500]" aria-hidden="true" />
                <span>
                Si cela concerne votre absence dans une liste d’inscrits vérifiez que vous n’avez pas inversé NOM / PRENOM
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-[#ffe500]" aria-hidden="true" />
                <span>
                Que la date de la mise à jour est postérieure à votre date d’inscription et donc qu’elle a été prise en compte
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-[#ffe500]" aria-hidden="true" />
                <span>
                Si cela concerne un changement de vague: nous donner votre NOM / PRENOM la vague dans laquelle vous êtes et celle que vous voulez rejoindre avec le nom d’équipe
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-[#ffe500]" aria-hidden="true" />
                <span>
                Nous ne pouvons effectuer des recherches par nom d’équipe, nous fournir NOM / PRENOM
                </span>
              </li>
         
            </ul>


            <p className="mt-8">
              <p className='text-1xl yellow pb-4'>ANNULATIONS / REMBOURSEMENTS</p>
              <p>Vous nous indiquerez avant tout que vous n’avez pas changé de compte bancaire afin que l’on puisse re-créditer votre compte  via la carte bancaire ayant servi à l’inscription.
              <br /><br />
              Pour annuler votre participation nous donner nom / prénom /course.
              <br /><br />
              Attention l’annulation est possible lorsque vous avez opté pour l’assurance annulation</p>
            </p>


            <p className="mt-8">
              <p className='text-1xl yellow pb-4'>CHANGEMENTS DE NOM</p>
              <p>A moins de 30 jours de l’événement les changements de nom ne sont plus admis et si vous n’avez pas opté pour l’assurance, votre inscription est perdue.
              <br /><br />
              Procédure pour effectuer un changement de nom par mail:
              <br /><br />
              Avoir opté pour l’assurance changement de nom lors de l’inscription (5€)
              <br /><br />
              Accord du cédant + Nom, prénom
              Nom, prénom, adresse mail, date de naissance, email, numéro de téléphone, nom d’équipe, contact en cas d’urgence du repreneur.
              <br /><br />
              Vous recevrez ensuite un mail de confirmation.</p>
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Contact;
