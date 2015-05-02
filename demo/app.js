riot.tag('app-btn-group', '<h2>Button groups</h2> <p>Group a series of buttons together on a single line with the button group. </p> <section> <btn-group> <btn onpush="{ pushL }">Left</btn> <btn onpush="{ pushM }">Middle</btn> <btn onpush="{ pushR }">Right</btn> </btn-group> <p class="comment">{ comment }</p> </section> <highlight> &lt;btn-group&gt;<br> &nbsp;&lt;btn onpush=&#123; pushL &#125;&gt;Left&lt;/btn&gt;<br> &nbsp;&lt;btn onpush=&#123; pushM &#125;&gt;Middle&lt;/btn&gt;<br> &nbsp;&lt;btn onpush=&#123; pushR &#125;&gt;Right&lt;/btn&gt;<br> &lt;/btn-group&gt; </highlight>', 'app-btn-group { display: block; }', function(opts) {
    this.comment = 'Click me!'

    this.pushL = function(e) {
      this.comment = 'Left button was clicked.'
    }.bind(this);
    this.pushM = function(e) {
      this.comment = 'Middle button was clicked.'
    }.bind(this);
    this.pushR = function(e) {
      this.comment = 'Right button was clicked.'
    }.bind(this);
  
});

riot.tag('app-btn', '<h2>Buttons</h2> <p>Use the <code>&lt;btn&gt;</code> elements.</p> <section> <btn >Active</btn> <btn disabled>Disabled</btn> </section> <highlight> &lt;btn&gt;Active&lt;/btn&gt;<br> &lt;btn disabled&gt;Disabled&lt;/btn&gt; </highlight> <h3>Events</h3> <section> <btn onpush="{ push }">{ message }</btn> </section> <highlight> &lt;btn onpush=&#123; push &#125;&gt;&#123; message &#125;&lt;/btn&gt;<br> </highlight> <h3>Options</h3> <p>Use any of the available button <code>option</code> to quickly create a styled button.</p> <section> <btn>Default</btn> <btn option="primary">Primary</btn> <btn option="success">Success</btn> <btn option="info">Info</btn> <btn option="warning">Warning</btn> <btn option="danger">Danger</btn> <btn option="link">Link</btn> </section> <highlight> &lt;btn&gt;Default&lt;/btn&gt;<br> &lt;btn option="primary"&gt;Primary&lt;/btn&gt;<br> &lt;btn option="success"&gt;Success&lt;/btn&gt;<br> &lt;btn option="info"&gt;Info&lt;/btn&gt;<br> &lt;btn option="warning"&gt;Warning&lt;/btn&gt;<br> &lt;btn option="danger"&gt;Danger&lt;/btn&gt;<br> &lt;btn option="link"&gt;Link&lt;/btn&gt; </highlight> <h3>Sizes</h3> <p>Fancy larger or smaller buttons? Set the <code>size</code> attributes for additional sizes: <code>lg</code>, <code>sm</code>, or <code>xs</code></p> <section> <p> <btn option="primary" size="lg">Large button</btn> <btn size="lg">Large button</btn> </p> <p> <btn option="primary">Default button</btn> <btn>Default button</btn> </p> <p> <btn option="primary" size="sm">Small button</btn> <btn size="sm">Small button</btn> </p> <p> <btn option="primary" size="xs">Extra small button</btn> <btn size="xs">Extra small button</btn> </p> </section> <highlight> &lt;btn option="primary" size="lg"&gt;Large button&lt;/btn&gt;<br> &lt;btn size="lg"&gt;Large button&lt;/btn&gt;<br> <br> &lt;btn option="primary"&gt;Default button&lt;/btn&gt;<br> &lt;btn&gt;Default button&lt;/btn&gt;<br> <br> &lt;btn option="primary" size="sm"&gt;Small button&lt;/btn&gt;<br> &lt;btn size="sm"&gt;Small button&lt;/btn&gt;<br> <br> &lt;btn option="primary" size="xs"&gt;Extra small button&lt;/btn&gt;<br> &lt;btn size="xs"&gt;Extra small button&lt;/btn&gt;<br> </highlight>', 'app-btn { display: block; }', function(opts) {
    this.message = 'Click me!'

    this.push = function(e) {
      this.message = 'Thanks.'
    }.bind(this);
  
});

