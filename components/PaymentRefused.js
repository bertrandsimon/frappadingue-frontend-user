function PaymentRefused({ ref, amount }) {
  const formattedAmount = amount ? (parseInt(amount) / 100).toFixed(2) : null;

  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto max-w-2xl text-center">
        <div className="py-12">
          <h1 className="text-3xl font-semibold text-[#ffe500] mb-4">Paiement refusé</h1>
          <p className="text-white text-lg mb-4">Votre paiement a été refusé.</p>
          {ref && (
            <p className="text-gray-400 text-sm mb-2">
              Référence: {ref}
            </p>
          )}
          {formattedAmount && (
            <p className="text-gray-400 text-sm">
              Montant: {formattedAmount} €
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentRefused;

