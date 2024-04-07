import { TileEntity } from "./tile"

export type WordEntity = {
    children?: TileEntity[],
    index: number
}