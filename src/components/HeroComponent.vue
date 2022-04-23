<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative overflow-hidden wrapper">
    <div class="max-w-7xl mx-auto">
      <div
        class="
          relative
          z-10
          pb-8
          sm:pb-16
          md:pb-20
          lg:max-w-2xl lg:w-full lg:pb-28
          xl:pb-32
        "
      >
        <!-- <svg
          class="
            hidden
            lg:block
            absolute
            right-0
            inset-y-0
            h-full
            w-48
            text-white
            transform
            translate-x-1/2
          "
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg> -->

        <div>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              class="
                relative
                flex
                items-center
                justify-between
                sm:h-10
                lg:justify-start
              "
              aria-label="Global"
            >
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span class="sr-only">Workflow</span>
                    <img
                      class="h-8 w-auto sm:h-10"
                      src="https://cdn.discordapp.com/attachments/967014932388405338/967392181876846622/orchid.svg"
                    />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      class="
                        bg-white
                        rounded-md
                        p-2
                        inline-flex
                        items-center
                        justify-center
                        text-gray-400
                        hover:text-gray-500 hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-indigo-500
                      "
                      aria-expanded="false"
                    >
                      <span class="sr-only">Open main menu</span>
                      <!-- Heroicon name: outline/menu -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <a
                  href="#"
                  class="font-medium text-gray-500 hover:text-gray-900"
                  >Product</a
                >
                <!-- 
                <a
                  href="#"
                  class="font-medium text-gray-500 hover:text-gray-900"
                  >Features</a
                >

                <a
                  href="#"
                  class="font-medium text-gray-500 hover:text-gray-900"
                  >Marketplace</a
                >

                <a
                  href="#"
                  class="font-medium text-gray-500 hover:text-gray-900"
                  >Company</a
                >

                <a
                  href="#"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  >Log in</a
                > -->
              </div>
            </nav>
          </div>

          <!--
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        --></div>

        <main
          class="
            mt-10
            mx-auto
            max-w-7xl
            px-4
            sm:mt-12 sm:px-6
            md:mt-16
            lg:mt-20 lg:px-8
            xl:mt-28
          "
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="
                text-4xl
                tracking-tight
                font-extrabold
                text-gray-900
                sm:text-5xl
                md:text-6xl
              "
            >
              <span class="block xl:inline"
                >Dynamic of Nature virtualized
              </span>
            </h1>
            <p
              class="
                mt-3
                text-base text-gray-500
                sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
                md:mt-5 md:text-xl
                lg:mx-0
              "
            >
              This should a short description but we were too lazy to make this
              section.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow"></div>
              <div class="mt-3 sm:mt-0">
                <a
                  v-on:click="mintCharacterNFT()"
                  href="#"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-1
                    border border-transparent
                    text-white
                    font-medium
                    rounded-full
                    hover:bg-indigo-200
                    md:py-3 md:text-lg md:px-10
                    bg-black-own
                  "
                >
                  Mint NFT
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div
      class="
        lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2
        hidden
        justify-center
        align-middle
        mt-24
        lg:flex
      "
    >
      <div class="flex lg:max-w-2xl lg:w-full lg:pb-28">
        <HeroItemCard
          url="https://gateway.pinata.cloud/ipfs/QmZ5NRBoW2KPufHjiHmNE2aeqdAZhC6cJSHXAXq2SqzrwA/0000000000000000000000000000000000000000000000000000000000000001.json"
        /><HeroItemCard
          class="second-card"
          url="https://gateway.pinata.cloud/ipfs/QmZ5NRBoW2KPufHjiHmNE2aeqdAZhC6cJSHXAXq2SqzrwA/0000000000000000000000000000000000000000000000000000000000000002.json"
        />
      </div>
    </div>
  </div>
  <div class="custom-shape-divider-bottom-1650708023">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="shape-fill"
      ></path>
    </svg>
  </div>
</template>

<script>
import HeroItemCard from "./HeroItemCard.vue";
//import { Web3 } from "../util/Web3";
// import { Web3 } from "web3";
// var Web3 = require("web3");
// var VueWeb3 = require('vue-web3')
import { ethers } from "ethers";
import abi from "../util/abi.json";

export default {
  name: "HeroComponent",
  data() {
    return {
      data: {
        web3: null,
      },
    };
  },
  components: {
    HeroItemCard,
  },
  methods: {
    async connect({ commit, dispatch }, connect) {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          commit("setError", "Metamask not installed!");
          return;
        }
        if (!(await dispatch("checkIfConnected")) && connect) {
          await dispatch("requestAccess");
        }
        await dispatch("checkNetwork");
        await dispatch("fetchNFTMetadata");
        await dispatch("setupEventListeners");
      } catch (error) {
        console.log(error);
        commit("setError", "Account request refused.");
      }
    },
    async setupEventListeners() {
      try {
        // const connectedContract = await dispatch("getContract");
        // if (!connectedContract) return;
        // connectedContract
        // .on
        // "CharacterNFTMinted",
        // async (from, tokenId, characterIndex) => {
        //   console.log(
        //     `CharacterNFTMinted - sender: ${from} tokenId: ${tokenId.toNumber()} characterIndex: ${characterIndex.toNumber()}`
        //   );
        //   const characterNFT = await connectedContract.checkIfUserHasNFT();
        //   console.log(characterNFT);
        //  // commit("setCharacterNFT", transformCharacterData(characterNFT));
        //   alert(
        //     `Your NFT is all done -- see it here: https://testnets.opensea.io/assets/${
        //       state.contract_address
        //     }/${tokenId.toNumber()}`
        //   );
        // }
        // ();
      } catch (error) {
        console.log(error);
      }
    },
    async mintCharacterNFT() {
      try {
        //const { ethereum } = window;
        const connectedContract = await this.getContract();
        // const provider = ethers.getDefaultProvider();
        console.log(connectedContract);
        const mintTxn = await connectedContract.mint(
          "0xDBf1641CC695cD07fDd94829c1dFa4BdC0F926c4",
          1,
          1,
          []
        );
        console.log("sdfdsf");
        await mintTxn.wait();
        //mintTxn.send(provider.defaultAccount);
      } catch (error) {
        console.log(error);
      }
    },

    async getContract() {
      try {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          "0xB1D9906F421E3C9B60BcD655fcc537d7A52c6030",
          abi,
          signer
        );
        console.log(connectedContract);
        return connectedContract;
      } catch (error) {
        console.log(error);
        console.log("connected contract not found");
        return null;
      }
    },
    // async loadWeb3() {
    //   if (window.ethereum) {
    //     this.web3 = new Web3(window.ethereum);
    //     await window.ethereum.enable();
    //   } else {
    //     window.alert("MetaMask not found!");
    //     return;
    //   }
    // },
  },
};
</script>

<style>
.custom-shape-divider-bottom-1650708023 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1650708023 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.custom-shape-divider-bottom-1650708023 .shape-fill {
  fill: #f5f7f6;
}

.wrapper {
  background-color: #e7f1f3;
  height: 100vh;
}

.bg-black-own {
  background-color: #101010;
}

.second-card {
  position: absolute;
  transform: translate(95%, 0px) scale(0.75);
}
</style>