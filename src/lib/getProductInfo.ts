/**
 * Get the info for a product
 * TODO: Implement this
 */
export async function getProductInfo(productName: string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productName)
        }, 1000)
    })
}