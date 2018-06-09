const test = require('ava')
const babel = require('@babel/core')

const snapshot = (title, input, opts) => {
  test(title, t => {
    const { code } = babel.transform(input, {
      presets: [
        [require.resolve('..'), opts]
      ]
    })

    t.snapshot(input.trim(), 'input')
    t.snapshot(code.trim(), 'output')
  })
}

snapshot('async/await', `
let foo = async () => 'foo'
`)

snapshot('for .. of', `
for (const [i,v] of bar) {
  console.log(i,v)
}
`)

snapshot('object rest spreading', `
let foo = {
  ...bar
}
`)

snapshot('react jsx', `
const App = () => <div hehe {...props}></div>
`)

snapshot('vue jsx', `
const App = {
  render() {
    return <div hehe {...props}></div>
  }
}
`, {
  jsx: 'vue'
})

snapshot('custom jsx pragma', `
import { h } from 'preact'

const App = () => <div></div>
`, {
  jsx: 'h'
})

snapshot('modern mode', `
const a = async () => {}

const b = {
  ...a
}
`, {
  mode: 'modern'
})

snapshot('loose mode', `
const a = async () => {}

const b = {
  ...a
}

for (const [i,v] of c.entries()) {
  console.log(i,v)
}
`, {
  mode: 'loose'
})
