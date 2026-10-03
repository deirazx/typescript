interface Language {
  [key: string]: string
}

let language: Language = {
  en: "English",
  hi: "Hindi",
  fr: "French"
}

// console.log(language.en);


interface Scores {
  [index: number]: string
}

let studentsScore: Scores = {
  1: "A",
  2: "B"
}

