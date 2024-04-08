class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location
    }
    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}`
        } else {
            return `${this.firstName} ha la stessa età di ${otherUser.firstName}`
        }
    }
}

const user1 = new User("Davide", "Prelati", 20, "Roma")
const user2 = new User("Franco", "Franchi", 48, "Roma")
console.log(user1)
console.log(user1.compareAge(user2))




class Pet{
    constructor(petName, ownerName, species, breed){
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed
    }
    sameOwner(otherPet){
        return this.ownerName === otherPet.ownerName
    }
    getInfo(){
        return `${this.petName} (${this.species}, ${this.breed}) - Il padrone è: ${this.ownerName}`;
    }
}



const petListContainer = document.createElement("div");
petListContainer.id = "petListContainer";
document.body.appendChild(petListContainer);

function addPetToList(pet) {
const petList = document.createElement("ul");
petList.id = "petList";

const listItem = document.createElement("li");
listItem.textContent = pet.getInfo();

petList.appendChild(listItem);
petListContainer.appendChild(petList);
}

document.getElementById("petForm").addEventListener("submit", function(event) {
event.preventDefault(); 

const petName = document.getElementById("petName").value;
const ownerName = document.getElementById("ownerName").value;
const species = document.getElementById("species").value;
const breed = document.getElementById("breed").value;

const newPet = new Pet(petName, ownerName, species, breed);

addPetToList(newPet);


console.log("New Pet:", newPet);
});
