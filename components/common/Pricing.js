//import styles from '../../styles/Pricing.module.css';
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Pricing() {

  const frequencies = [
    { value: 'noOption', label: 'Sans option', priceSuffix: 'Euros' },
    { value: 'shirt', label: 'Avec t-shirt (+6€)', priceSuffix: 'Euros' },
    { value: 'insurance', label: 'Avec assurance (+10€)', priceSuffix: 'Euros' },
    { value: 'all', label: ' Avec t-shirt et assurance (+16€)', priceSuffix: 'Euros' },
  ]
  const tiers = [
    {
      name: 'FORMAT S : 5 - 6 KMS',
      id: 'tier-freelancer',
      href: '#',
      price: { noOption: '38', shirt: '44', insurance: '48', all:'54' },
      description: 'INSCRIPTION INDIVIDUELLE OU GROUPE',
      features: ['Inscription à la course', 'Dossard', 'Ravitaillement', 'Médaille'],
      mostPopular: false,
    },
    {
      name: 'FORMAT L : 10 - 12 KMS',
      id: 'tier-startup',
      href: '#',
      price: { noOption: '48', shirt: '54', insurance: '58', all:'64' },
      description: 'INSCRIPTION INDIVIDUELLE OU GROUPE',
      features: ['Inscription à la course', 'Dossard', 'Ravitaillement', 'Médaille'],
      mostPopular: true,
    },
    {
      name: 'SUR PLACE',
      id: 'tier-enterprise',
      href: '#',
      price: { noOption: '', shirt: '', insurance: '', all:'' },
      description: '6 kms : 50€ / 12 kms : 60€',
      features: ['Inscription à la course', 'Dossard', 'Ravitaillement', 'Médaille'],
      mostPopular: false,
    },
  ]

  const [frequency, setFrequency] = useState(frequencies[0])
  
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className=" font-semibold leading-7 text-yellow-400 uppercase">Nos tarifs</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            2 formats de courses adaptés à tous
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          1 course, 2 challenges : 1 départ commun
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-4 gap-x-1 rounded-full bg-yellow-400 p-1 text-center text-xs font-semibold leading-5 text-black"
          >
            <RadioGroup.Label className="sr-only">Paiement</RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(checked ? 'bg-yellow-400' : '', 'cursor-pointer rounded-full px-2.5 py-1')
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-yellow-400' : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-yellow-400 px-2.5 py-1 text-xs font-semibold leading-5 text-black">
                    Top
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                {tier.price[frequency.value] !== '' && (
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>
                    <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
              </p>
               )}
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-yellow-400 text-black shadow-sm hover:bg-yellow-300 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 uppercase'
                )}
              >
                Inscription
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>

   
  );
}

export default Pricing;
