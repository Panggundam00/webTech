<template>
  <div>
    <br/>
    <h1>Donation Applicant</h1>
    <br/>
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Organization Name</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" />
      </div>

      <br />
      <div class="form-group">
        <label for="exampleFormControlSelect1">Purpose</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Conflagration</option>
          <option>Flood</option>
        </select>
      </div>


      <br/>
      <div class="form-row">
        <div class="form-group col-md-9">
          <label for="inputState">Product</label>
          <select id="inputState" class="form-control">
            <option selected>Supply 1</option>
            <option>Supply 2</option>
            <option>Supply 3</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="inputZip">Quantity</label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
      </div>

      <br />
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Explain The Reason</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
form {
  margin: auto;
  width: 40rem;
}
</style>