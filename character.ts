class Character {
    value: string

    constructor(value: string) {
        this.setValue(value);
    }

    setValue(value: string) {
        if (value.length != 1) {
            throw new Error("Character value should have length 1.")
        }
        this.value = value;
    }
}