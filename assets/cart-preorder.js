console.log("cart-preorder.js loaded");

const checkoutForm = document.getElementById("cart");
checkoutForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const { storefrontApiKey } = window;

  const cart = await getCart();
  if (cart.items) {
    const query = `
            {
                nodes(
                    ids: [${cart.items
                      .map(
                        (item) => `"gid://shopify/ProductVariant/${item.id}"`
                      )
                      .join(",")}]
                ) {
                    ... on ProductVariant {
                    id
                    metafield(key: "availability_date", namespace: "preorder") {
                        value
                    }
                    }
                }
            }
        `;
    const response = await fetch(
      `${window.Shopify.routes.root}api/2025-01/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": storefrontApiKey,
        },
        body: JSON.stringify({ query }),
      }
    )
      .then((data) => data.json())
      .catch((error) => console.error("Error : ", error));
    const preorderItemsDate = response.data.nodes.reduce((acc, item) => {
      if (item.metafield && item.metafield.value) {
        const variantId = item.id.split("/").pop();
        acc[variantId] = item.metafield.value;
      }
      return acc;
    }, {});

    const formsData = {
      items: cart.items.map((item) => {
        const preorderDateInput = preorderItemsDate[item.id];
        const date = new Date(preorderDateInput);
        const formattedDate = new Intl.DateTimeFormat(window.localeString, {
          month: "long",
          day: "numeric",
        }).format(date);
        const preorderDateInputLabel = `${window.variantStrings.preorderPropertyLabel.replace(
          "[date]",
          formattedDate
        )}`;

        return {
          id: item.id,
          quantity: item.quantity,
          properties: {
            ...item.properties,
            ...(preorderDateInput && {
              "_preorder-date-input": preorderItemsDate[item.variant_id],
              [window.variantStrings.preorderPropertyTitle]: preorderDateInputLabel,
            }),
          },
        };
      }),
    };

    try {
      await clearCart();
      await refillCart(formsData);
    } catch (error) {
      console.error("Error : ", error);
    }

    window.location.href = "/checkout";
  }
});
const getCart = async () =>
  await fetch(window.Shopify.routes.root + "cart.js").then((data) =>
    data.json()
  );

const clearCart = async () =>
  await fetch(window.Shopify.routes.root + "cart/clear.js", {
    method: "POST",
  });

const refillCart = async (formData) =>
  await fetch(window.Shopify.routes.root + "cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((data) => data.json());
