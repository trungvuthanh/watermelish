export const flashcardNames = 
{
    name: "spring"
};

export var added = false;
export const newFlashcardName = {
  name: ""
}

export const wordFound = {
  words: []
}

export const wordEnter = {
  word: ""
}

export const setFlashcardNames = (newName) => {
  flashcardNames.name = newName;
};

export const setWordFound = (newWordFound) => {
  wordFound.words = newWordFound;
}

export const setWordEnter = (newWordEnter) => {
  wordEnter.word = newFlashcardName;
}

export const setAdd = (value) => {
  added = value;
}
