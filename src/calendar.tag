import { domEvent, syncEvent, parentScope } from 'riot-mixin-pack'
import i18n from './calendar-i18n.json'

<calendar>

  <table>
    <thead>
      <tr>
        <th><btn onclick={ prev }>&laquo;</btn></th>
        <th colspan="5">{ title }</th>
        <th><btn onclick={ next }>&raquo;</btn></th>
      </tr>
    </thead>
    <tbody>
      <tr><th each={ day in weekdays }>{ day }</th></tr>
      <tr each={ week in calendar }>
        <td each={ week }><btn active={ selected } disabled={ !currentMonth } onclick={ dayclick }>{ daynum }</btn></td>
      </tr>
    </tbody>
  </table>

  <script>
    this.mixin(parentScope).mixin(domEvent).mixin(syncEvent)

    let selected = typeof opts.value == 'string' ? opts.value.split(',') : opts.value || []
    const
      firstDate = selected[0] ? new Date(selected[0]) : new Date(),
      getDayOf1st = (y, m) => new Date(y, m, 1).getDay(),
      getNumOfDays = (y, m) => new Date(y, m + 1, 0).getDate(),
      getDateString = (y, m, d) => y
        + '-' + (m < 9 ? '0' + (m + 1) : m + 1)
        + '-' + (d < 10 ? '0' + d : d),
      isSelected = (d) => selected.some(day => d == day)

    this.calendar = []
    this.lang = i18n[opts.lang] ? opts.lang : i18n[document.documentElement.lang] ? document.documentElement.lang : 'en'
    this.weekdays = i18n[this.lang].weekdays
    this.currentYear = firstDate.getFullYear()
    this.currentMonth = firstDate.getMonth()
    this.title = ''
    this.multi = false
    this.value = this.multi ? selected : selected[0]

    /**
     * Move to the previous month
     * @param { Event } e - native event
     */
    this.prev = e => {
      if (0 <= --this.currentMonth) return
      this.currentMonth = 11
      this.currentYear--
    }
    /**
     * Move to the next month
     * @param { Event } e - native event
     */
    this.next = e => {
      if (++this.currentMonth < 12) return
      this.currentMonth = 0
      this.currentYear++
    }
    /**
     * Click the day
     * @param { Event } e - native event
     */
    this.dayclick = e => {
      const d = getDateString(this.currentYear, this.currentMonth, e.item.daynum)
      if (!this.multi) selected = [d]
        else if (isSelected(d)) selected = selected.filter(day => d != day)
        else selected.push(d)
      this.root.value = this.value = this.multi ? selected : selected[0]
      this.update()
      this.triggerDomEvent('change')
    }

    this
      .on('update', () => {
        this.multi = opts.hasOwnProperty('multi')
          ? opts.multi === '' || opts.multi === 'multi' || opts.multi === true
          : false
        this.title = i18n[this.lang].monthFormat
          .replace('%M', i18n[this.lang].months[this.currentMonth])
          .replace('%Y', this.currentYear)

        const
          y = this.currentYear,
          m = this.currentMonth,
          d0 = getDayOf1st(y, m),
          dn = getNumOfDays(y, m),
          numberOfRows = Math.ceil((d0 + dn) / 7)

        let cal = []
        for (var i = 0, w; i < numberOfRows; i++) {
          w = []
          for (var j = 0, d, s; j < 7; j++) {
            d = new Date(y, m, 7 * i + j + 1 - d0)
            s = getDateString(d.getFullYear(), d.getMonth(), d.getDate())
            w.push({
              daynum: d.getDate(),
              selected: isSelected(s),
              currentMonth: d.getMonth() == m
            })
          }
          cal.push(w)
        }
        this.calendar = cal
      })
  </script>

  <style scoped>
    :scope {
      display: inline-block;
      vertical-align: top;
      padding: 3px;
      text-align: center;
    }
    thead th {
      font-size: 90%;
    }
    tbody th {
      padding: 6px 0;
      font-size: 90%;
    }
    td {
      text-align: center;
      padding: 1px;
    }
    btn {
      width: 100%;
      display: block;
    }
    btn button {
      color: #333;
      display: block;
      width: 100%;
      border: none;
      padding: 4px 5px;
    }
    btn button:hover,
    btn button:focus {
      color: #000;
      text-decoration: none;
      background: #f7f7f7;
    }
    btn button:disabled {
      color: #bbb;
    }
    btn button[data-active="yes"] {
      box-shadow: none;
      background-color: #337ab7;
      color: white;
    }
  </style>

</calendar>
