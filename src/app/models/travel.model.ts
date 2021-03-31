export interface ITravelDetails {
    imageUrl: string
    tags: string[]
    title: string
    description: string
    message: boolean
    like: boolean
    // UI only
    isSelected?: boolean
}

export type View = 'grid' | 'list'
