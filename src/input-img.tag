import { domEvent, syncEvent, parentScope } from 'riot-mixin-pack'

<input-img>

  <img src={ value || opts.placeholder }
    width={ opts.width || 100 }
    height={ opts.height || 100 }>
  <input if={ opts.name } name={ opts.name } type="hidden" value={ value }>

  <script>
    this.mixin(parentScope).mixin(domEvent).mixin(syncEvent)

    const
      readerOnLoad = e => {
        this.root.value = this.value = e.target.result
        this.triggerDomEvent('change')
        this.skipSync()
        this.update()
      },
      highlight = e => {
        e.stopPropagation()
        e.preventDefault()
        this.root.setAttribute('class', 'highlight')
      },
      dehightlight = e => {
        this.root.removeAttribute('class')
      },
      processFiles = e => {
        e.stopPropagation()
        e.preventDefault()
        dehightlight()
        const
          file = e.dataTransfer.files[0],
          reader = new FileReader()
        if (!file.type.match('image.*')) return
        reader.onload = readerOnLoad
        reader.readAsDataURL(file)
      }

    this.on('sync', () => {
      this.value  = opts.value || ''
    })
    if (isDroppable()) {
      this.on('mount', () => {
        this.root.addEventListener('drop', processFiles, false)
        this.root.addEventListener('dragover', highlight, false)
        this.root.addEventListener('dragenter', highlight, false)
        this.root.addEventListener('dragleave', dehightlight, false)
      })
    }

    function isDroppable() {
      return window.File && window.FileReader && window.FileList && window.Blob
    }
  </script>

  <style>
    input-img {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      padding: 4px;
      line-height: 1em;
      border: 1px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
    }
    input-img.highlight {
      box-shadow: 0 0 5px #419bf9;
    }
    input-img > img {
      display: block;
      border-radius: 3px;
    }
  </style>

</input-img>
