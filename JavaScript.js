function handleProductChange(product, isIncrease) {
  const productInput = document.getElementById(product + '-count');
  const productCount = parseInt(productInput.value);
  let newProductCount = productCount; 
  if (isIncrease) {
    newProductCount = productCount + 1;
  } else if (productCount > 0) {
    newProductCount = productCount - 1;
  }
  productInput.value = newProductCount;
  let productTotal = 0;
  if (product == 'phone'){
    productTotal =  newProductCount * 59; 
  }
  if( product == 'case'){
    productTotal = newProductCount * 1219;
  }
  document.getElementById(product + '-total').innerText = '$' + productTotal;

  calculateTotal();
}


function calculateTotal(){
  const caseInput = document.getElementById('case-count');
  const caseCount = parseInt(caseInput.value);

const phoneInput = document.getElementById('phone-count');
const phoneCount = parseInt(phoneInput.value);

const totalPrice = caseCount * 1219 + phoneCount * 59;

console.log(totalPrice);

document.getElementById('total-price').innerText = '$' + totalPrice;
}