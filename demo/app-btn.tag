<app-btn>

  <h2>Buttons</h2>

  <p>Use the <code>&lt;btn&gt;</code> elements.</p>

  <h3>Disabled</h3>

  <section>
    <btn>Normal</btn>
    <btn disabled>Disabled</btn>
    <btn disabled="disabled">Disabled</btn>
    <btn disabled={ false }>Normal</btn>
    <btn disabled={ true }>Disabled</btn>
  </section>
  <highlight>
    &lt;btn&gt;Normal&lt;/btn&gt;<br>
    &lt;btn disabled&gt;Disabled&lt;/btn&gt;<br>
    &lt;btn disabled="disabled"&gt;Disabled&lt;/btn&gt;<br>
    &lt;btn disabled=\{ false }&gt;Normal&lt;/btn&gt;<br>
    &lt;btn disabled=\{ true }&gt;Disabled&lt;/btn&gt;
  </highlight>

  <h3>Active (pushed)</h3>

  <section>
    <btn>Normal</btn>
    <btn active>Active</btn>
    <btn active="active">Active</btn>
    <btn active={ false }>Normal</btn>
    <btn active={ true }>Active</btn>
  </section>
  <highlight>
    &lt;btn&gt;\Normal&lt;/btn&gt;<br>
    &lt;btn active&gt;\Active&lt;/btn&gt;<br>
    &lt;btn active="active"&gt;\Active&lt;/btn&gt;<br>
    &lt;btn active=\{ false }&gt;Normal&lt;/btn&gt;<br>
    &lt;btn active=\{ true }&gt;Active&lt;/btn&gt;
  </highlight>

  <h3>Events</h3>

  <section>
    <btn onclick={ click }>{ message }</btn>
    <btn onclick={ send } disabled={ isSending }>Send something!</btn>
  </section>
  <highlight>
    &lt;btn onclick=\{ click }&gt;\{ message }&lt;/btn&gt;<br>
    &lt;btn onclick=\{ send } disabled=\{ isSending }&gt;\Send something!&lt;/btn&gt;<br>
  </highlight>

  <h3>Options</h3>

  <p>Use any of the available button <code>option</code> to quickly create a styled button.</p>

  <section>
    <btn>Default</btn>
    <btn option="primary">Primary</btn>
    <btn option="success">Success</btn>
    <btn option="info">Info</btn>
    <btn option="warning">Warning</btn>
    <btn option="danger">Danger</btn>
    <btn option="link">Link</btn>
  </section>

  <highlight>
    &lt;btn&gt;Default&lt;/btn&gt;<br>
    &lt;btn option="primary"&gt;Primary&lt;/btn&gt;<br>
    &lt;btn option="success"&gt;Success&lt;/btn&gt;<br>
    &lt;btn option="info"&gt;Info&lt;/btn&gt;<br>
    &lt;btn option="warning"&gt;Warning&lt;/btn&gt;<br>
    &lt;btn option="danger"&gt;Danger&lt;/btn&gt;<br>
    &lt;btn option="link"&gt;Link&lt;/btn&gt;
  </highlight>

  <h3>Sizes</h3>

  <p>Fancy larger or smaller buttons? Set the <code>size</code> attributes for additional sizes: <code>lg</code>, <code>sm</code>, or <code>xs</code></p>

  <section>
    <p>
      <btn option="primary" size="lg">Large button</btn>
      <btn size="lg">Large button</btn>
    </p>
    <p>
      <btn option="primary">Default button</btn>
      <btn>Default button</btn>
    </p>
    <p>
      <btn option="primary" size="sm">Small button</btn>
      <btn size="sm">Small button</btn>
    </p>
    <p>
      <btn option="primary" size="xs">Extra small button</btn>
      <btn size="xs">Extra small button</btn>
    </p>
  </section>

  <highlight>
    &lt;btn option="primary" size="lg"&gt;Large button&lt;/btn&gt;<br>
    &lt;btn size="lg"&gt;Large button&lt;/btn&gt;<br>
    <br>
    &lt;btn option="primary"&gt;Default button&lt;/btn&gt;<br>
    &lt;btn&gt;Default button&lt;/btn&gt;<br>
    <br>
    &lt;btn option="primary" size="sm"&gt;Small button&lt;/btn&gt;<br>
    &lt;btn size="sm"&gt;Small button&lt;/btn&gt;<br>
    <br>
    &lt;btn option="primary" size="xs"&gt;Extra small button&lt;/btn&gt;<br>
    &lt;btn size="xs"&gt;Extra small button&lt;/btn&gt;<br>
  </highlight>

  <h3>Simple link</h3>

  <section>
    <btn href="https://github.com/cognitom/riot-bootstrap">Go to repo</btn>
  </section>
  <highlight>
    &lt;btn href="https://github.com/cognitom/riot-bootstrap"&gt;Go to repo&lt;/btn&gt;<br>
  </highlight>

  <script>
    this.message = 'Click me!'
    this.isSending = false

    this.click = e => {
      this.message = 'Thanks.'
    }

    this.send = e => {
      this.isSending = true
    }
  </script>

  <style scoped>
    :scope {
      display: block;
    }
  </style>

</app-btn>
