<app-radio-group>

  <h2>Radio groups</h2>

  <p>Group a series of radio buttons together on a single line. </p>

  <section>
    <radio-group name="position" value={ position } onchange={ change }>
      <radio value="first">First</radio>
      <radio value="second">Second</radio>
      <radio value="third">Third</radio>
    </radio-group>
    <p class="comment">Your selection is <strong>{ position }</strong>.</p>
  </section>

  <highlight>
    &lt;radio-group name=\{ position } value=\{ position } onchange=\{ change }&gt;<br>
    &nbsp;&lt;radio value="first"&gt;First&lt;/radio&gt;<br>
    &nbsp;&lt;radio value="second"&gt;Second&lt;/radio&gt;<br>
    &nbsp;&lt;radio value="third"&gt;Third&lt;/radio&gt;<br>
    &lt;/radio-group&gt;
  </highlight>

  <script>
    this.position = 'first'

    this.change = e => {
      this.position = e.target.value
    }
  </script>

  <style scoped>
    :scope {
      display: block;
    }
  </style>

</app-radio-group>
