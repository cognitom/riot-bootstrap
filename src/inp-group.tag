import { parentScope } from 'riot-mixin-pack'

<inp-group>

  <yield/>

  <script>
    this.mixin(parentScope)

    this.on('update', e => {
      var nodes = this.root.querySelectorAll('inp')
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].setAttribute('size', this.opts.size);
      }
    });
  </script>

  <style scoped>
    :scope {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      border-collapse: separate;
      font-size: 0;
    }

    inp input,
    inp input[data-size="lg"],
    inp input[data-size="sm"],
    inp input[data-size="xs"] {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    inp:first-child input {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    inp:last-child input {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    inp-group-addon:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    inp-group-addon:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    /**
     * Addon Sizes
     */

    :scope[size="lg"] inp-group-addon {
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.3333333;
    }
    :scope[size="sm"] inp-group-addon {
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1.5;
    }
    :scope[size="xs"] inp-group-addon {
      padding: 1px 5px;
      font-size: 12px;
      line-height: 1.5;
    }

    /**
     * Input Sizes
     */

     inp:first-child input[data-size="lg"] {
       border-top-left-radius: 6px;
       border-bottom-left-radius: 6px;
     }
     inp:last-child input[data-size="lg"] {
       border-top-right-radius: 6px;
       border-bottom-right-radius: 6px;
     }
     inp:first-child input[data-size="sm"] {
       border-top-left-radius: 3px;
       border-bottom-left-radius: 3px;
     }
     inp:last-child input[data-size="sm"] {
       border-top-right-radius: 3px;
       border-bottom-right-radius: 3px;
     }
     inp:first-child input[data-size="xs"] {
       border-top-left-radius: 3px;
       border-bottom-left-radius: 3px;
     }
     inp:last-child input[data-size="xs"] {
       border-top-right-radius: 3px;
       border-bottom-right-radius: 3px;
     }
  </style>
</inp-group>
