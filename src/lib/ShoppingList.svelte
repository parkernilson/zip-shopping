<script lang="ts">
    import ListItemInput from "./ListItemInput.svelte";

    let listItems = ['Hello', 'bananas', 'oranges'].map((v,i)=>{return { value: v, focused: false} })

    function blurAllItems(listItems) {
        listItems.forEach((listItem) => {
            listItem.focused = false
        })
    }

    /** Focus one of the list items */
    function focusItem(i) {
        // defocus all the other list items
        listItems.forEach((listItem) => {
            listItem.focused = false
        })
        listItems[i].focused = true 
        listItems = listItems
    }

    // When a list item is un focused, if it is empty we should just scrap it
    function onBlurListItem(i) {
        listItems[i].focused = false // the element was blurred so we unfocus it
        if (listItems[i].value === "") { // if the list item was empty, we just remove it
            listItems = listItems.filter((v, index) => index !== i)
        }
    }

    function attemptAddNewItem(curVal, i) {
        if (curVal !== "") {
            blurAllItems(listItems)

            // remove all other empty list items besides the new list item
            listItems = listItems.filter((listItemToFilter) => listItemToFilter.value === '' ? false : true)

            // insert the new list item below the current list item
            listItems.splice(i+1, 0, { value: '', focused: true })
            listItems = listItems // cause the listItems to update (svelte thing)
        }
}
</script>

<!-- Card -->
<div class="text-center m-auto rounded-lg p-12 shadow-lg  md:w-64 lg:w-124">
    <h1 class="text-3xl font-bold mb-6">
        Shopping List
    </h1>
    <ul class="text-left">
        {#each listItems as listItem, i}
            <form on:submit|preventDefault={()=>attemptAddNewItem(listItem.value, i)}>
                <!-- TODO: when the list item is blurred, if it is blank remove from listItems -->
                <li><ListItemInput bind:value={listItem.value} focused={listItem.focused} onBlur={() => onBlurListItem(i)} /></li>
            </form>
        {/each}
        {#if listItems[listItems.length-1].focused !== true}
            <li><input placeholder="New Item" on:focus={() => {
                attemptAddNewItem(listItems[listItems.length-1], listItems.length-1)
            }} /></li>
        {/if}
    </ul>
</div>