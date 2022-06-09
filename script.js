function Person(name, age, personId, image) {
  this.name = name;
  this.age = age;
  this.personId = personId;
  this.image = image;
}

const person1 = new Person("Ben Heller", 25, 29884, "");
const person2 = new Person("Jonas Novak", 35, 29885, "");
const person3 = new Person("Emma Huber", 45, 29882, "");

let solid = document.querySelector(".fa-solid");

personNameFirst.innerHTML = person1.name;
personAgeFirst.innerHTML = person1.age;
personIdFirst.innerHTML = person1.personId;
solid.innerHTML = person1.image;

personNameSecond.innerHTML = person2.name;
personAgeSecond.innerHTML = person2.age;
personIdSecond.innerHTML = person2.personId;
solid.innerHTML = person2.image;

personNameThird.innerHTML = person3.name;
personAgeThird.innerHTML = person3.age;
personIdThird.innerHTML = person3.personId;
solid.innerHTML = person3.image;

parag = document.querySelectorAll("p");
spans = document.querySelectorAll("span");

for (let i = 0; i < parag.length; i++) {
  let element = parag[i];
  element.style.fontWeight = "bold";
}

for (let i = 0; i < spans.length; i++) {
  let element = spans[i];
  element.style.fontWeight = "lighter";
}