riot.tag('app-dropdown', '<h2>Dropdowns</h2> <p>Toggleable, contextual menu for displaying lists of links.</p> <section> <btn-group> <btn toggle="menu">Default <caret ></caret></btn> <menu onselect="{ select }"> <menu-item value="action">Action</menu-item> <menu-item value="another">Another action</menu-item> <menu-item value="something">Something else here</menu-item> <menu-item value="separated">Separated link</menu-item> </menu> </btn-group> <btn-group> <btn toggle="menu" option="primary">Primary <caret ></caret></btn> <menu onselect="{ select }"> <menu-item value="action">Action</menu-item> <menu-item value="another">Another action</menu-item> <menu-item value="something">Something else here</menu-item> <menu-item value="separated">Separated link</menu-item> </menu> </btn-group> <p class="comment">Selected: <strong>{ selected }</strong></p> </section> <highlight> &lt;btn-group&gt;<br> &nbsp;&lt;btn toggle="menu"&gt;Default &lt;caret /&gt;&lt;/btn&gt;<br> &nbsp;&lt;menu onselect=&#123; select &#125;&gt;<br> &nbsp;&nbsp;&lt;menu-item value="action"&gt;Action&lt;/menu-item&gt;<br> &nbsp;&nbsp;&lt;menu-item value="another"&gt;Another action&lt;/menu-item&gt;<br> &nbsp;&nbsp;&lt;menu-item value="something"&gt;Something else here&lt;/menu-item&gt;<br> &nbsp;&nbsp;&lt;menu-item value="separated"&gt;Separated link&lt;/menu-item&gt;<br> &nbsp;&lt;/menu&gt;<br> &lt;/btn-group&gt; </highlight> <h3>Headers</h3> <p>Add a header to label sections of actions in any dropdown menu.</p> <section> <btn-group> <btn toggle="menu">Default <caret ></caret></btn> <menu> <menu-header>Dropdown header</menu-header> <menu-item value="action">Action</menu-item> <menu-item value="another">Another action</menu-item> <menu-item value="something">Something else here</menu-item> <menu-header>Dropdown header</menu-header> <menu-item value="separated">Separated link</menu-item> </menu> </btn-group> <btn-group> <btn toggle="menu" option="primary">Primary <caret ></caret></btn> <menu> <menu-header>Dropdown header</menu-header> <menu-item value="action">Action</menu-item> <menu-item value="another">Another action</menu-item> <menu-item value="something">Something else here</menu-item> <menu-header>Dropdown header</menu-header> <menu-item value="separated">Separated link</menu-item> </menu> </btn-group> </section> <highlight> &lt;btn-group&gt;<br> &nbsp;&lt;btn toggle="menu"&gt;Default &lt;caret /&gt;&lt;/btn&gt;<br> &nbsp;&lt;menu&gt;<br> &nbsp;&nbsp;&lt;menu-header&gt;Dropdown header&lt;/menu-header&gt;<br> &nbsp;&nbsp;&lt;menu-item value="action"&gt;Action&lt;/menu-item&gt;<br> &nbsp;&nbsp;...<br> &nbsp;&lt;/menu&gt;<br> &lt;/btn-group&gt; </highlight> <h3>Divider</h3> <p>Add a divider to separate series of links in a dropdown menu.</p> <section> <btn-group> <btn toggle="menu">Default <caret ></caret></btn> <menu> <menu-item value="action">Action</menu-item> <menu-item value="another">Another action</menu-item> <menu-item value="something">Something else here</menu-item> <menu-divider></menu-divider> <menu-item value="separated">Separated link</menu-item> </menu> </btn-group> <btn-group> <btn toggle="menu" option="primary">Primary <caret ></caret></btn> <menu> <menu-item value="action">Action</menu-item> <menu-item value="another">Another action</menu-item> <menu-item value="something">Something else here</menu-item> <menu-divider></menu-divider> <menu-item value="separated">Separated link</menu-item> </menu> </btn-group> </section> <highlight> &lt;btn-group&gt;<br> &nbsp;&lt;btn toggle="menu"&gt;Default &lt;caret /&gt;&lt;/btn&gt;<br> &nbsp;&lt;menu&gt;<br> &nbsp;&nbsp;...<br> &nbsp;&nbsp;&lt;menu-divider&gt;&lt;/menu-divider&gt;<br> &nbsp;&nbsp;...<br> &nbsp;&lt;/menu&gt;<br> &lt;/btn-group&gt; </highlight> <h3>Split button dropdowns</h3> <section> <btn-group> <btn>Default</btn> <btn toggle="menu"><caret ></caret></btn> <menu> <menu-item value="action">Action</menu-item> <menu-item value="another">Another action</menu-item> <menu-item value="something">Something else here</menu-item> <menu-divider></menu-divider> <menu-item value="separated">Separated link</menu-item> </menu> </btn-group> <btn-group> <btn option="primary">Primary</btn> <btn toggle="menu" option="primary"><caret ></caret></btn> <menu> <menu-item value="action">Action</menu-item> <menu-item value="another">Another action</menu-item> <menu-item value="something">Something else here</menu-item> <menu-divider></menu-divider> <menu-item value="separated">Separated link</menu-item> </menu> </btn-group> </section> <highlight> &lt;btn-group&gt;<br> &nbsp;&lt;btn&gt;Default&lt;/btn&gt;<br> &nbsp;&lt;btn toggle="menu"&gt;&lt;caret /&gt;&lt;/btn&gt;<br> &nbsp;&lt;menu&gt;<br> &nbsp;&nbsp;...<br> &nbsp;&lt;/menu&gt;<br> &lt;/btn-group&gt; </highlight>', 'app-dropdown { display: block; }', function(opts) {
    this.selected = 'none'
    this.select = function(item) {
      this.selected = item
      this.update()
    }.bind(this);
  
});

