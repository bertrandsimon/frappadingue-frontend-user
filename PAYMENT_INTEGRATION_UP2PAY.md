# Documentation - Intégration Paiement Up2Pay

## 📋 Vue d'ensemble

Cette documentation décrit l'intégration du système de paiement Up2Pay entre Next.js (frontend) et PHP (backend OVH). Le système permet de sécuriser les données de paiement en évitant de les exposer dans l'URL.

## 🏗️ Architecture

```
Next.js Frontend → Génère orderId → Appelle /api/order → Ouvre PHP avec orderId
                                                              ↓
PHP Backend (OVH) → Récupère orderId → Appelle /api/order → Génère formulaire Up2Pay
```

## ✅ Ce qui a été fait

### 1. API Route Next.js : `/api/order`

**Fichier :** `pages/api/order.js`

**Fonctionnalité :**
- Reçoit un `orderId` en POST
- Retourne les données de la commande (montant, email, etc.)
- Headers CORS configurés pour autoriser les requêtes depuis PHP
- Logs pour le débogage

**Réponse actuelle (test) :**
```json
{
  "orderId": "TEST-123456",
  "amount": 200.50,
  "email": "test@example.com"
}
```

**URL :** `https://www.frappadingue.net/api/order`

### 2. Page de test : `/payment/test`

**Fichier :** `pages/payment/test.js`

**Fonctionnalité :**
- Génère un `orderId` unique (`TEST-{timestamp}`)
- Appelle `/api/order` pour récupérer le prix
- Affiche le montant et l'orderId
- Ouvre la page PHP avec l'`orderId` dans l'URL

**URL :** `https://www.frappadingue.net/payment/test`

### 3. Pages de résultat de paiement

**Fichiers créés :**
- `pages/PaymentValidatedPage.js` - Paiement validé
- `pages/PaymentCanceledPage.js` - Paiement annulé
- `pages/PaymentRefusedPage.js` - Paiement refusé
- `pages/payment/success.js` - Succès (existante, adaptée)
- `pages/payment/cancel.js` - Annulé (existante, adaptée)
- `pages/payment/failed.js` - Échoué (nouvelle)

Toutes ces pages acceptent les paramètres `ref` et `amount` depuis les query params Up2Pay.

## 🔧 Configuration

### Variables d'environnement

Aucune variable d'environnement requise pour l'instant. L'URL de l'API est codée en dur :
- API Order : `https://www.frappadingue.net/api/order`
- PHP Server : `https://www.tonagotchi.com/paiement-uptopay-frappadingue/formulaire_HMAC.php`

## 🧪 Tests

### Test 1 : API Next.js directement

```bash
curl -X POST https://www.frappadingue.net/api/order \
  -H "Content-Type: application/json" \
  -d '{"orderId":"TEST-123456"}'
```

**Résultat attendu :**
```json
{
  "orderId": "TEST-123456",
  "amount": 200.50,
  "email": "test@example.com"
}
```

### Test 2 : Page de test Next.js

1. Aller sur : `https://www.frappadingue.net/payment/test`
2. Cliquer sur "Payer (Test)"
3. Vérifier :
   - L'orderId s'affiche
   - Le montant s'affiche (200.50€)
   - Une nouvelle fenêtre s'ouvre avec l'URL PHP contenant `?orderId=TEST-...`

### Test 3 : Depuis PHP

Le PHP doit maintenant :
1. Récupérer l'`orderId` depuis `$_GET['orderId']`
2. Appeler `https://www.frappadingue.net/api/order` avec l'`orderId`
3. Utiliser les données retournées pour générer le formulaire Up2Pay

## 📝 Prochaines étapes

### 🔴 Priorité 1 : Connexion à MongoDB

**Objectif :** Remplacer les données de test par de vraies données depuis MongoDB

**Fichier à modifier :** `pages/api/order.js`

**À faire :**
1. Installer/configurer le client MongoDB pour Next.js
2. Créer une fonction `getOrderFromDb(orderId)`
3. Remplacer le code de test par un appel à la base de données

**Exemple de structure :**
```javascript
// pages/api/order.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function getOrderFromDb(orderId) {
  await client.connect();
  const db = client.db('frappadingue');
  const orders = db.collection('orders');
  const order = await orders.findOne({ orderId: orderId });
  return order;
}

// Dans le handler :
const order = await getOrderFromDb(orderId);
if (!order) {
  return res.status(404).json({ error: 'Order not found' });
}
return res.status(200).json(order);
```

**Structure de document MongoDB attendue :**
```javascript
{
  orderId: "TEST-123456",
  amount: 200.50,
  email: "user@example.com",
  billing: {
    firstName: "John",
    lastName: "Doe",
    address1: "123 Main St",
    zipCode: "75001",
    city: "Paris",
    country: "250",
    phone: "0612345678"
  },
  nbProducts: 2,
  items: [...],
  createdAt: ISODate("2024-01-01T00:00:00Z"),
  status: "pending"
}
```

### 🟡 Priorité 2 : Intégration dans le flux de commande réel

**Objectif :** Remplacer la page de test par l'intégration dans le vrai flux de commande

**Fichiers à modifier :**
- `components/shop/CheckoutButton.js` - Bouton de paiement
- `pages/CartPage.js` - Page panier

**À faire :**
1. Créer une commande dans MongoDB avant de rediriger vers le paiement
2. Générer un `orderId` unique (pas `TEST-...`)
3. Stocker toutes les données de la commande dans MongoDB
4. Rediriger vers le PHP avec le vrai `orderId`

