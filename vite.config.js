import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// The React plugin compiles JSX so Vite can bundle the .jsx files.
export default defineConfig({
  plugins: [react()],
})
