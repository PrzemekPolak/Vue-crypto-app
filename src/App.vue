<script setup>
import SummaryChart from "./components/SummaryChart.vue";
import CurrentBalance from "./components/CurrentBalance.vue";
import SelectionSection from "./components/SelectionSection.vue";
import HeaderSection from "./components/HeaderSection.vue";
</script>

<template>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->

  <main>
    <div>
      <HeaderSection />
      <!-- 1c search
      2c notif
      3c menu icon -->
    </div>
    <div style="display: grid; gap: 32px">
      <CurrentBalance />
      <SummaryChart />
      <SelectionSection />
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: white;
  color: #0a041c;

  padding-left: 68px;
  padding-right: 68px;
}
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
