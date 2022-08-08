let arrayOfPeopleObjs = data.results;
let personObj;

for (let i = 0; i < arrayOfPeopleObjs.length; i++) {
  // create a p tag for the person's first and last name
  let newFullName = document.createElement("p");

  //create an image tag
  let newImg = document.createElement("img");

  // create a p tag for the person's email
  let newEmail = document.createElement("p");

  // create a p tag for the person's cell number
  let newCellNum = document.createElement("p");

  //create a horizontal line tag
  let hr = document.createElement("hr");

  // grab the person's first and last name from the JSON object.
  let firstName = arrayOfPeopleObjs[i]["name"]["first"];
  let lastName = arrayOfPeopleObjs[i]["name"]["last"];

  // grab the person's image from the JSON object.
  let imgSrc = arrayOfPeopleObjs[i]["picture"]["medium"];

  // grab the person's email
  let email = arrayOfPeopleObjs[i]["email"];

  //grab the person's cell number
  let cellNum = arrayOfPeopleObjs[i]["cell"];

  // replace the newly created span's innertext with the first name and last name
  newFullName.innerText = `Name: ${firstName} ${lastName}`;
  newEmail.innerText = `Email: ${email}`;
  newCellNum.innerText = `Cell Number: ${cellNum}`;

  //replace the newly created img's src with the person's img link
  newImg.src = imgSrc;

  //append all the elements to the parent body tag
  document.body.appendChild(newFullName);
  document.body.appendChild(newImg);
  document.body.appendChild(newEmail);
  document.body.appendChild(newCellNum);
  document.body.appendChild(hr);
}

// info that we want to grab?
// <span>first name</span>
// <span>last name</span>
// <p>Email</p>
// <p>Cell</p>
