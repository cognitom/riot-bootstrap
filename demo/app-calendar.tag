<app-calendar>

  <h2>Calendar</h2>

  <p>Calendar control. You can choose a single day:</p>

  <section>
    <calendar value="2015-10-01"></calendar>
  </section>

  <highlight>
    &lt;calendar value="2015-10-01"&gt;&lt;/calendar&gt;<br>
  </highlight>

  <h3>Multiple selection</h3>

  <section>
    <calendar multi value="2015-09-01,2015-09-08,2015-09-15"></calendar>
  </section>

  <highlight>
    &lt;calendar multi value="2015-09-01,2015-09-08,2015-09-15"&gt;&lt;/calendar&gt;<br>
  </highlight>

  <h3>Language support</h3>

  <section class="lang-support">
    <calendar lang="fr"></calendar>
    <calendar lang="ja"></calendar>
    <calendar lang="zh"></calendar>
  </section>

  <highlight>
    &lt;calendar lang="fr"&gt;&lt;/calendar&gt;<br>
    &lt;calendar lang="ja"&gt;&lt;/calendar&gt;<br>
    &lt;calendar lang="zh"&gt;&lt;/calendar&gt;<br>
  </highlight>

  <h3>Popup (Datepicker)</h3>

  <section>
    <btn-group>
      <btn toggle="menu">{ date } <caret /></btn>
      <menu onselect={ select }>
        <calendar value={ date }></calendar>
      </menu>
    </btn-group>
  </section>

  <highlight>
    &lt;btn-group&gt;<br>
    &nbsp;&lt;btn toggle="menu"&gt;\{ date } &lt;caret /&gt;&lt;/btn&gt;<br>
    &nbsp;&lt;menu onselect=\{ select }&gt;<br>
    &nbsp;&nbsp;&lt;calendar value=\{ date }&gt;&lt;/calendar&gt;<br>
    &nbsp;&lt;/menu&gt;<br>
    &lt;/btn-group&gt;
  </highlight>

  <script>
    this.date = '2015-09-01'
    this.select = e => {
      this.date = e.target.value
    }
  </script>

  <style scoped>
    :scope {
      display: block;
    }
    .lang-support calendar:not(last-child) {
      margin-right: 10px;
    }
    .lang-support calendar + calendar {
      border-left: 1px solid #eee;
      padding-left: 10px;
    }
  </style>

</app-calendar>
