<template>
  <!-- Modal -->
  <div
    class="modal"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-slideout modal-dialog-scrollable">
      <div class="modal-content">
        <!-- <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button> -->

        <div class="modal-body bg-dark text-white">
          <div
            @click="checkClick"
            ref="invoiceWrap"
            class="invoice-wrap d-flex flex-column gap-2"
          >
            <form @submit.prevent="submitForm" class="invoice-content">
              <h1>New Invoice</h1>

              <!-- Bill From -->
              <div class="bill-form d-flex flex-column">
                <h4>Bill From</h4>
                <div class="input d-flex flex-column">
                  <label for="billerStreetAddress">Street Address</label>
                  <input
                    type="text"
                    required
                    id="billerStreetAddress"
                    v-model="billerStreetAddress"
                  />
                </div>
                <!-- location -->
                <div class="location-detail row">
                  <div class="input col-4 d-flex flex-column">
                    <label for="billerCity">City</label>
                    <input
                      type="text"
                      required
                      id="billerCity"
                      v-model="billerCity"
                    />
                  </div>
                  <div class="input col-4 d-flex flex-column">
                    <label for="billerZipCode">ZipCode</label>
                    <input
                      type="text"
                      required
                      id="billerZipCode"
                      v-model="billerZipCode"
                    />
                  </div>
                  <div class="input col-4 d-flex flex-column">
                    <label for="billerCountry">Country</label>
                    <input
                      type="text"
                      required
                      id="billerCountry"
                      v-model="billerCountry"
                    />
                  </div>
                </div>
                <!-- end Location Biller -->
              </div>

              <!-- Bill To -->
              <div class="bill-to d-flex flex-column">
                <h4>Bill To</h4>

                <div class="input d-flex flex-column">
                  <label for="clientName">Client's Name</label>
                  <input
                    type="text"
                    required
                    id="clientName"
                    v-model="clientName"
                  />
                </div>
                <div class="input d-flex flex-column">
                  <label for="clientEmail">Client's Email</label>
                  <input
                    type="text"
                    required
                    id="clientEmail"
                    v-model="clientEmail"
                  />
                </div>
                <div class="input d-flex flex-column">
                  <label for="clientStreetAddress">Street Address</label>
                  <input
                    type="text"
                    required
                    id="clientStreetAddress"
                    v-model="clientStreetAddress"
                  />
                </div>

                <!-- location Client -->
                <div class="location-detail row">
                  <div class="input col-4 d-flex flex-column">
                    <label for="clientCity">City</label>
                    <input
                      type="text"
                      required
                      id="clientCity"
                      v-model="clientCity"
                    />
                  </div>
                  <div class="input col-4 d-flex flex-column">
                    <label for="clientZipCode">ZipCode</label>
                    <input
                      type="text"
                      required
                      id="clientZipCode"
                      v-model="clientZipCode"
                    />
                  </div>
                  <div class="input col-4 d-flex flex-column">
                    <label for="clientCountry">Country</label>
                    <input
                      type="text"
                      required
                      id="clientCountry"
                      v-model="clientCountry"
                    />
                  </div>
                </div>
                <!-- end Location Client -->
              </div>

              <!-- Invoice Woek Detail -->
              <div class="invoice-work d-flex flex-column">
                <!-- payment Date -->
                <div class="payment row">
                  <div class="input col-6 d-flex flex-column">
                    <label for="invoiceDate">Invoice Date</label>
                    <input
                      type="text"
                      id="invoiceDate"
                      v-model="invoiceDate"
                      disabled
                    />
                  </div>
                  <div class="input col-6 d-flex flex-column">
                    <label for="paymentDueDate">Payment Due</label>
                    <input
                      type="text"
                      id="paymentDueDate"
                      v-model="paymentDueDate"
                    />
                  </div>
                </div>
                <!-- end payment date -->
                <div class="input d-flex flex-column">
                  <label for="paymentTerms">Payment Terms</label>
                  <select
                    type="text"
                    id="paymentTerms"
                    v-model="paymentTerms"
                    required
                  >
                    <option value="30">Net 30 Days</option>
                    <option value="60">Net 60 Days</option>
                  </select>
                </div>
                <div class="input d-flex flex-column">
                  <label for="productDescription">Product Description</label>
                  <input
                    type="text"
                    id="productDescription"
                    v-model="productDescription"
                    required
                  />
                </div>
                <div class="work-items">
                  <h3>Item List</h3>

                  <table class="item-list">
                    <tr class="table-heading d-flex">
                      <th class="item-name">Item Name</th>
                      <th class="qty">Qty</th>
                      <th class="price">Price</th>
                      <th class="total">Total</th>
                    </tr>

                    <tr
                      class="table-items d-flex"
                      v-for="(item, index) in invoiceItemList"
                      :key="index"
                    >
                      <td class="item-name">
                        <input type="text" v-model="item.itemName" />
                      </td>
                      <td class="qty">
                        <input type="number" v-model="item.qty" />
                      </td>
                      <td class="price">
                        <input type="number" v-model="item.price" />
                      </td>
                      <td class="total">
                        ${{ (item.total = item.qty * item.price) }}
                      </td>
                      <img
                        @click="deleteInvoiceItem(item.id)"
                        src="@/assets/icon-delete.svg"
                        alt="icon delete"
                      />
                    </tr>
                  </table>
                  <div
                    @click="addNewInvoiceItem"
                    class="d-flex btn btn-primary"
                  >
                    <img
                      src="@/assets/icon-plus.svg"
                      width="10"
                      height="10"
                      alt="icon tambah"
                    />
                    Add New Item
                  </div>
                </div>
              </div>

              <!-- Save/Exit -->
              <div class="save d-flex">
                <div class="left"></div>
                <div class="right"></div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Closeanjrit
          </button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "invoiceModal",
  data() {
    return {
      billerStreetAddress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentTerms: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      productDescription: null,
      invoicePending: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0,
    };
  },
};
</script>

<style>
.modal-dialog.modal-dialog-slideout {
  position: fixed;
  top: 0;
  left: -100%; /* Tempatkan modal di luar tampilan di sebelah kiri */
  margin: 0;
  height: 100%;
  max-width: 400px; /* Lebar maksimum modal, bisa disesuaikan */
  width: 100%;
  transition: left 0.3s ease; /* Transisi geser dari kiri */
}

.modal.show .modal-dialog.modal-dialog-slideout {
  left: 0;
}

.modal-content {
  height: 100%;
  border-radius: 0; /* Hapus radius border jika diinginkan */
  position: absolute;
  left: 0;
  width: 100%;
  max-width: 400px; /* Lebar maksimum modal, harus sesuai dengan modal-dialog */
}
</style>
