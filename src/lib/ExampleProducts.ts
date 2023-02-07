export const exampleProductSearchResponse: ProductSearchResponse = {
  data: [
    {
      productId: "0001111041700",
      aisleLocations: [
        {
          bayNumber: "13",
          description: "Aisle 35",
          number: "35",
          numberOfFacings: "5",
          sequenceNumber: "3",
          side: "L",
          shelfNumber: "2",
          shelfPositionInBay: "1"
        }
      ],
      brand: "Kroger",
      categories: [
        "Dairy"
      ],
      countryOrigin: "United States",
      description: "Kroger 2% Reduced Fat Milk",
      items: [
        {
          itemId: "0001111041700",
          inventory: {
            stockLevel: "HIGH"
          },
          favorite: true,
          fulfillment: {
            curbside: true,
            delivery: true,
            instore: true,
            shiptohome: true
          },
          price: {
            regular: 1.99,
            promo: 1.59,
            regularPerUnitEstimate: 1.99,
            promoPerUnitEstimate: 1.59
          },
          nationalPrice: {
            regular: 1.99,
            promo: 1.59,
            regularPerUnitEstimate: 1.99,
            promoPerUnitEstimate: 1.59
          },
          size: "1 gal",
          soldBy: "unit"
        }
      ],
      itemInformation: {
        depth: "3.5",
        height: "2.0",
        width: "4.75"
      },
      temperature: {
        indicator: "Refrigerated",
        heatSensitive: true
      },
      images: [
        {
          id: "string",
          perspective: "front",
          default: true,
          sizes: [
            {
              id: "7df2d0a3-8349-44d4-9512-1dab89e675a9",
              size: "medium",
              url: "https://www.kroger.com/product/images/medium/front/0001111041700"
            }
          ]
        }
      ],
      upc: "0001111041700"
    }
  ],
  meta: {
    pagination: {
      total: 0,
      start: 0,
      limit: 0
    },
    warnings: [
      "string"
    ]
  }
}