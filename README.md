## Énoncé

**Objectif:** Mettre en place un système de précommande (préorder) sur le site Dawn, similaire à celui utilisé par le site Polène.

**Description:**

- **Concept du Preorder:** Comme sur le site Polène, le preorder est similaire à une commande classique. La différence est que le client reçoit sa commande plus tard. Le processus de commande reste inchangé. En revanche il faut informer le client que le produit est en précommande et qu'il recevra sa commande plus tard.
- **Back Office (BO) Shopify:**
    - Le marchand doit pouvoir marquer un produit ou variante comme étant "pre-order" depuis le Back Office de Shopify.
    - Le marchand doit pouvoir définir une date de disponibilité pour le produit en précommande.
    - Note : utiliser les fonctionnalités natives de Shopify (pas d'application tierce)
- **Affichage sur le Site:**
    - Si un produit est en préorder, cela doit être clairement indiqué au client sur plusieurs sections du site :
        - Fiche produit
        - Collections
        - Caroussels
        - Panier
- **Compatibilité avec les Variantes:**
    - La fonctionnalité preorder doit être compatible avec les variants. Une seule variante d’un produit à multi-variantes peut être en preorder.
- **Gestion du Stock:**
    - Un produit en preorder doit avoir du stock. S'il n'y a plus de stock, il doit passer en rupture de stock.
- **Gestion des Commandes:**
    - Les commandes contenant un produit en préorder doivent être taguées "preorder" dans le Back Office Shopify. Possibilité d'utiliser une app gratuite du store
- **Communication avec le Client:**
    - L'information concernant la précommande doit être envoyée au client dans le mail de confirmation de commande.

**Taches**

- [ ] Etude de la fonctionnalité Préorder sur le site Polène
- [ ] Prendre en compte le sujet et faire une 1ère proposition de solution technique
- [ ] Mettre en place tous les outils de dev + un repo Github + store de test avec produits + dawn
- [ ] Implémenter sur la feature
- [ ] Prendre en compte le multi-langue