**Exemple :**
```javascript
// Dans CheckoutButton.js ou CartPage.js
const handleCheckout = async () => {
  // 1. Créer la commande dans MongoDB
  const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  const order = {
    orderId: orderId,
    amount: cartTotal,
    email: userEmail,
    billing: billingInfo,
    items: cartItems,
    nbProducts: cartItems.length,
    status: 'pending',
    createdAt: new Date()
  };
  
  // Sauvegarder dans MongoDB
  await createOrderInDb(order);
  
  // 2. Rediriger vers le PHP
  window.location.href = `https://www.tonagotchi.com/paiement-uptopay-frappadingue/formulaire_HMAC.php?orderId=${orderId}`;
};
```

### 🟡 Priorité 3 : Gestion des callbacks Up2Pay

**Objectif :** Mettre à jour le statut de la commande après le paiement

**Fichiers à modifier :**
- `pages/api/payment/webhook.js` - Webhook pour les notifications Up2Pay
- `pages/PaymentValidatedPage.js` - Page de succès
- `pages/PaymentCanceledPage.js` - Page d'annulation

**À faire :**
1. Créer un webhook qui reçoit les notifications Up2Pay
2. Mettre à jour le statut de la commande dans MongoDB
3. Envoyer un email de confirmation si le paiement réussit

**Exemple de webhook :**
```javascript
// pages/api/payment/webhook.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { orderId, status, ref, amount } = req.body;
  
  // Mettre à jour la commande dans MongoDB
  await updateOrderStatus(orderId, {
    status: status, // 'paid', 'canceled', 'refused'
    paymentRef: ref,
    paidAmount: amount,
    paidAt: new Date()
  });
  
  return res.status(200).json({ success: true });
}
```

### 🟢 Priorité 4 : Sécurisation

**Objectif :** Sécuriser l'API `/api/order`

**À faire :**
1. Ajouter une authentification (token, API key)
2. Limiter le taux de requêtes (rate limiting)
3. Valider l'origine des requêtes
4. Chiffrer les données sensibles

**Exemple :**
```javascript
// pages/api/order.js
const API_KEY = process.env.API_SECRET_KEY;

export default async function handler(req, res) {
  // Vérifier l'API key
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  // Rate limiting (à implémenter)
  // ...
}
```

### 🟢 Priorité 5 : Amélioration de l'expérience utilisateur

**Objectif :** Améliorer le flux utilisateur

**À faire :**
1. Ajouter un loader pendant le chargement
2. Gérer les erreurs de manière plus élégante
3. Ajouter des messages de confirmation
4. Améliorer le design des pages de résultat

### 🟢 Priorité 6 : Logs et monitoring

**Objectif :** Surveiller les paiements

**À faire :**
1. Logger toutes les transactions
2. Créer un dashboard de monitoring
3. Alerter en cas d'erreur
4. Statistiques de paiement

## 📁 Fichiers créés/modifiés

### Nouveaux fichiers
- `pages/api/order.js` - API pour récupérer les données de commande
- `pages/payment/test.js` - Page de test
- `pages/PaymentValidatedPage.js` - Page paiement validé
- `pages/PaymentCanceledPage.js` - Page paiement annulé
- `pages/PaymentRefusedPage.js` - Page paiement refusé
- `pages/payment/failed.js` - Page paiement échoué
- `components/PaymentValidated.js` - Composant paiement validé
- `components/PaymentCanceled.js` - Composant paiement annulé
- `components/PaymentRefused.js` - Composant paiement refusé
- `components/pages/PaymentValidatedComponentPage.js`
- `components/pages/PaymentCanceledComponentPage.js`
- `components/pages/PaymentRefusedComponentPage.js`

### Fichiers modifiés
- `pages/payment/success.js` - Adapté pour afficher ref et amount
- `pages/payment/cancel.js` - Déjà adapté

## 🔗 URLs importantes

- **Page de test :** `https://www.frappadingue.net/payment/test`
- **API Order :** `https://www.frappadingue.net/api/order`
- **PHP Payment :** `https://www.tonagotchi.com/paiement-uptopay-frappadingue/formulaire_HMAC.php`
- **Succès :** `https://www.frappadingue.net/payment/success?ref=XXX&amount=XXX`
- **Validé :** `https://www.frappadingue.net/PaymentValidatedPage?ref=XXX&amount=XXX`
- **Annulé :** `https://www.frappadingue.net/payment/cancel` ou `/PaymentCanceledPage`
- **Refusé :** `https://www.frappadingue.net/PaymentRefusedPage?ref=XXX&amount=XXX`

## 🐛 Dépannage

### Erreur CORS
- Vérifier que les headers CORS sont présents dans `/api/order.js`
- Vérifier que la requête PHP utilise `Content-Type: application/json`

### Erreur "orderId is required"
- Vérifier que le PHP envoie bien l'`orderId` dans le body JSON
- Vérifier les logs Vercel pour voir ce qui est reçu

### Erreur 404
- Vérifier l'URL de l'API : `https://www.frappadingue.net/api/order`
- Vérifier que le fichier `pages/api/order.js` existe

### Timeout
- Vérifier que le serveur PHP peut joindre Next.js
- Augmenter le timeout dans le PHP si nécessaire

## 📚 Ressources

- Documentation Up2Pay : [Lien vers la doc]
- MongoDB Next.js : https://www.mongodb.com/docs/atlas/driver-connection/nextjs/
- Vercel Logs : Dashboard → Project → Deployments → View Function Logs

## 📞 Support

En cas de problème, vérifier :
1. Les logs Vercel pour `/api/order`
2. Les logs du serveur PHP
3. La console du navigateur
4. Les logs MongoDB (si connecté)

---

**Dernière mise à jour :** 2024-01-XX
**Version :** 1.0.0

