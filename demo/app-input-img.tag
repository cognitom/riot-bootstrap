<app-input-img>

  <h2>Input Image</h2>

  <p>Missing input element for image.</p>

  <section>
    <input-img value={ image } onchange={ change } />
    <p class="comment">{ comment }</p>
  </section>

  <highlight>
    &lt;input-img name="profile" placeholder="some.png" onchange=\{ change } /&gt;
  </highlight>

  <script>
    this.image = "https://avatars1.githubusercontent.com/u/16032?v=3&s=100"
    this.comment = 'Drag your image here!'

    this.change = e => {
      this.image = e.target.value
      console.log(this.image)
      this.comment = 'Image dropped!'
    }
  </script>

  <style scoped>
    :scope {
      display: block;
    }
  </style>

</app-input-img>
