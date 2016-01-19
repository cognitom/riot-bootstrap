<app-dropdown>

  <h2>Dropdowns</h2>

  <p>Toggleable, contextual menu for displaying lists of links.</p>

  <section>
    <btn-group>
      <btn toggle="menu">Default <caret /></btn>
      <menu onselect={ select }>
        <menu-item value="action">Action</menu-item>
        <menu-item value="another">Another action</menu-item>
        <menu-item value="something">Something else here</menu-item>
        <menu-item value="separated">Separated link</menu-item>
      </menu>
    </btn-group>

    <btn-group>
      <btn toggle="menu" option="primary">Primary <caret /></btn>
      <menu onselect={ select }>
        <menu-item value="action">Action</menu-item>
        <menu-item value="another">Another action</menu-item>
        <menu-item value="something">Something else here</menu-item>
        <menu-item value="separated">Separated link</menu-item>
      </menu>
    </btn-group>

    <p class="comment">Selected: <strong>{ selected }</strong></p>
  </section><!--

  <highlight>
    &lt;btn-group&gt;<br>
    &nbsp;&lt;btn toggle="menu"&gt;Default &lt;caret /&gt;&lt;/btn&gt;<br>
    &nbsp;&lt;menu onselect=\{ select }&gt;<br>
    &nbsp;&nbsp;&lt;menu-item value="action"&gt;Action&lt;/menu-item&gt;<br>
    &nbsp;&nbsp;&lt;menu-item value="another"&gt;Another action&lt;/menu-item&gt;<br>
    &nbsp;&nbsp;&lt;menu-item value="something"&gt;Something else here&lt;/menu-item&gt;<br>
    &nbsp;&nbsp;&lt;menu-item value="separated"&gt;Separated link&lt;/menu-item&gt;<br>
    &nbsp;&lt;/menu&gt;<br>
    &lt;/btn-group&gt;
  </highlight>

  <h3>Headers</h3>

  <p>Add a header to label sections of actions in any dropdown menu.</p>

  <section>
    <btn-group>
      <btn toggle="menu">Default <caret /></btn>
      <menu>
        <menu-header>Dropdown header</menu-header>
        <menu-item value="action">Action</menu-item>
        <menu-item value="another">Another action</menu-item>
        <menu-item value="something">Something else here</menu-item>
        <menu-header>Dropdown header</menu-header>
        <menu-item value="separated">Separated link</menu-item>
      </menu>
    </btn-group>

    <btn-group>
      <btn toggle="menu" option="primary">Primary <caret /></btn>
      <menu>
        <menu-header>Dropdown header</menu-header>
        <menu-item value="action">Action</menu-item>
        <menu-item value="another">Another action</menu-item>
        <menu-item value="something">Something else here</menu-item>
        <menu-header>Dropdown header</menu-header>
        <menu-item value="separated">Separated link</menu-item>
      </menu>
    </btn-group>
  </section>
  <highlight>
    &lt;btn-group&gt;<br>
    &nbsp;&lt;btn toggle="menu"&gt;Default &lt;caret /&gt;&lt;/btn&gt;<br>
    &nbsp;&lt;menu&gt;<br>
    &nbsp;&nbsp;&lt;menu-header&gt;Dropdown header&lt;/menu-header&gt;<br>
    &nbsp;&nbsp;&lt;menu-item value="action"&gt;Action&lt;/menu-item&gt;<br>
    &nbsp;&nbsp;...<br>
    &nbsp;&lt;/menu&gt;<br>
    &lt;/btn-group&gt;
  </highlight>

  <h3>Divider</h3>

  <p>Add a divider to separate series of links in a dropdown menu.</p>

  <section>
    <btn-group>
      <btn toggle="menu">Default <caret /></btn>
      <menu>
        <menu-item value="action">Action</menu-item>
        <menu-item value="another">Another action</menu-item>
        <menu-item value="something">Something else here</menu-item>
        <menu-divider></menu-divider>
        <menu-item value="separated">Separated link</menu-item>
      </menu>
    </btn-group>

    <btn-group>
      <btn toggle="menu" option="primary">Primary <caret /></btn>
      <menu>
        <menu-item value="action">Action</menu-item>
        <menu-item value="another">Another action</menu-item>
        <menu-item value="something">Something else here</menu-item>
        <menu-divider></menu-divider>
        <menu-item value="separated">Separated link</menu-item>
      </menu>
    </btn-group>
  </section>

  <highlight>
    &lt;btn-group&gt;<br>
    &nbsp;&lt;btn toggle="menu"&gt;Default &lt;caret /&gt;&lt;/btn&gt;<br>
    &nbsp;&lt;menu&gt;<br>
    &nbsp;&nbsp;...<br>
    &nbsp;&nbsp;&lt;menu-divider&gt;&lt;/menu-divider&gt;<br>
    &nbsp;&nbsp;...<br>
    &nbsp;&lt;/menu&gt;<br>
    &lt;/btn-group&gt;
  </highlight>

  <h3>Split button dropdowns</h3>

  <section>
    <btn-group>
      <btn>Default</btn>
      <btn toggle="menu"><caret /></btn>
      <menu>
        <menu-item value="action">Action</menu-item>
        <menu-item value="another">Another action</menu-item>
        <menu-item value="something">Something else here</menu-item>
        <menu-divider></menu-divider>
        <menu-item value="separated">Separated link</menu-item>
      </menu>
    </btn-group>

    <btn-group>
      <btn option="primary">Primary</btn>
      <btn toggle="menu" option="primary"><caret /></btn>
      <menu>
        <menu-item value="action">Action</menu-item>
        <menu-item value="another">Another action</menu-item>
        <menu-item value="something">Something else here</menu-item>
        <menu-divider></menu-divider>
        <menu-item value="separated">Separated link</menu-item>
      </menu>
    </btn-group>
  </section>

  <highlight>
    &lt;btn-group&gt;<br>
    &nbsp;&lt;btn&gt;Default&lt;/btn&gt;<br>
    &nbsp;&lt;btn toggle="menu"&gt;&lt;caret /&gt;&lt;/btn&gt;<br>
    &nbsp;&lt;menu&gt;<br>
    &nbsp;&nbsp;...<br>
    &nbsp;&lt;/menu&gt;<br>
    &lt;/btn-group&gt;
  </highlight>-->

  <script>
    this.selected = 'none'
    this.select = e => {
      this.selected = e.target.value
    }
  </script>

  <style scoped>
    :scope {
      display: block;
    }
  </style>

</app-dropdown>
