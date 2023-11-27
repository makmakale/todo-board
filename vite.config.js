import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    base: '/',
    plugins: [react({
      include: /\.(jsx|tsx)$/,
      babel: {
        plugins: ['styled-components'],
        babelrc: false,
        configFile: false,
      },
    })],
    resolve: {
      alias: {
        '@': `${path.resolve(__dirname, 'src')}`,
      },
      extensions: ['.js', '.jsx'],
    },
  };

  if (command !== 'serve') {
    config.base = '/todo-board/';
  }

  return config;
});
