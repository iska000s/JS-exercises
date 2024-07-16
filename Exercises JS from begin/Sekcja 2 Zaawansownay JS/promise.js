let a = 2;

const myPromise = new Promise((resolve, reject) => {
    let sum = 23;
    if(sum > a){
        setTimeout(() => {
            resolve("Hello World z timera!");
          }, 2000);
    }
  }
  )
//   .then(() => console.log("Kolejny promise"))
//   .then(() => console.log("Kolejny promise"))
//   .catch(() => console.log("Promise odrzucony"))

  myPromise.then( data => {
    console.log('Mamy wynik z Promise:', data);
  }).catch( err => {
    console.log('Jakiś problem z Promise:', err);
  });



