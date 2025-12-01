import { useState } from 'react';
import { useForm } from 'react-hook-form';

function TeamBuildingForm() {
  const [isSent, setIsSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmitHandler = async (data) => {
    try {
      const response = await fetch('/api/teambuilding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          distance: data.distance,
          tshirtOption: data.tshirtOption,
          numberOfPeople: data.numberOfPeople,
          message: data.message,
        }),
      });

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        alert('Une erreur est survenue lors de l\'envoi');
        return;
      }

      const result = await response.json();

      if (response.ok) {
        setIsSent(true);
      } else {
        alert(result.error || 'Une erreur est survenue');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Une erreur est survenue lors de l\'envoi');
    }
  };

  if (isSent) {
    return (
      <div className="border-b border-white/10 pb-12 mt-12">
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-[#ffe500] mb-4">Demande envoyée !</h2>
          <p className="text-white">Votre demande de team building a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
    <div className="space-y-12">
      

      <div className="border-b border-white/10 pb-12 mt-12">
        <h2 className="text-base font-semibold leading-7 text-white ">Formulaire de demande</h2>
       
        <p className="mt-1 text-sm leading-6 text-gray-400">Téléphone: 06.28.93.10.50</p>
        <p className="mt-1 text-sm leading-6 text-gray-400">
          Mail: <a href="mailto:contact@frappadingue.fr" className="text-[#ffe500] hover:underline">contact@frappadingue.fr</a>
        </p>
        
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-white">
              Nom
            </label>
            <div className="mt-2">
              <input
                type="text"
                {...register('firstName', { required: 'Le nom est requis' })}
                id="firstName"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#ffe500] sm:text-sm sm:leading-6"
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-400">{errors.firstName.message}</p>}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-white">
              Prénom
            </label>
            <div className="mt-2">
              <input
                type="text"
                {...register('lastName', { required: 'Le prénom est requis' })}
                id="lastName"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#ffe500] sm:text-sm sm:leading-6"
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-400">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                {...register('email', { 
                  required: 'L\'email est requis',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email invalide'
                  }
                })}
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#ffe500] sm:text-sm sm:leading-6"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white">
              Téléphone
            </label>
            <div className="mt-2">
              <input
                type="tel"
                {...register('phone')}
                id="phone"
                autoComplete="tel"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#ffe500] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="distance" className="block text-sm font-medium leading-6 text-white">
              Choix de la distance
            </label>
            <div className="mt-2">
              <select
                id="distance"
                {...register('distance', { required: 'La distance est requise' })}
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#ffe500] sm:text-sm sm:leading-6 [&_*]:text-black"
              >
                <option value="">Sélectionner une distance</option>
                <option value="6 Kms">6 Kms</option>
                <option value="12 Kms">12 Kms</option>
              </select>
              {errors.distance && <p className="mt-1 text-sm text-red-400">{errors.distance.message}</p>}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="tshirtOption" className="block text-sm font-medium leading-6 text-white">
              Option t-shirt
            </label>
            <div className="mt-2">
              <select
                id="tshirtOption"
                {...register('tshirtOption', { required: 'L\'option t-shirt est requise' })}
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#ffe500] sm:text-sm sm:leading-6 [&_*]:text-black"
              >
                <option value="">Sélectionner une option</option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
              {errors.tshirtOption && <p className="mt-1 text-sm text-red-400">{errors.tshirtOption.message}</p>}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="numberOfPeople" className="block text-sm font-medium leading-6 text-white">
              Nombre de personnes
            </label>
            <div className="mt-2">
              <input
                type="number"
                {...register('numberOfPeople', { 
                  required: 'Le nombre de personnes est requis',
                  min: { value: 1, message: 'Le nombre minimum est 1' },
                  max: { value: 200, message: 'Le nombre maximum est 200' }
                })}
                id="numberOfPeople"
                min="1"
                max="200"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#ffe500] sm:text-sm sm:leading-6"
              />
              {errors.numberOfPeople && <p className="mt-1 text-sm text-red-400">{errors.numberOfPeople.message}</p>}
            </div>
          </div>

          <div className="sm:col-span-6">
            <label htmlFor="message" className="block text-sm font-medium leading-6 text-white">
              Message (optionnel)
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                {...register('message')}
                rows={4}
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#ffe500] sm:text-sm sm:leading-6"
              />
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
        disabled={isSubmitting}
        className="rounded-md bg-[#ffe500] px-3 py-2 text-sm text-normal text-black shadow-sm hover:bg-[#e6ce00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6ce00] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Envoi...' : 'Envoyer'}
      </button>
    </div>
  </form>
  );
}

export default TeamBuildingForm;

