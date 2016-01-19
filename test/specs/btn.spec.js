describe('btn specs', function() {
  var appDom // mounting point
  var app // reference to the tag

  beforeEach(function() {
    // create mounting points
    appDom = document.createElement('div')
    document.body.appendChild(appDom)
  })

  afterEach(function() {
    if (app) app.unmount()
  })

  it('displays yielded content', function() {
    app = riot.mount(appDom, 'btn-spec')[0]
    var tags = app.tags.btn
    expect(tags[0].root.querySelector('button').textContent).to.be('A')
    expect(tags[1].root.querySelector('button').textContent).to.be('B')
  })

})
