import { domEvent, parentScope } from 'riot-mixin-pack'

<inp>
  <input
    type="text"
    placeholder={ opts.placeholder }
    disabled={ disabled }
    data-option={ opts.option }
    data-size={ opts.size }
    value={ value }
    onkeyup={ keyup }
    ></input>

  <script>
    this.mixin(parentScope).mixin(domEvent)
    this.disabled = undefined

    this.on('update', e => {
      this.disabled = opts.hasOwnProperty('__disabled')
        ? opts.__disabled === true
        : opts.hasOwnProperty('disabled')
          ? opts.disabled === '' || opts.disabled === 'disabled'
          : false
      this.value = opts.value ? opts.value : ''
    });

    this.keyup = e => {
      e.stopPropagation()
      if (this.disabled) return
      this.root.value = this.value = e.target.value
      this.triggerDomEvent('keyup');
    }
  </script>

  <style scoped>
    input {
      display: inline-block;
      padding: 6px 12px;
      margin-bottom: 0;
      font-size: 14px;
      font-weight: normal;
      line-height: 1.42857143;
      text-align: left;
      white-space: nowrap;
      background-image: none;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    input[disabled]{
      background-color: #eee;
    }

    /**
     * Input Sizes
     */

    input[data-size="lg"] {
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.3333333;
      border-radius: 6px;
    }
    input[data-size="sm"] {
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
    }
    input[data-size="xs"] {
      padding: 1px 5px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
    }
  </style>

</inp>
