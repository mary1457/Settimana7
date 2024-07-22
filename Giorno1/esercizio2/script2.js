class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }



    ownerUguale(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

const pet1 = new Pet("Nilo", "Ornella", "gatto", "europeo");
const pet2 = new Pet("Ciccia", "Marco", "gatto", "europeo");
const pet3 = new Pet("Mirtillo", "Marco", "gatto", "europeo");
console.log(pet1.ownerUguale(pet2));
console.log(pet2.ownerUguale(pet3));


document
    .getElementsByTagName('form')[0]
    .addEventListener('submit', function (e) {


        e.preventDefault()

        const pets = [];
        const petNameInput = document.getElementById('inputName')
        const ownerNameInput = document.getElementById('inputOwner')
        const speciesInput = document.getElementById('inputSpecies')
        const breedInput = document.getElementById('inputBreed')

        const petNameValue = petNameInput.value
        const ownerNameValue = ownerNameInput.value
        const speciesValue = speciesInput.value
        const breedValue = breedInput.value

        const element = new Pet(petNameValue, ownerNameValue, speciesValue, breedValue)
        pets.push(element);

        const unorderedList = document.getElementById('list-group')

        unorderedList.innerHTML = ''

        for (let i = 0; i < pets.length; i++) {

            const newLi = document.createElement('li')
            newLi.innerText =
                "Animale: " + pets[i].petName + " " +
                'Proprietario: ' + pets[i].ownerName +
                '  ' +
                "Specie: " + pets[i].species +
                " " +
                pets[i].breed

            newLi.classList.add('list-group-item')

            unorderedList.appendChild(newLi)
        }


        document.getElementsByTagName('form')[0].reset()
    })




