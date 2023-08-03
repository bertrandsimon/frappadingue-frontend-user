import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Faq() {

  const faqInfos = [
    {title:`Comment s'inscrire ?`, 
    tag: 'inscription',
    bulletPoints: [
      'Clique sur Courses',
      'Sélectionne la ville de ton choix',
      'Sélectionne ta distance 5/6km ou 10/12km',
      'Remplis le formulaire',
      'Procède au paiement',
      'De notre côté tout est ok, à toi de commencer ton entrainement !',
    ],
    },
    {title:'Et en équipe ?',  
    tag: 'inscription',
    bulletPoints: [
      'Clique sur Courses',
      'Sélectionne la ville de ton choix',
      'Sélectionne ta distance 5/6km ou 10/12km',
      'Remplis le formulaire',
      'Renseigne un nom d’équipe identique à tes amis afin que vous soyez tous automatiquement réunis',
      'Vous ne choisissez pas votre vague de départ, les vagues sont constituées dans les dernières semaines avant l’événement. En effet, cela nous permet une grande souplesse dans le regroupement des équipes',
      'Tu te sens fort et désires faire un chrono et donc partir en vague 1, indique en nom d’équipe ELITE ou ajoute le nom à ton nom d’équipe (par ex: « les fantassins vague 1 » ou les « fantassins vague élite »)',
      'Tu as une heure de préférence pour partir, indique en nom d’équipe VAGUE xx ou ajoute le nom à ton nom d’équipe (par ex: « les fantassins vague 10h »)',
      'De notre côté tout est ok, à toi de commencer ton entrainement !',
      'Sache qu’à tout moment, ton (ou tes ) potes pourront intégrer ton équipe (simplement en renseignant le même nom d’équipe que toi) et vous partirez ainsi ensemble.',
    ],
    },
    {title:'Comment inscrire une entreprise',  
    tag: 'inscription',
    bulletPoints: [
      'Samedi (J-1) : 15h – 19h',
      'Dimanche (jour J) : à partir de 8h, jusqu’à 12h (prévoir 1h/1h30 avant l’heure de votre vague)',
    ],
    },
    {title:`Le nom d'équipe`, 
    tag: 'inscription',
    bulletPoints: [
      'Samedi (J-1) : 15h – 19h',
      'Dimanche (jour J) : à partir de 8h, jusqu’à 12h (prévoir 1h/1h30 avant l’heure de votre vague)',
    ],
    },
    {title:'Que comprend mon inscription ?',  
    tag: 'inscription',
    bulletPoints: [
      'Samedi (J-1) : 15h – 19h',
      'Dimanche (jour J) : à partir de 8h, jusqu’à 12h (prévoir 1h/1h30 avant l’heure de votre vague)',
    ],
    },
    {title:`Ai-je besoin d'un certificat médical ?`, 
    tag: 'certificat',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Pourquoi le certificat médical est nécessaire ?', 
    tag: 'certificat',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Quel certificat médical ou quelle license ?', 
    tag: 'certificat',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Quand est le retrait des dossards ?', 
    tag: 'retrait',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Documents nécessaires ?', 
    tag: 'retrait',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Un retrait groupé ?', 
    tag: 'retrait',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Annulation avec assurance', 
    tag: 'annulation',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Annulation sans assurance', 
    tag: 'annulation',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Changement de nom', 
    tag: 'annulation',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Lieu / heure de départ', 
    tag: 'jour',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Equipement', 
    tag: 'jour',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Vestiaire / Consigne', 
    tag: 'jour',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Douches', 
    tag: 'jour',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Toilettes', 
    tag: 'jour',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Durée épreuve', 
    tag: 'jour',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Parkings', 
    tag: 'jour',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Des courbatures ?', 
    tag: 'apres',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Photos / Vidéos', 
    tag: 'apres',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
  ]


  return (
    <div className="w-full px-4 pt-16">
   
    <div className="mx-auto w-full max-w-md rounded-2xl bg-black p-2">

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-white-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>La frappadingue qu'est que c'est?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            la Frappadingue c’est une course à obstacles, un événement fun et sportif aux allures de carnaval. Une manifestation atypique, populaire et spectaculaire pour les petits comme les grands.
            Un événement accessible à tous pour découvrir le territoire de manière ludique.
            La première course à obstacles de France depuis 2010
            Du sport oui, mais avec une touche de fun dans l’effort
            Rassembler 20 000 sportifs et non sportifs chaque année
            Une course sans chrono
            40% de femmes
            Une course qui vous fera découvrir les atouts du territoire à travers un parcours atypique
            En marchant, en courant mais surtout en rigolant
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Pour qui ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Hommes et femmes de plus de 16 ans
            La Frappadingue est accessible à tous, tous les obstacles sont contournables, et vous pouvez tout faire en marchant !
            CONSULTER LE RÈGLEMENT
            Attention pour les 16-18 ans une autorisation parentale obligatoire
            Pour les mineurs (7/-12ans) une frappajeune est organisée la veille de chaque Frappadingue. Rdv sur la page de l’événement !
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Comment s'inscrire ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Clique sur l’onglet « inscriptions »
            Tu seras dirigé sur la plateforme d’inscription FRAPPADINGUE

            Sélectionne la ville de ton choix
            Sélectionne ta distance 5/6km ou 10/12km
            Remplis le formulaire
            Procède au paiement
            De notre côté tout est ok, à toi de commencer ton entrainement !
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Et en équipe ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Clique sur l’onglet « inscriptions »
            Tu seras dirigé sur la plateforme d’inscription FRAPPADINGUE

            Sélectionne la ville de ton choix
            Sélectionne ta distance 5/6km ou 10/12km
            Sélectionne le nombre de place pour ton équipe
            Remplis le formulaire
            Renseigne un nom d’équipe identique à tes amis afin que vous soyez tous automatiquement réunis;
            LES VAGUES, ce qu’il faut savoir
            Vous ne choisissez pas votre vague de départ, les vagues sont constituées dans les dernières semaines avant l’événement. En effet, cela nous permet une grande souplesse dans le regroupement des équipes
            Tu te sens fort et désires faire un chrono et donc partir en vague 1, indique en nom d’équipe ELITE ou ajoute le nom à ton nom d’équipe (par ex: « les fantassins vague 1 » ou les « fantassins vague élite »)
            Tu as une heure de préférence pour partir, indique en nom d’équipe VAGUE xx ou ajoute le nom à ton nom d’équipe (par ex: « les fantassins vague 10h »)
            De notre côté tout est ok, à toi de commencer ton entrainement !
            Sache qu’à tout moment, ton (ou tes ) potes pourront intégrer ton équipe (simplement en renseignant le même nom d’équipe que toi) et vous partirez ainsi ensemble.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Comment inscrire une entreprise ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Si paiement par CB

            Dans l’onglet inscription

            Choisis la ville, le kilométrage et le nombre de places
            Remplis le formulaire, renseigne correctement le nom d’équipe et utilise le paiement sécurisé.
            Commence l’entrainement !
            Si paiement par chèque

            Demande de devis à contact@frappadingue.fr
            Infos à nous communiquer : adresse de facturation, mode de règlement, nombre d’inscrits, ville sélectionnées, choix du kilométrage, tee-shirt ou non
            Validation du devis en retour d’email + envoie de la facture
            Règlement : chèque ou virement (ordre : association La Salicorne)
            

            Dès réception du paiement, nous t’enverrons des éléments pour que les membres de ton équipe puissent finaliser leurs inscriptions en ligne via des codes spécifiques ou nous te demanderons le fichier des inscrits;
            Commence l’entrainement !
            Si tu as des questions : 06 28 93 10 50
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Le nom d'équipe ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Le nom d’équipe permet de vous réunir dans une même vague de départ.

            Vous pouvez le modifier par email avec vos nom/prénom/nom d’équipe et préciser l’événement concerné.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Que comprend mon inscription ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Ta participation à la Frappadingue
            1 ou 2 ravitaillements avec des surprise selon le kilométrage sélectionné
            La bière à l’arrivée
            La médaille Finisher
            La logistique nécessaire à l’organisation
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Besoin d'un certificat médical ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Oui
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Pourquoi le certificat médical est il nécessaire ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            La Frappadingue est un événement sportif et nous devons nous assurer que ta condition physique te permette l’effort requis. L’épreuve comporte notamment des passages d’obstacles de plus de 2m, du cardio, de l’eau 🙂 alors il est nécessaire d’être en forme !
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Quel certificat médical ou quelle license ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Certificat médical de non-contre indication à la pratique de la course à pied en compétition de moins d’un an.

            Certificat médical type :  MODÈLE DE CERTIFICAT MÉDICAL

            Une licence sportive pourra être acceptée. (nous fournir une photocopie).
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Quand est le retrait des dossards ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Samedi (J-1) : 15h – 19h

            Dimanche (jour J) : à partir de 8h, jusqu’à 12h (prévoir 1h/1h30 avant l’heure de votre vague
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Documents nécessaires ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Un certificat médical (type ou course à pied)

            La copie d’une licence sportive en cours de validité

            Une pièce d’identité

            Une attestation si tu es mineur !
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Un retrait groupé ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Apporte la copie de la pièce d’identité et le certif de chacun 🙂
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Annulation avec assurance ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Le remboursement est possible: sans justificatif à 100% jusqu’au samedi minuit qui précède l’événement (J-8)

            Le remboursement entre la date indiquée ci-dessus et le  jeudi minuit (J-3) sera fait à 50%, après cette date plus aucun remboursement ne sera pris en compte

            Toute demande de remboursement ne sera acceptée que si elle est faite par mail à contact@frappadingue.fr

            Pour les conditions de l’assurance annulation, tu peux consulter: LE RÈGLEMENT
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Annulation sans assurance ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Tu n’as pas opté pour l’assurance ANNULATION au moment de ton inscription.

            L’inscription n’est pas remboursable, tu peux demander par email un changement de nom pour un montant de 5€
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Changement de nom ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Sur place

            Accord cédant

            nom-prénom du repreneur

            Certificat médical du repreneur

            Montant : 5€
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Lieu / heure de départ ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Retrouve les infos pratiques sur la page de l’événement, bouton tout en haut : INFOS PRATIQUES

            Lieu précis à retrouver sur la page de l’événement

            Horaires : vagues – entrée dans le sas 30 min avant l’heure de votre vague – échauffement 15 min avant l’heure de votre vague
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Equipement ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Les gants, type mitaine vélo, sont toujours appréciables et vous les apprécierez dans les rampings ou les grimper de corde.

            Eviter les déguisements susceptibles de se charger d’eau, surtout si le parcours comporte une traversée d’eau.

            Privilégiez un legging pour limiter les égratignures
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Vestiaire / consigne ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Pas de vestiaires

            Consigne gratuite à disposition sur le village Frappadingue

            Possibilité de laisser un sac fermé ou vos clés de voiture
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Douches ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Oui, avec un système de rampes de douches…

            Cependant, on ne garantit pas qu’il y aura de l’eau chaude pour tout le monde!!!
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Toilettes ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Sur le village départ/arrivée mais pas sur le parcours 🙂
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Temps de l'épreuve ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            En moyenne 2h30/3h00
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Parkings ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Les parkings (gratuits) seront référencés sur les infos pratiques – sur chaque page événement
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Des courbatures ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Evidemment !
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <span>Photos  / Vidéos ?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-black`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Sur la page de l’événement via un lien en haut de page

            Sur la page facebook dans la semaine suivant la manifestation
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>


    </div>
  </div>
  );
}

export default Faq;
