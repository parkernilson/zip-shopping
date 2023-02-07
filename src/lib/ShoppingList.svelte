<script lang="ts">
    import ListItemInput from "./ListItemInput.svelte";
    import { listItemsStore, attemptAddNewItem, onBlurListItem } from "./ShoppingList";

    let listItems

    let unsubscribe = listItemsStore.subscribe(value => {
        listItems = value
    })
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
                <li><ListItemInput bind:value={listItem.value} focused={listItem.focused} onBlur={() => onBlurListItem(listItems, i)} /></li>
            </form>
        {/each}
        {#if listItems[listItems.length-1].focused !== true}
            <li><input placeholder="New Item" on:focus={() => {
                attemptAddNewItem(listItems[listItems.length-1], listItems.length-1)
            }} /></li>
        {/if}
    </ul>
</div>