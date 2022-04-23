<template>
  <div
    class="bg flex justify-evenly flex-wrap pl-24 pr-24 pb-24 pt-24"
    :key="this.number"
  >
    <hero-item-card :url="getUrl(this.number)" />
    <hero-item-card :url="getUrl(this.number + 1)" />
    <hero-item-card :url="getUrl(this.number + 2)" />
  </div>
  <!-- <p v-on:click="inc()">Next</p>
  <p v-on:click="prev()">Prev</p> -->
  <button
    v-on:click="prev()"
    type="button"
    class="
      inline-block
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      mt-4
    "
  >
    Prev
  </button>
  <button
    v-on:click="inc()"
    type="button"
    class="
      inline-block
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      mt-4
    "
  >
    Next
  </button>
</template>

<script>
import HeroItemCard from "./HeroItemCard.vue";
import { getUrl } from "../util/util";

export default {
  name: "ListNftComponent",
  components: { HeroItemCard },
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    getNumbers() {
      //   const n = 1;
      //   const hexString = n.toString(16);
    },
    inc() {
      this.number = this.number + 3;
      console.log(this.number);
    },
    prev() {
      this.number = Math.max(this.number - 3, 1);
    },
    getUrl(int) {
      //   return `https://gateway.pinata.cloud/ipfs/QmZ5NRBoW2KPufHjiHmNE2aeqdAZhC6cJSHXAXq2SqzrwA/00000000000000000000000000000000000000000000000000000000000000${String(
      //     int.toString(16)
      //   ).padStart(2, "0")}.json`;

      return getUrl(
        `00000000000000000000000000000000000000000000000000000000000000${String(
          int.toString(16)
        ).padStart(2, "0")}.json`
      );
    },
  },
};
</script>

<style>
.bg {
  background-color: #f5f7f6;
}
</style>