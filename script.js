 // Step 1: Select all price elements
  const priceElements = document.querySelectorAll('.prices');

  // Step 2: Calculate the total price
  let total = 0;
  priceElements.forEach((priceElement) => {
    const value = parseFloat(priceElement.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Step 3: Create a new table row and cell for total
  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');

  // Step 4: Make total span across both columns
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: $${total.toFixed(2)}`;
  totalCell.style.fontWeight = 'bold';

  // Step 5: Append cell to row, and row to table
  totalRow.appendChild(totalCell);
  document.getElementById('grocery-table').appendChild(totalRow);