<template>
  <div class="flex justify-center h-fit text-left">
    <div class="rounded-sm shadow-lg bg-white max-w-sm">
      <a href="#!">
        <!-- <img
          class="rounded-t-sm"
          :src="image"
          alt=""
          @load="onImgLoad"
          v-show="isLoaded"
        /> -->
        <!-- <img
          class="rounded-t-sm"
          src="https://media.discordapp.net/attachments/900030888052678656/967390504822128690/pexels---11866150.jpg?width=536&height=670"
          alt=""
          v-show="!isLoaded"
        /> -->
        <div class="cardtop flex justify-center items-center">
          <div v-if="data">
            <img
              class="rounded-t-sm"
              :src="data.image"
              alt=""
              @load="onImgLoad"
              v-show="isLoaded"
            />
          </div>

          <svg
            v-show="!isLoaded"
            role="status"
            class="
              mr-2
              w-8
              h-8
              text-gray-200
              animate-spin
              dark:text-gray-600
              fill-blue-600
            "
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </a>
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2">{{ data.name }}</h5>
        <ul>
          <li class="icon water">Water ranking: 14th</li>
          <li class="icon air">Air ranking: 11th</li>
          <li class="icon fauna">Fauna ranking: 1th</li>
        </ul>

        <!-- <p class="text-gray-700 text-base mb-4">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p> -->
        <button
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
          View
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroItemCard",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      data: {
        id: 1,
        name: "Loading...",
        description: "Park in america",
        image: "",
        properties: {
          simple_property: "example value",
        },
      },
      isLoaded: false,
    };
  },
  methods: {
    onImgLoad() {
      this.isLoaded = true;
    },
    fetchData() {
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => (this.data = data))
        .catch((err) => {
          console.log(err);
          this.fetchData();
        });
    },
  },
  async created() {
    this.fetchData();
  },
};
</script>

<style>
.icon {
  /* padding: 10px 50px; */
  padding: 5px 0px;
  /* padding-left: 50px; */
  background-size: 30px;
  background-repeat: no-repeat;
  background-position-y: center;
}

.cardtop {
  width: 384px;
  height: 256px;
  object-fit: cover;
}

.icon.water {
  /* background-image: url("~@/assets/water.png"); */
}

.icon.air {
  /* background-image: url("~@/assets/air.png"); */
}

.icon.fauna {
  /* background-image: url("~@/assets/fauna.png"); */
}
</style>