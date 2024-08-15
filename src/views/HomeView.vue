<template>
  <div class="home container-invoice">
    <div class="header d-flex justify-content-center align-item-center">
      <div class="left d-flex flex-column text-white">
        <h1>Invoice</h1>
        <p>There are 4 total invoice</p>
      </div>
      <div class="right d-flex align-items-center justify-content-end">
        <!-- filter -->
        <div class="btn-group">
          <button
            type="button"
            class="bg-dark border-0 text-white dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter by status
          </button>
          <ul class="filter dropdown-menu fs-6 dropdown-menu-end rounded-2">
            <li><a class="dropdown-item" href="#">Draft</a></li>
            <li><a class="dropdown-item" href="#">Pending</a></li>
            <li><a class="dropdown-item" href="#">Paid</a></li>
            <li><a class="dropdown-item" href="#">Clear Filter</a></li>
          </ul>
        </div>
        <!-- new invoice -->
        <button
          @click="newInvoice"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          class="btn btn-new btn-primary text-white d-flex align-items-center gap-2"
        >
          <div
            class="d-flex bg-white rounded-circle justify-content-center align-items-center p-2"
          >
            <img
              src="@/assets/icon-plus.svg"
              alt="tombol tambah invoicer"
              width="10"
              height="10px"
            />
          </div>
          <span class="fs-6">New Invoice</span>
        </button>
      </div>
    </div>
    <InvoiceModal />
  </div>
</template>

<script>
import InvoiceModal from "@/components/InvoiceModal.vue";

export default {
  name: "Home",
  components: {
    InvoiceModal,
  },
  data() {
    return {
      modalInovice: null,
    };
  },
  methods: {
    newInvoice() {
      this.modalInovice = !this.modalInovice;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 65px;

  .left,
  .right {
    flex: 1;
  }
  .right {
    gap: 40px;
  }
}
.filter {
  width: 120px;
  background-color: #1e2139;

  a {
    color: white;
    &:hover {
      color: #1e2139;
    }
  }
}
.btn-new {
  padding: 8px 10px;
}
</style>
