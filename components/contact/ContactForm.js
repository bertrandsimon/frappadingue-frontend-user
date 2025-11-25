import { useState, useEffect } from 'react';

function ContactForm() {

  const [events,SetEvents] = useState([]);

  useEffect(() => {
    fetch('https://frappadingue-backend.vercel.app/events/allEvents', {
      cache: 'force-cache',
      next: { revalidate: 3600 }
    })
    .then(res => res.json())
    .then( data => { SetEvents(data.all) } )
  }, []);


  useEffect(() => {
   //console.log('events:', events);
  }, [events]);

  return (
    <form>
    <div className="space-y-12">
      

      <div className="border-b border-white/10 pb-12 mt-12">
        <h2 className="text-base font-semibold leading-7 text-white ">Formulaire de contact</h2>
       
        <p className="mt-1 text-sm leading-6 text-gray-400">Téléphone: 06.28.93.10.50</p>
        <p className="mt-1 text-sm leading-6 text-gray-400">Mail: contact@frappadingue.fr</p>
        <p className="mt-1 text-sm leading-6 text-gray-400">Adresse: 62630 Etaples</p>
        
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
              Nom
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">
              Prénom
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          

          <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
              Course concernée
            </label>
            <div className="mt-2">
            
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6 [&_*]:text-black"
              >
               {events.map( (event) => (<option key={event.name} name={event.name}>{event.name}</option>))}
              </select>
            </div>
          </div>

        

       

          


        </div>
      </div>

      
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm text-normal leading-6 text-white">
        Annuler
      </button>
      <button
        type="submit"
        className="rounded-md bg-[#ffe500] px-3 py-2 text-sm text-normal text-black shadow-sm hover:bg-[#ffe500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6ce00]"
      >
        Envoyer
      </button>
    </div>
  </form>
  );
}

export default ContactForm;
