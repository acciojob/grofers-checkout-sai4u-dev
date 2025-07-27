const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
 // Get all price elements
  const priceElements = document.querySelectorAll(".price");

  let total = 0;

  // Sum all the prices
  priceElements.forEach(priceEl => {
    total += parseFloat(priceEl.textContent) || 0;
  });

  // Check if the total row already exists (to avoid duplicates)
  const existingTotalRow = document.getElementById("total-row");
  if (existingTotalRow) {
    existingTotalRow.remove(); // Remove the old one before adding a new total
  }

  // Create new row
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row"; // Assign ID for future reference

  // Create cell
  const labelCell = document.createElement("td");
  labelCell.textContent = "Total";
  labelCell.style.fontWeight = "bold";

  // Create total value cell
  const totalCell = document.createElement("td");
  totalCell.textContent = total;
  totalCell.style.fontWeight = "bold";

  // Append cells to row
  totalRow.appendChild(labelCell);
  totalRow.appendChild(totalCell);

  // Append the row to the table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

