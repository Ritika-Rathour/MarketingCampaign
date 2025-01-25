// Manage campaigns dynamically
document.getElementById('campaignForm').addEventListener('submit', function (event) {
    event.preventDefault();
  // Get form values
    const name = document.getElementById('campaignName').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const budget = document.getElementById('budget').value;
    // Add a new row to the campaign table
    const table = document.getElementById('campaignTable').querySelector('tbody');
    const row = table.insertRow();
    row.innerHTML = `
      <td>${name}</td>
      <td>${startDate}</td>
      <td>${endDate}</td>
      <td>$${budget}</td>
      <td class="actions">
        <button onclick="removeCampaign(this)">Remove</button>
      </td>
    `;
   // Clear the form
    document.getElementById('campaignForm').reset();
  }); 
  // Remove a campaign row
  function removeCampaign(button) {
    const row = button.parentElement.parentElement;
    row.remove();
  }
  
