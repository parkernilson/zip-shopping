type AisleLocation = {
  bayNumber: string
  description: string
  number: string
  numberOfFacings: string
  sequenceNumber: string
  side: string
  shelfNumber: string
  shelfPositionInBay: string
}

type Inventory = {
  stockLevel: "HIGH" | "LOW" | "TEMPORARILY_OUT_OF_STOCK"
}

type ProductFullfillment = {
  curbside: boolean
  delivery: boolean
  instore: boolean
  shiptohome: boolean
}

type ProductItemPrice = {
  /** The regular price of the item. */
  regular: number
  /** The sale price of the item. */
  promo: number
  /** The estimated price of 1 unit of the item. */
  regularPerUnitEstimate: number
  /** The estimated sale price of 1 unit of the item. */
  promoPerUnitEstimate: number
}

type Item = {
  itemId: string
  inventory: Inventory
  favorite: boolean
  fulfillment: ProductFullfillment
  price: ProductItemPrice
  nationalPrice: ProductItemPrice
  /** A description of product's size. */
  size: string
  /** Indicates how this item is sold. Values returned are typically either "weight" or "unit" */
  soldBy: string
}

type ProductBoxedDimensions = {
  depth: string
  height: string
  width: string
}

type ProductTemperature = {
  /** Information about the product's storage temperature. */
  indicator: string
  /** Indicates if the item is heat sensitive. */
  heatSensitive: boolean
}

type ProductImageSize = {
  /** An optional identifier of the image size. */
  id: string
  /** A description of the image size. */
  size: string
  /** The URL location of the image. */
  url: string
}

type ProductImage = {
  /** An optional identifier of the image. */
  id: string
  /** A description of the product images view. */
  perspective: string
  default: boolean
  /** An array of images sizes. */
  sizes: ProductImageSize[]
}

type Product = {
  productId: string
  aisleLocations: AisleLocation[]
  brand: string
  categories: string[]
  countryOrigin: string
  description: string
  items: Item[]
  itemInformation: ProductBoxedDimensions
  temperature: ProductTemperature
  images: ProductImage[]
  upc: string
}

type Meta = {
  pagination: {
    total: number
    start: number
    limit: number
  }
  warnings: string[]
}

type ProductSearchResponse = {
  data: Product[]
  meta: Meta
}