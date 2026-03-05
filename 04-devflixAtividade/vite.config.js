import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Muda a porta para o padrão vite (3000)
    open: true, // Abre o navegador na hora direto
    host: true, // Permite que tenha acesso via IP na rede local 
  }
})
