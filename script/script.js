function calculateCoins() {
  const pennies = parseInt(document.getElementById('pennies').value) || 0;
  const nickels = parseInt(document.getElementById('nickels').value) || 0;
  const dimes = parseInt(document.getElementById('dimes').value) || 0;
  const quarters = parseInt(document.getElementById('quarters').value) || 0;

  const PENNY_VALUE = 0.01;
  const NICKEL_VALUE = 0.05;
  const DIME_VALUE = 0.10;
  const QUARTER_VALUE = 0.25;

  const PENNY_WRAP = 50;
  const NICKEL_WRAP = 40;
  const DIME_WRAP = 50;
  const QUARTER_WRAP = 40;

  const totalPennies = pennies * PENNY_VALUE;
  const totalNickels = nickels * NICKEL_VALUE;
  const totalDimes = dimes * DIME_VALUE;
  const totalQuarters = quarters * QUARTER_VALUE;
  const totalAmount = totalPennies + totalNickels + totalDimes + totalQuarters;

  const pennyWraps = Math.floor(pennies / PENNY_WRAP);
  const nickelWraps = Math.floor(nickels / NICKEL_WRAP);
  const dimeWraps = Math.floor(dimes / DIME_WRAP);
  const quarterWraps = Math.floor(quarters / QUARTER_WRAP);

  const pennyLeft = pennies % PENNY_WRAP;
  const nickelLeft = nickels % NICKEL_WRAP;
  const dimeLeft = dimes % DIME_WRAP;
  const quarterLeft = quarters % QUARTER_WRAP;

  document.getElementById('results').innerHTML = `
    <h5><strong>Wrapper Summary</strong></h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Pennies: ${pennyWraps} wrappers, ${pennyLeft} leftover</li>
      <li class="list-group-item">Nickels: ${nickelWraps} wrappers, ${nickelLeft} leftover</li>
      <li class="list-group-item">Dimes: ${dimeWraps} wrappers, ${dimeLeft} leftover</li>
      <li class="list-group-item">Quarters: ${quarterWraps} wrappers, ${quarterLeft} leftover</li>
    </ul>
    <hr>
    <p><strong>Total Value:</strong> $${totalAmount.toFixed(2)}</p>
  `;
}
