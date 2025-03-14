// eslint-disable-next-line import/no-unresolved
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
export default {
  plugins: [tailwindcss('./tailwind.config.js'), autoprefixer]
}
