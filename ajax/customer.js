document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      let output = '';
      customers.forEach(function (customer) {
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {

    if (this.status === 200) {

      console.log("status: ", this.statusText);

      const customer = JSON.parse(this.responseText);
      const output = `
        <ul>
          <li>ID: ${customer[0]['id']}</li>
          <li>Name: ${customer[0]['name']}</li>
          <li>Company: ${customer[0]['company']}</li>
          <li>Phone: ${customer[0]['phone']}</li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}