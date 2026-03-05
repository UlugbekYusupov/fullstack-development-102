function calculateTotalPrice(prices) {
  let total = prices.reduce((sum, price) => sum + price, 0);
  let itemCount = prices.length;

  let discount = 0;

  if (itemCount >= 5) {
    discount = 0.20;
  } else if (itemCount >= 3) {
    discount = 0.10;
  }

  let finalPrice = total - (total * discount);

  return finalPrice;
}

console.log(calculateTotalPrice([10, 20, 30])); 
// 60 → 10% discount → 54

function checkPasswordStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return "Weak";
  if (score === 3) return "Medium";
  return "Strong";
}
console.log(checkPasswordStrength("hello")); // Weak
console.log(checkPasswordStrength("Hello123")); // Medium
console.log(checkPasswordStrength("Hello123!")); // Strong

function atmWithdraw(amount) {
  if (amount % 10 !== 0) {
    return "Error: Amount must be multiple of 10";
  }

  let bills = [100, 50, 20, 10];
  let result = {};

  for (let bill of bills) {
    result[bill] = Math.floor(amount / bill);
    amount %= bill;
  }

  return result;
}

console.log(atmWithdraw(130));
