<template>
  <div class="p-2 rounded border bg-white border-green-500 mt-4 shadow">
    <h1> Hello Vue here! </h1>
    <button @click="onClickSendMessageButton"> Send Message </button>
  </div>
</template>

<script setup lang="ts">

function onClickSendMessageButton() {
  console.log("msg: Hello from vue");
}

</script>