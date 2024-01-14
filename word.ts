class Word {
    characters: Character[]

    constructor(word: string) {
        for (var i = 0; i < word.length; i++) {
            this.characters.push(new Character(word[i]));
        }
    }

    getValue() {
        return this.characters.reduce((acc, cur) => acc + cur.value, "");
    }
}