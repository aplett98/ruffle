import { WordEntity } from "./word"

export type TileEntity = {
    parent: WordEntity
    index?: number
    editable?: true,
    moveable?: true,
    character?: string,
}
