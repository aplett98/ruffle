import { With, World } from "miniplex";
import { TileEntity } from "../entity";

export class Grid {
    private _world: World<TileEntity>
    private _editable: World<TileEntity> | null
    private _moveable: With<TileEntity, "moveable"> | null

    constructor(world) {
        this._world = world
    }
}