document.addEventListener("DOMContentLoaded", function () {
  console.log("product-preorder.js loaded");
  console.log(variants_metafields)

  const variantSelectors = document.querySelector("[name='id']");
  const preorderMessage = document.getElementById("preorder-message");

  if (!variantSelectors) return;

  variantSelectors.addEventListener("change", function (e) {
    if (variants_metafields[e.target.value]) {
      let selectedVariant = variants_metafields[e.target.value];
      let availabilityDate = selectedVariant.preorder.availability_message;

      preorderMessage.innerText = availabilityDate;
      preorderMessage.style.display = "block";
    } else {
      preorderMessage.style.display = "none";
    }
  }); 

});

