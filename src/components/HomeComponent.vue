<template>
  <v-container>
    <v-responsive
      class="align-centerfill-height mx-auto"
    >
      <div class="header-txt text-center fontPM">
        Official Apprentice Token
      </div>
      <div class="d-flex justify-center">
        <div>
          <v-img
            class="mb-4"
            width="500"
            src="@/assets/official-apprentice.jpeg"
          />
        </div>
      </div>

      <div class="d-flex justify-center my-10">
        <v-divider></v-divider>
      </div>

      <div class="textOpenSans text-center">
        The <span class="fontPM">Official Apprentice Token</span> is the ultimate community flex. No VC backing, no corporate strings—just a crew of
        real ones coming together to build something iconic from the ground up. Powered entirely by the community,
        every move, every setup, every decision was made by the people, for the people, with a dev who’s 100% on their
        side. Fully decentralized, transparent, and unapologetically bold—this token proves that when the community moves,
        the game changes.
      </div>
      <div class="d-flex justify-center mt-10 mb-7">
        <v-divider></v-divider>
      </div>
      <div class="text-center mb-6">
        <span class="fontPM" style="font-size: 20px;"> community links </span>
      </div>
      <v-row align="center" class="ga-7" justify="center">
        <v-col cols="auto">
          <!-- Telegram Button -->
          <v-btn
            size="50"
            flat
            color="white"
            @click="openLink('https://t.me/OfficalApprentice')"
          >
            <v-icon
              size="50"
            >
              fa-brands
              fa-telegram
            </v-icon>
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <!-- Twitter Button -->
          <v-btn
            size="50"
            flat
            color="white"
            @click="openLink('https://twitter.com')"
          >
            <v-icon size="50">fa-brands  fa-x-twitter</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <!-- DexScreener Button -->
          <v-btn size="50" flat color="white" @click="openLink('https://pump.fun/coin/4JWL1QDsPgJDHEovzvo4K875j85ybu3jPdnE34bxpump')">
            <v-icon size="40">
              <img src="@/assets/Pump_fun_logo.png" style="width: 100%;" alt="pumpfun" />
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <!-- DexScreener Button -->
          <v-btn size="50" flat color="white" @click="openLink('https://dexscreener.com/solana/7r1wcdfgqfiorpjw91zoe3uvzoupv76akgecgqq4f6ef')">
            <v-icon size="40">
              <img src="@/assets/dex-screener-seeklogo.svg" style="width: 100%;" alt="dexscreener" />
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <div class="d-flex justify-center my-10">
        <v-divider></v-divider>
      </div>
      <div class="text-center mb-6">
        <span class="fontPM" style="font-size: 24px;"> Tokenomics </span>
      </div>
      <div class="text-center mb-8">
        <div class="col-12 mb-2">
          Supply
        </div>
        <div class="textOpenSans font-weight-bold" >
          1,000,000,000 ( 1 Billion )
        </div>
      </div>

      <div class="text-center mb-8">
        <div class="col-12 mb-2">
          Launchpad
        </div>
        <div class="textOpenSans font-weight-bold" >
          Pump.fun
        </div>
      </div>
      <div class="text-center mb-8">
        <div class="col-12 mb-2">
          Token Address
        </div>
        <div class="textOpenSans font-weight-bold" >
          <a href="https://solscan.io/token/4JWL1QDsPgJDHEovzvo4K875j85ybu3jPdnE34bxpump">4JWL1QDsPgJDHEovzvo4K875j85ybu3jPdnE34bxpump</a>
        </div>
      </div>
      <div class="d-flex justify-center my-14">
        <v-divider></v-divider>
      </div>
      <div class="v-row justify-center mt-4">
        <div class="v-col-12 text-center font-italic powered-by-txt">Powered By — </div>
        <div
          class="v-col-auto"
        >

          <a
            class="text-decoration-none"
            href=" https://t.me/+mJExH8tmqHRhZGE5"
            rel="noopener noreferrer"
            target="_blank"
          >
            <v-img
              src="@/assets/antirug.jpeg"
              width="50"
            ></v-img>
          </a>
        </div>
      </div>
<!--      <div class="d-flex justify-center my-10">-->
<!--        <v-divider></v-divider>-->
<!--      </div>-->
<!--      <div class="text-center mb-6">-->
<!--        <span class="fontPM" style="font-size: 24px;"> Where To Buy </span>-->
<!--      </div>-->
<!--      <v-row>-->
<!--        <v-col cols="12" md="3">-->
<!--          <v-btn-->
<!--            rounded-->
<!--            variant="outlined"-->
<!--            dark-->
<!--            height="100"-->
<!--            style="width: 100%;"-->
<!--            icon=""-->
<!--            @click="openLink('https://raydium.io')"-->
<!--          >-->
<!--            Raydium-->
<!--          </v-btn>-->
<!--        </v-col>-->
<!--        <v-col cols="12" md="3">-->
<!--          <v-btn-->
<!--            rounded-->
<!--            variant="outlined"-->
<!--            dark-->
<!--            height="100"-->
<!--            style="width: 100%;"-->
<!--            icon=""-->
<!--            @click="openLink('https://raydium.io')"-->
<!--          >-->
<!--            Raydium-->
<!--          </v-btn>-->
<!--        </v-col>-->
<!--      </v-row>-->
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  const openLink = (link) => {
    window.open(link)
  }
</script>
