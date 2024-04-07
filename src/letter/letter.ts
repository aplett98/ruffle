class InvalidLetterException extends Error {}

export class Letter {
    private _char: string;

    public IsMoveable: boolean;
    public IsEditable: boolean;

    constructor(char: string) {
        this.Character = char;
    }

    public get Character() {
        return this._char
    }

    public set Character(char: string) {
        if (char.length !== 1) {
            throw new InvalidLetterException("Letters must have length of 1.");
        }
        if (!/^[a-zA-z]+$/.test(char)) {
            throw new InvalidLetterException("Letters must be an alphabetic character.");
        }
        this._char = char;
    }
}