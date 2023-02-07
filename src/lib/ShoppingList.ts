import { writable } from "svelte/store"

export const listItemsStore = writable(['Hello', 'bananas', 'oranges'].map((v,i)=>{return { value: v, focused: false} }))

export function blurAllItems(listItems) {
    listItems.forEach((listItem) => {
        listItem.focused = false
    })
}

/** Focus one of the list items */
export function focusItem(i) {
    // defocus all the other list items
    listItems.forEach((listItem) => {
        listItem.focused = false
    })
    listItems[i].focused = true 
    listItems = listItems
}

// When a list item is un focused, if it is empty we should just scrap it
export function onBlurListItem(listItems, i) {
    listItems[i].focused = false // the element was blurred so we unfocus it
    if (listItems[i].value === "") { // if the list item was empty, we just remove it
        listItems = listItems.filter((v, index) => index !== i)
    }
}

export function attemptAddNewItem(listItems, curVal, i) {
    if (curVal !== "") {
        blurAllItems(listItems)

        // remove all other empty list items besides the new list item
        listItems = listItems.filter((listItemToFilter) => listItemToFilter.value === '' ? false : true)

        // insert the new list item below the current list item
        listItems.splice(i+1, 0, { value: '', focused: true })
        listItems = listItems // cause the listItems to update (svelte thing)
    }
}