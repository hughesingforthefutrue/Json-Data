let divs = document.querySelector("#data");

let data = [
  { fname: "esme", lname: "sanchez", id: 1892038, isTherapist: true },

  { fname: "rick", lname: "jeps", id: 1894024, isTherapist: false },

  { fname: "angie", lname: "lange", id: 1982403, isTherapist: false },

  { fname: "renat", lname: "gros", id: 1894039, isTherapist: true },

  { fname: "bettino", lname: "yang", id: 3789204, isTherapist: true },
];

function getList() {
  let word;
  for (i = 0; i < data.length; i++) {
    console.log(i);
    let divList = document.createElement("ul");
    divList.id = "names";
    divs.appendChild(divList);
    let word = (divList.innerHTML =
      data[i].lname.toUpperCase() + "," + " " + data[i].fname.toUpperCase());
  }
  return word;
}

getList();
