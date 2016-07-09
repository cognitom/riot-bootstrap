<app-inp>

  <h2>Inputs</h2>

  <p>Use the <code>&lt;inp&gt;</code> elements.</p>

  <section>
    <inp placeholder="Enabled input"></inp>
    <inp disabled placeholder="Disabled input"></inp>
    <inp disabled="disabled" placeholder="Disabled input"></inp>
    <inp disabled={ false } placeholder="Enabled input"></inp>
    <inp disabled={ true } placeholder="Disabled input"></inp>
  </section>
  <highlight>
    &lt;inp&gt;&lt;/inp&gt;<br>
    &lt;inp disabled&gt;&lt;/inp&gt;<br>
    &lt;inp disabled="disabled"&gt;&lt;/inp&gt;<br>
    &lt;inp disabled=\{ false }&gt;&lt;/inp&gt;<br>
    &lt;inp disabled=\{ true }&gt;&lt;/inp&gt;
  </highlight>

  <h3>Example</h3>

  <section>
    <p>
      <inp value={ inputValue } placeholder="No value entered" onkeyup={ keyup }></inp>
    </p>
    <p>
      <span><strong>Value:</strong> { inputValue }</span>
    </p>
  </section>
  <highlight>
    &lt;p&gt;<br>
      &nbsp;&nbsp;&lt;inp value=\{ inputValue } placeholder="No value entered" onkeyup=\{ keyup }&gt;&lt;/inp&gt;<br>
    &lt;/p&gt;<br>
    &lt;p&gt;<br>
      &nbsp;&nbsp;&lt;span&gt;&lt;strong&gt;Value:&lt;/strong&gt; \{ inputValue }&lt;/span&gt;<br>
    &lt;/p&gt;<br>
    <br>
    &lt;script&gt;<br>
      &nbsp;&nbsp;this.inputValue = "Some value"<br>
    <br>
      &nbsp;&nbsp;this.keyup = e =&gt; {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;this.inputValue = e.target.value;<br>
      &nbsp;&nbsp;}<br>
    &lt;/script&gt;
  </highlight>

  <h3>Sizes</h3>

  <p>Fancy larger or smaller inputs? Set the <code>size</code> attributes for additional sizes: <code>lg</code>, <code>sm</code>, or <code>xs</code></p>

  <section>
    <p>
      <inp size="lg" placeholder="Large input"></inp>
    </p>
    <p>
      <inp placeholder="Default input"></inp>
    </p>
    <p>
      <inp size="sm" placeholder="Small input"></inp>
    </p>
    <p>
      <inp size="xs" placeholder="Extra small input"></inp>
    </p>
  </section>

  <style scoped>
    :scope {
      display: block;
    }
  </style>

  <script>
    this.inputValue = "Some value"

    this.keyup = e => {
      this.inputValue = e.target.value;
    }
  </script>
</app-inp>
