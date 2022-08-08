const url = "https://randomuser.me/api";

fetch(url) // fetch makes a request from the url
  // once the request comes back, the callback in the first "then" is called upon with the response as an argument
  .then(function (response) {
    console.log(response); // the response object with all the metadata that goes into making a request
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
    const email = myJson.results[0].email;
    const p = document.createElement("p");
    p.innerText = email;
    document.body.appendChild(p);
  });

// our code must live inside of the callback ^!

// if we try to access the JSON outside of the callback in the global space, we'll get a ReferenceError: myJson is not defined - ""
// const email = myJson.results[0].email;
// const p = document.createElement("p");
// p.innerText = email;
// document.body.appendChild(p);
