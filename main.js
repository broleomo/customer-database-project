
// console.log(customers);

let container = document.querySelector('.container');

// function createCustomers () {
  // create for loop for amount of data set = 12 (info.results[i])
  for (let i = 0;i < customers.results.length; i++){
    let directory = document.createElement('div');
    directory.innerHTML = `
    <div class="customer">
    <div class="photo">
    <img src=${customers.results[i].picture.large}>
    </div>
    <div class="name">
    ${customers.results[i].name.first}
    ${customers.results[i].name.last}
    </div>
    <div class="email">
    ${customers.results[i].email}
    </div>
    <div class="address">
    ${customers.results[i].location.street}
    </div>
    <div class="city">
    ${customers.results[i].location.city}
    ${customers.results[i].location.state}
    </div>
    <div class="tel">
    ${customers.results[i].phone}
    </div>
    </div>
    `;
container.appendChild(directory);
}

console.log();





// document.querySelector('.container').innerHTML = template
// console.log(createCustomers);

// document.querySelector('.container').innerHTML = template
