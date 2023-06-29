fetch('/kidslist').then(function(response) {
    return response.json();
  }).then(function(data) {
    var tableBody = document.getElementById('table-body');
  
    
    data.forEach(function(child) {
      var row = document.createElement('tr');
  
      var firstNameCell = document.createElement('td');
      firstNameCell.textContent = child.cfname;
      row.appendChild(firstNameCell);
  
      var lastNameCell = document.createElement('td');
      lastNameCell.textContent = child.clname;
      row.appendChild(lastNameCell);
  
      tableBody.appendChild(row);
    });
  }).catch(function(error) {
    console.error('Error retrieving data: ', error);
  });
  