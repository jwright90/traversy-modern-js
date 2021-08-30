itemsOne = document.querySelector('.items-1');
itemsTwo = document.querySelector('.items-2');
itemsThree = document.querySelector('.items-3');
itemsFour = document.querySelector('.items-4');

function countItem(item) {
  let listItem = document.createElement('li');
  listItem.innerText = item;
  itemsOne.appendChild(listItem);
}

countItem(1);
countItem(2);
countItem(3);

function countFour() {
  setTimeout(() => {
    countItem(4);
  }, 2500)
}

function countFive() {
  setTimeout(() => {
    countItem(5);
  }, 500)
}

countFour();
countFive();

function countItemCB(item) {
  let listItem = document.createElement('li');
  listItem.innerText = item;
  itemsTwo.appendChild(listItem);
}

countItemCB(1);
countItemCB(2);
countItemCB(3);

function countFourCB(cb) {
  setTimeout(() => {
    countItemCB(4);
    cb();
  }, 2500)
}

// The callback has to go in the event that takes the longest.
// We may not always know which event takes the longest!

function countFiveCB() {
  setTimeout(() => {
    countItemCB(5);
  }, 500)
}

countFourCB(countFiveCB);


// Using Promises

function countItemP(item) {
  let listItem = document.createElement('li');
  listItem.innerText = item;
  itemsThree.appendChild(listItem);
}

countItemP(1);
countItemP(2);
countItemP(3);

function countFourP() {
  return new Promise(resolve => {
    setTimeout(() => {
      countItemP(4)
      resolve(countFiveP());
    }, 2500)
  })
}

function countFiveP() {
  return new Promise(resolve => {
    setTimeout(() => {
      countItemP(5)
      resolve('item 5');
    }, 500)
  })
}

countFourP();


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('one');
  }, 500);
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('two');
  }, 100);
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('three');
  }, 50);
})

// This returns each promise in order, 
// no matter how long they take to resolve
Promise.all([promise1, promise2, promise3]).then((data) => {
  console.log(data)
});

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json)
//   });


// Async Await
function countItemAA(item) {
  let listItem = document.createElement('li');
  listItem.innerText = item;
  itemsFour.appendChild(listItem);
}

countItemAA(1);
countItemAA(2);
countItemAA(3);

function countFourAA() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(countItemAA(4));
    }, 2500)
  })
}

function countFiveAA() {
  setTimeout(() => {
    countItemAA(5);
  }, 500)
}

async function countAA() {
  await countFourAA();
  countFiveAA();
}

countAA();

async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();

    console.log(json);
  } catch (error) {
    console.log(error)
  }

}

getPosts();




