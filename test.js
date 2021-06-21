const { sleep, sync } = require('./index')

console.time('1')
sleep(1000).then(() => {
  console.timeEnd('1')
})
console.log(sync)
