
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["../ui"],
  components: [
    {
      path: join(currentDir, './components'),
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      prefix: 'Layout',
    }
  ],
})
