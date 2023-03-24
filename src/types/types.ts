export interface ContentItem {
  [item: string]: string
}

export type ContentItems = Array<ContentItem>

export interface Recipes {
  [item: string]: ContentItems
}

export interface MenuProps {
  children?: React.ReactNode
  recipeContainer: React.RefObject<HTMLDivElement>
}
