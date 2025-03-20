document.addEventListener("DOMContentLoaded", function () {
  console.info("product-preorder.js loaded");

  const variantSelectors = document.querySelector("[name='id']");
  const preorderMessage = document.getElementById("preorder-message");
  const buyButton = document.querySelector("[name='add'] span");
  const preOrderButtonMessage = window.variantStrings.preorderButton;

  if (!variantSelectors) return;

  variantSelectors.addEventListener("change", function (e) {
    console.log("variant changed");
    if (variants_metafields[e.target.value]) {
      let selectedVariant = variants_metafields[e.target.value];
      let availabilityDate = selectedVariant.preorder.availability_message;

      preorderMessage.innerText = availabilityDate;
      preorderMessage.style.display = "block";
      console.log(buyButton.innerText)
      buyButton.innerText = preOrderButtonMessage;
      console.log(buyButton.innerText)
    } else {
      preorderMessage.style.display = "none";
    }
  }); 

});

