exampleOne = document.getElementById('example-1');
itemsOne = document.querySelector('.items-1');

function countOne(item) {
  let listItem = document.createElement('li');
  listItem.innerText = item;
  itemsOne.appendChild(listItem);
}

countOne(1);
countOne(2);
countOne(3);

setTimeout(() => {
  countOne(4);
}, 1500)

countOne(5);


// const promise = new Promise((resolve, reject) => {
//   if (false) {
//     resolve('Successful')
//   } else (
//     reject('Error')
//   )
// });

// promise
//   .then((data) => { console.log(data) })
//   .catch((error) => { console.log(error) });

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


