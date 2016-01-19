/**
 * Simple serial runner with intervals
 * @param { array } tasks - functions
 * @param { number } interval - msec
 */
function serial(tasks, interval) {
  function runner() {
    var task
    if (task = tasks.shift()) task()
    if (tasks.length) setTimeout(runner, interval)
  }
  runner()
}
