export interface ElixirsEntity {
    id: string
    name: string
    effect: string
    sideEffects: string
    characteristics: string
    time: string
    difficulty: string
    ingredients: IngredientEntity[]
    inventors: InventorsEntity[]
    manufacturer: string
}

export interface IngredientEntity {
    id: string
    name: string
}

export interface InventorsEntity {
    id: string
    firstName: string
    lastName: string
}