export interface ITravelDetails {
    imageUrl: string
    tags: string[]
    title: string
    description: string
    message: boolean
    like: boolean
    // UI only
    isSelected?: boolean
    isInLastRow?: boolean
}

export type View = 'grid' | 'list'
