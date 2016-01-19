import { domEvent, syncEvent, parentScope } from 'riot-mixin-pack'

<radio-group>

  <yield/>

  <script>
    this.mixin(parentScope).mixin(domEvent).mixin(syncEvent)

    const
      radioSelect = value => {
        this.root.value = this.value = value
        this.skipSync()
        this.update()
        this.triggerDomEvent('change')
      }

    this
      .on('mount', () => {
        const radios = this.tags['radio'] || []
        radios.forEach(radio => radio.on('radioClicked', radioSelect))
      })
      .on('sync', () => {
        this.value = opts.value
      })
  </script>

  <style scoped>
    :scope {
      position: relative;
      display: inline-block;
      vertical-align: middle;
    }
    radio {
      position: relative;
      float: left;
    }
    radio + radio {
      margin-left: -1px;
    }
    radio[toggle]:not(:first-child) > * {
      padding-right: 8px;
      padding-left: 8px;
    }
    :scope > radio:hover,
    :scope > radio:focus,
    :scope > radio:active {
      z-index: 2;
    }
    :scope > radio:not(:first-child):not(:last-child):not([toggle]) > * {
      border-radius: 0;
    }
    :scope > radio:first-child {
      margin-left: 0;
    }
    :scope > radio:first-child:not(:last-child):not([toggle]) > * {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    :scope > radio:last-child:not(:first-child) > *,
    :scope > radio:not(:first-child)[toggle] > * {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  </style>

</radio-group>
