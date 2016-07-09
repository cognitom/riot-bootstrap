<app-inp-group>

  <h2>Input Groups</h2>

  <p>Use the <code>&lt;inp-group&gt;</code> and <code>&lt;inp-group-addon&gt;</code> elements.</p>

  <section>
    <inp-group>
      <inp-group-addon>$</inp-group-addon>
      <inp placeholder="0"></inp>
      <inp-group-addon>.00</inp-group-addon>
    </inp-group>
    <inp-group>
      <inp-group-addon>@</inp-group-addon>
      <inp placeholder="Username"></inp>
    </inp-group>
    <inp-group>
      <inp placeholder="first.last"></inp>
      <inp-group-addon>@gmail.com</inp-group-addon>
    </inp-group>
  </section>
  <highlight>
    &lt;inp-group&gt;<br>
      &nbsp;&nbsp;&lt;inp-group-addon&gt;$/in&lt;p-group-addon&gt;<br>
      &nbsp;&nbsp;&lt;inp placeholder="0"&gt;&lt;/inp&gt;<br>
      &nbsp;&nbsp;&lt;inp-group-addon&gt;.00&lt;/inp-group-addon&gt;<br>
    &lt;/inp-group&gt;<br>
    &lt;inp-group&gt;<br>
      &nbsp;&nbsp;&lt;inp-group-addon&gt;@&lt;/inp-group-addon&gt;<br>
      &nbsp;&nbsp;&lt;inp placeholder="Username"&gt;&lt;/inp&gt;<br>
    &lt;/inp-group&gt;<br>
    &lt;inp-group&gt;<br>
      &nbsp;&nbsp;&lt;inp placeholder="first.last"&gt;&lt;/inp&gt;<br>
      &nbsp;&nbsp;&lt;inp-group-addon&gt;@gmail.com&lt;/inp-group-addon&gt;<br>
    &lt;/inp-group&gt;<br>
  </highlight>

  <h3>Sizes</h3>

  <p>Fancy larger or smaller inputs? Set the <code>size</code> attributes for additional sizes: <code>lg</code>, <code>sm</code>, or <code>xs</code></p>

  <section>
    <p>
      <inp-group size="lg">
        <inp-group-addon>@</inp-group-addon>
        <inp value="{ value }" placeholder="Large input"></inp>
      </inp-group>
    </p>
    <p>
      <inp-group>
        <inp-group-addon>@</inp-group-addon>
        <inp value="{ value }" placeholder="Default input"></inp>
      </inp-group>
    </p>
    <p>
      <inp-group size="sm">
        <inp-group-addon>@</inp-group-addon>
        <inp value="{ value }" placeholder="Small input"></inp>
      </inp-group>
    </p>
    <p>
      <inp-group size="xs">
        <inp-group-addon>@</inp-group-addon>
        <inp value="{ value }" placeholder="Extra small input"></inp>
      </inp-group>
    </p>
  </section>

  <style scoped>
    :scope {
      display: block;
    }
  </style>

</app-inp-group>
