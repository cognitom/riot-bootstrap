import { parentScope } from 'riot-mixin-pack'

<radio>

  <button
    type="button"
    disabled={ opts.disabled }
    data-selected={ selected ? 'yes' : 'no' }
    data-size={ opts.size }
    onclick={ click }
    ><input type="radio" checked={ selected } onclick={ click }> <yield/></button>

  <script>
    this.mixin(parentScope)

    this.click = e => {
      e.stopPropagation()
      this.selected = true
      this.trigger('radioClicked', opts.value || this.root.innerText)
    }

    this.on('update', () => {
      this.selected = opts.value == this.parent.value
    })
  </script>

  <style scoped>
    button {
      display: inline-block;
      padding: 6px 12px;
      margin-bottom: 0;
      font-size: 14px;
      font-weight: normal;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 4px;
    }
    button:focus {
      outline: thin dotted;
      outline: 5px auto -webkit-focus-ring-color;
      outline-offset: -2px;
    }
    button:hover,
    button:focus {
      color: #333;
      text-decoration: none;
    }
    button:active {
      background-image: none;
      outline: 0;
      box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
    }
    button[disabled] {
      pointer-events: none;
      cursor: not-allowed;
      box-shadow: none;
      opacity: .65;
    }

    button { color: #333; background-color: #fff; border-color: #ccc }
    button:hover,
    button:focus,
    button:active,
    button[data-selected="yes"] { color: #333; background-color: #e6e6e6; border-color: #adadad }

    /**
     * Button Sizes
     */

    button[data-size="lg"] {
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.3333333;
      border-radius: 6px;
    }
    button[data-size="sm"] {
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
    }
    button[data-size="xs"] {
      padding: 1px 5px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
    }
  </style>

</radio>
