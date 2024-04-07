import { Letter } from "../letter";

export class Word {
    _letters: Letter[] = [];

    constructor(word: string) {
        this.Word = word
    }

    public set Word(word: string) {
        this._letters = [];
        for (let i = 0; i < word.length; i++) {
            this._letters.push(new Letter(word[i]));
        }
    }

    public get Word(): string {
        return this._letters.map(letter => letter.Character).join();
    }
}