<template>
  <div class="bg pt-12 flex justify-evenly flex-wrap pl-24 pr-24 pb-24">
    <hero-item-card
      url="https://gateway.pinata.cloud/ipfs/QmZ5NRBoW2KPufHjiHmNE2aeqdAZhC6cJSHXAXq2SqzrwA/0000000000000000000000000000000000000000000000000000000000000001.json"
    />
    <hero-item-card
      url="https://gateway.pinata.cloud/ipfs/QmZ5NRBoW2KPufHjiHmNE2aeqdAZhC6cJSHXAXq2SqzrwA/0000000000000000000000000000000000000000000000000000000000000002.json"
    />
    <hero-item-card
      url="https://gateway.pinata.cloud/ipfs/QmZ5NRBoW2KPufHjiHmNE2aeqdAZhC6cJSHXAXq2SqzrwA/0000000000000000000000000000000000000000000000000000000000000003.json"
    />
  </div>
</template>

<script>
import HeroItemCard from "./HeroItemCard.vue";
export default {
  name: "ListNftComponent",
  components: { HeroItemCard },
};
</script>

<style>
.bg {
  background-color: #f5f7f6;
}
</style>