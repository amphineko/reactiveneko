import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: ['styled-jsx/babel'],
            },
        }),
        imagetools(),
    ],
})
