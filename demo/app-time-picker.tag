<app-time-picker>

  <h2>Time picker</h2>

  <p>Use the <code>&lt;time-picker&gt;</code> elements.</p>

  <section>
    <time-picker value={ selectedTime } onchange={ change } />
    <p class="comment">selected time: { selectedTime }</p>
  </section>
  <highlight>
    &lt;time-picker value=\{ selectedTime } onchange=\{ change } /&gt;
  </highlight>

  <script>
    this.selectedTime = '12:00'

    this.change = e => {
      this.selectedTime = e.target.value
    }
  </script>

  <style scoped>
    :scope {
      display: block;
    }
  </style>

</app-time-picker>
