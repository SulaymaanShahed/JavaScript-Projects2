function displayType(character) { //created function displayType(character).
    var characterType = character.getAttribute("data-character-type"); //created variable characterType and attached character.getAttribute.
    alert(characterType + " is in the " + character.innerHTML + " universe!");//alert method with character values plus string in parentheses.
}