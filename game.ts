class Game {
    currentWord: Word;
    endWord: string;
    history: string[];
    canReplace: boolean;

    constructor(startWord: string, endWord: string) {
        this.currentWord = new Word(startWord);
        this.endWord = endWord;
        this.history = [this.currentWord];
        this.canReplace = true;
    }
}