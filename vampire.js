class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire)
    vampire.creator = this
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let count = 0
    let currentVamp = this
    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      count ++
    }
    return count
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    const currentVamp = this;
    if (!currentVamp.creator) {
      return true;
    } else if (!vampire.creator) {
      return false;
    } else if (this.offspring.length === 0) {
      return false
    }

    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true
    } else {
      return false
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

const original =  new Vampire("Original", "1202")
const bart = new Vampire("bart", "1573")
const ansel = new Vampire("ansel", "1431")
const eigort = new Vampire("eigort", "1437")
const sarah = new Vampire("sarah", "1895")
const andrew = new Vampire("andrew", "1802")

original.addOffspring(bart)
original.addOffspring(ansel)

ansel.addOffspring(eigort)
ansel.addOffspring(sarah)

eigort.addOffspring(andrew)

console.log(andrew.numberOfVampiresFromOriginal)


module.exports = Vampire;

