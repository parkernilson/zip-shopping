<script lang="ts">
    import { onMount } from "svelte";

    export let onBlur = ()=>{}
    export let value: string = ""
    export let focused: boolean = false

  var ref: HTMLInputElement;

  // when the component is created, if it is initialized as focused, focus the input
  onMount(() => {
    if (ref && focused) {
      ref.focus()
    }
  })

  // if the focus status of the component changes, reflect it in the dom
  $: {
    if (ref && focused) {
      ref.focus()
    } else if (ref && !focused) {
      ref.blur()
    }
  }

</script>

<input bind:value={value} bind:this={ref} on:blur={onBlur}/>