riot.tag('app-radio-group', '<h2>Radio groups</h2> <p>Group a series of radio buttons together on a single line. </p> <section> <radio-group name="position" value="{ data.position }" onchange="{ change }"> <radio value="first">First</radio> <radio value="second">Second</radio> <radio value="third">Third</radio> </radio-group> <p class="comment">Your selection is <strong>{ data.position }</strong>.</p> </section> <highlight> &lt;radio-group name=&#123; position &#125; value=&#123; data.position &#125; onchange=&#123; change &#125;&gt;<br> &nbsp;&lt;radio value="first"&gt;First&lt;/radio&gt;<br> &nbsp;&lt;radio value="second"&gt;Second&lt;/radio&gt;<br> &nbsp;&lt;radio value="third"&gt;Third&lt;/radio&gt;<br> &lt;/radio-group&gt; </highlight>', 'app-radio-group { display: block; }', function(opts) {
    this.data = { position: 'first' }

    this.change = function() {
      this.data = {
        position: this.position.value
      }
    }.bind(this);
  
});

riot.tag('app', '<header> <h1>Riot Bootstrap</h1> <h2>Bootstrap-like Components for Riot.js</h2> <p>CURRENTLY EXPERIMENTAL</p> </header> <article> <h2>Getting started</h2> <p><a href="https://github.com/cognitom/riot-bootstrap">See our repo</a> on GitHub.</p> </article> <app-btn message="test"></app-btn> <app-btn-group></app-btn-group> <app-dropdown></app-dropdown> <app-radio-group></app-radio-group> <footer> <p> Maintained by <a href="https://github.com/cognitom">@cognitom</a> with the help of our contributors.<br> Code licensed under MIT, documentation under CC BY 3.0 </p> </footer>', 'app { display: block; } app code { font-family: Menlo, Monaco, Consolas, "Courier New", monospace; } app code { padding: 2px 4px; font-size: 90%; color: #c7254e; background-color: #f9f2f4; border-radius: 4px; } app header { background: #333; color: white; padding: 2em; } app > *:not(header):not(footer) { padding: 2em; border-bottom: 1px solid #eee; } app h2 { margin: 0; } app section { border: 1px solid #ddd; padding: 1em; border-top-left-radius: .25em; border-top-right-radius: .25em; } app section + highlight { border-top: none; border-top-left-radius: 0; border-top-right-radius: 0; } app section p.comment { margin: .5em 0 0; color: #999; font-size: 95%; } app footer { font-size: 90%; line-height: 1.4em; color: #999; padding: 2em; }', function(opts) {


});

riot.tag('highlight', '<yield></yield>', 'highlight { display: block; font-family: monospace; border: 1px solid #ddd; border-radius: .25em; padding: 1em !important; }', function(opts) {
    this.on('mount', function() {
      hljs.highlightBlock(this.root)
    })
  
});
