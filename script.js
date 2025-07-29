    function calculateTotal() {
      // Remove existing total row if it exists
      const existingTotal = document.querySelector('.total-row');
      if (existingTotal) {
        existingTotal.remove();
      }

      // Get all price cells
      const prices = document.querySelectorAll('.price');
      let total = 0;

      prices.forEach(cell => {
        const value = parseFloat(cell.textContent.trim());
        if (!isNaN(value)) {
          total += value;
        }
      });

      // Create new total row
      const table = document.getElementById('grocery-table');
      const totalRow = document.createElement('tr');
      totalRow.classList.add('total-row');

      const totalCell = document.createElement('td');
      totalCell.colSpan = 2;
      totalCell.className = 'total';
      totalCell.textContent = `Total Price: $${total.toFixed(2)}`;

      totalRow.appendChild(totalCell);
      table.appendChild(totalRow);

      // Update result in div with id="ans"
      document.getElementById('ans').textContent = total.toFixed(2);
    }
