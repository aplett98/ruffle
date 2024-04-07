import { World } from "miniplex"
import { TileEntity, WordEntity } from "../entity"
import { Grid } from "../grid"

class InvalidWordException extends Error { }
class InvalidStateException extends Error { }

export class Game {
    private _startWord: string
    private _endWord: string
    private _words: World<WordEntity>
    private _tiles: World<TileEntity>
    private _grid: Grid | null
    private _currentRow = 0

    constructor(start: string, end: string) {
        this._startWord = start
        this._endWord = end
    }

    public Init(): void {
        if (!Game.IsValidWord(this._startWord) || !Game.IsValidWord(this._endWord) || this._startWord === this._endWord) {
            throw new InvalidWordException()
        }
        if (this._words || this._tiles) {
            throw new InvalidStateException()
        }

        this._tiles = new World<TileEntity>();
        this._words = new World<WordEntity>();

        // Initialize words and tiles
        const newWord : WordEntity = {index: 0}
        this._words.add(newWord);
        this._tiles.onEntityAdded.subscribe(tile => {
            if (!tile.parent.children) {
                tile.parent.children = []
            }
            tile.parent.children.push(tile)
        })
        for (let i = 0; i < this._startWord.length; i++) {
            this._tiles.add({
                parent: newWord,
                index: i,
                character: this._startWord[i],
                editable: true,
                moveable: true,
            })
        }
    }

    private static IsValidWord(word: string) {
        return /^[a-z]+$/.test(word) && word.length == 5
    }
}