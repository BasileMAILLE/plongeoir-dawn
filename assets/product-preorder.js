document.addEventListener("DOMContentLoaded", function () {
  console.log("Product-preorder.js loaded");

  const variantSelectors = document.querySelector("[name='id']");

  variantSelectors.addEventListener("change", function (e) {
    console.log("Variant selected", e.target.value);
  });
});