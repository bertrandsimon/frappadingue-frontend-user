import CartComponentPage from "../components/pages/CartComponentPage";
import SEO from '../components/utilities/SEO';

function CartPage() {
  return (
    <>
      <SEO
        title="Panier"
        description="Votre panier Frappadingue. Finalisez votre inscription aux courses à obstacles."
        url="/CartPage"
        noindex={true}
      />
      <CartComponentPage />
    </>
  );
}

export default CartPage;
