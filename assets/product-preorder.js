document.addEventListener("DOMContentLoaded", function () {
  console.info("product-preorder.js loaded");

  const variantSelectors = document.querySelector("[name='id']");
  const preorderMessage = document.getElementById("preorder-message");
  const buyButton = document.querySelector("[name='add'] span");
  const preOrderButtonMessage = window.variantStrings.preorderButton;

  if (!variantSelectors) return;

  variantSelectors.addEventListener("change", function (e) {
    if (window.preorder_availability_message[e.target.value]) {
      let availabilityDate = window.preorder_availability_message[e.target.value];
      preorderMessage.innerText = availabilityDate;
      preorderMessage.style.display = "block";
      setTimeout(() => {
        buyButton.innerText = preOrderButtonMessage;
      }
      , 1);
    } else {
      preorderMessage.style.display = "none";
    }
  }); 

});

