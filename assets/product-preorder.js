document.addEventListener("DOMContentLoaded", function () {
  const variantSelectors = document.querySelector("[name='id']");
  const preorderMessage = document.getElementById("preorder-message");
  const buyButton = document.querySelector("[name='add'] span");
  const preOrderButtonMessage = window.variantStrings.preorderButton;
  const preorderInput = document.getElementById("preorder-date-input");
  const preorderLabelInput = document.getElementById("preorder-date-input-label");
  
  if (!variantSelectors) return;
  updatePreorderDate(variantSelectors.value);
  console.log(preorderInput, preorderLabelInput)

  function updatePreorderDate(variantId) {
    const date = window.preorder_availability_date[variantId];
    preorderInput.value = date || "";
    preorderLabelInput.value = window.preorder_availability_message[variantId] || "";
  }


  variantSelectors.addEventListener("change", function (e) {
    updatePreorderDate(e.target.value);
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

