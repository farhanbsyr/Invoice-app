<template>
  <header class="d-flex z-3 flex-row flex-lg-column bg-dark-pluss">
    <div class="branding d-flex bg-primary justify-content-center p-4">
      <img
        src="@/assets/file-invoice-dollar-solid.png"
        width="auto"
        height="30px"
        alt="icon dollar "
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<style lang="scss" scoped>
header {
  background-color: #1e2139;
  @media (min-width: 912px) {
    min-height: 100%;
    min-width: 90px;
    border-radius: 0 20px 20px 0;
  }
  .branding {
    border-radius: 0 20px 20px 0;
    @media (min-width: 912px) {
      height: auto; /* or a specific height */
      align-self: flex-start;
      width: 100%;
    }
  }
}
</style>
