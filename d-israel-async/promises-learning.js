itemsOne = document.querySelector('.items-1');
itemsTwo = document.querySelector('.items-2');
itemsThree = document.querySelector('.items-3');
itemsFour = document.querySelector('.items-4');

function countItemP(item) {
  let listItem = document.createElement('li');
  listItem.innerText = item;
  itemsThree.appendChild(listItem);
}

countItemP(1);
countItemP(2);
countItemP(3);

function countFourP() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      countItemP(4); // Do this
      if (itemsThree.children.length === 4) { // Checks this condition
        resolve(countFiveP()); // If the condition is true, do this
      } else { // Otherwise, log an error
        reject('Error: item count does not equal 4');
      }
    }, 2500)
  })
}

function countFiveP() {
  setTimeout(() => {
    countItemP(5);
  }, 500)
}

countFourP()
  .then()
  .catch(error => { console.log(error) });