
function Stats() {

  const stats = [
    { id: 1, name: 'Des départements représentés', value: '100 %' },
    { id: 2, name: 'De déguisements', value: '95 %' },
    { id: 3, name: 'De femmes', value: '35 %' },
    { id: 4, name: 'De moyenne d age', value: '33 ans' },
    { id: 5, name: 'Tonnes de matériels', value: '40' },
    { id: 6, name: 'Participants au total', value: '150 000' },
  ]
  

  return (
    
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight yellow sm:text-4xl">Quelques chiffres</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
          Motivation, Fun attitude, Persévérance, Endurance, Solidarité et aussi
          </p>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col bg-white/10 p-8 items-center justify-center">
              <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  
  );
}

export default Stats;
