<script>
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    Navigation,
  },
};
</script>
<template>
  <div>
    <div class="app d-flex bg-dark flex-column flex-lg-row">
      <Navigation />
      <div class="app-content py-0 px-4 position-relative d-flex flex-column">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  min-height: 100vh;
  @media (min-width: 912px) {
  }
  .app-content {
    flex: 1;
  }
}

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: "Poppins", sans-serif;
//   background-color: #141625;
// }

// button,
// .button {
//   cursor: pointer;
//   padding: 16px 24px;
//   border-radius: 30px;
//   border: none;
//   font-size: 12px;
//   margin-right: 8px;
//   color: #fff;
// }

// .dark-purple {
//   background-color: #252945;
// }

// .red {
//   background-color: #ec5757;
// }

// .purple {
//   background-color: #7c5dfa;
// }

// .green {
//   background-color: #33d69f;
// }

// .orange {
//   background-color: #ff8f00;
// }

// // utility classes

// .flex {
//   display: flex;
// }

// .flex-column {
//   flex-direction: column;
// }

// .container {
//   width: 100%;
//   padding: 40px 10px;
//   max-width: 850px;
//   margin: 0 auto;

//   @media (min-width: 900px) {
//     padding-top: 72px;
//   }
// }

// .nav-link {
//   text-decoration: none;
//   color: initial;
// }

// // Status Button Styling

// .status-button {
//   &::before {
//     content: "";
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     margin-right: 8px;
//   }
//   font-size: 12px;
//   margin-right: 30px;
//   align-items: center;
//   padding: 8px 30px;
//   border-radius: 10px;
// }

// .paid {
//   &::before {
//     background-color: #33d69f;
//   }
//   color: #33d69f;
//   background-color: rgba(51, 214, 160, 0.1);
// }

// .pending {
//   &::before {
//     background-color: #ff8f00;
//   }
//   color: #ff8f00;
//   background-color: rgba(255, 145, 0, 0.1);
// }

// .draft {
//   &::before {
//     background-color: #dfe3fa;
//   }
//   color: #dfe3fa;
//   background-color: rgba(223, 227, 250, 0.1);
// }
</style>
