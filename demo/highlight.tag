<highlight>

  <yield/>

  <script>
    this.on('mount', function() {
      hljs.highlightBlock(this.root)
    })
  </script>

  <style scoped>
    :scope {
      display: block;
      font-family: monospace;

      border: 1px solid #ddd;
      border-radius: .25em;
      padding: 1em !important;
    }
  </style>

</highlight>
