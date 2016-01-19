import { domEvent, syncEvent, parentScope } from 'riot-mixin-pack'

<menu-item>

  <yield/>

  <script>
    this.mixin(parentScope).mixin(domEvent).mixin(syncEvent)

    const
      click = e => {
        this.root.value = opts.value || this.root.innerText
        this.triggerDomEvent('menuItemClicked')
      }

    this
      .one('mount', () => {
        this.root.addEventListener('touchstart', click, false)
        this.root.addEventListener('click', click, false)
      })
      .one('unmount', () => {
        this.root.removeEventListener('touchstart', click)
        this.root.removeEventListener('click', click)
      })
  </script>

  <style>
    menu-item {
      display: block;
      padding: 3px 20px;
      clear: both;
      font-weight: normal;
      line-height: 1.42857143;
      color: #333;
      white-space: nowrap;
      cursor: pointer;
    }
    menu-item:hover,
    menu-item:focus {
      color: #262626;
      text-decoration: none;
      background-color: #f5f5f5;
    }
  </style>

</menu-item>
