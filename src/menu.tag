import { domEvent, syncEvent, parentScope } from 'riot-mixin-pack'

<menu>

  <yield/>

  <script>
    this.mixin(parentScope).mixin(domEvent).mixin(syncEvent)

    let opened = false

    const
      menuOpen = e => {
        if (opened) return
        opened = true
        this.root.style.display = 'block'
        setTimeout(() => {
          document.addEventListener('touchstart', menuClose, false)
          document.addEventListener('click', menuClose, false)
        }, 100)
      },
      menuClose = e => {
        opened = false
        this.root.style.display = 'none'
        document.removeEventListener('touchstart', menuClose)
        document.removeEventListener('click', menuClose)
      },
      itemSelect = value => {
        this.root.value = this.value = value
        this.triggerDomEvent('select')
        menuClose()
      }

    this
      .on('mount', () => {
        const menuItems = this.tags['menu-item'] || []
        this.root.addEventListener('change', e => {
          itemSelect(e.target.value)
        }, true)
        this.root.addEventListener('menuItemClicked', e => {
          itemSelect(e.target.value)
        }, true)
      })
      .on('sync', () => {
        this.value = opts.value
      })

    if (this.parent) this.parent.on('inner-btn-toggle', menuOpen)
  </script>

  <style scoped>
    :scope {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1000;
      display: none;
      float: left;
      min-width: 160px;
      padding: 5px 0;
      margin: 2px 0 0;
      font-size: 14px;
      text-align: left;
      list-style: none;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ccc;
      border: 1px solid rgba(0, 0, 0, .15);
      border-radius: 4px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
    }

    :scope[align="right"] {
        left: auto;
        right: 0;
    }
  </style>

</menu>
