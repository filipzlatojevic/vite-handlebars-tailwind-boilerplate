import { resolve, parse } from 'path'
import { readdirSync } from 'fs'
import handlebars from 'vite-plugin-handlebars'

// Get all .html files in the src directory
const files = readdirSync(resolve(__dirname, 'src')).filter((file) => file.endsWith('.html'))

// Generate the input object
const input = files.reduce((acc, file) => {
  const name = parse(file).name // Remove the .html extension
  acc[name] = resolve(__dirname, 'src', file)
  return acc
}, {})

function handlebarsOverride(options) {
  const plugin = handlebars(options)
  // Currently handleHotUpdate skips further processing, which bypasses
  // postcss and in turn tailwind doesn't pick up file changes
  delete plugin.handleHotUpdate
  return plugin
}

export default {
  root: 'src',
  build: {
    modulePreload: false,
    outDir: '../dist',
    rollupOptions: {
      input,

      // Remove hash
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  plugins: [
    handlebarsOverride({
      partialDirectory: [resolve(__dirname, 'src/partials'), resolve(__dirname, 'src/components')]
    })
  ]
}
