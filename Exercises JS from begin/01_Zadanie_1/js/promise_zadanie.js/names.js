

const getNames = function () {
  const names = ["Jan", "Piotr", "Anna"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(names);
    }, 1000);
  })

  .then(() => {
    for (let i = 0; i<names.length; i++){
      console.log(names[i]);
    }
  })

  .then(() => {
    let liName = document.querySelector(".list"); 
    for (let i = 0; i<names.length; i++){
      let newLi = document.createElement("li");
      let newChild = liName.appendChild(newLi);
      newChild.innerText = names[i];
    };
  });
};


getNames();

export default getNames;