let button = document.getElementById('button');
button.addEventListener('click', loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.txt', true);

  xhr.addEventListener('load', logData);
  function logData() {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  }

  /* Alternative way to write event listener
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  }
  */

  // Optional - Used for spinners / loaders
  xhr.onprogress = function () {
    console.log('Ready State:', xhr.readyState);
  }



  /*
    readyState values
    0: Request not initialized
    1: Server connection established
    2: Request received
    3: Processing request
    4: Request finished and response is ready
  */

  xhr.send();
}