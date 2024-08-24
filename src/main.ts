import { setupCounter } from './counter.ts';
import './style.css';
import viteLogo from '/vite.svg';

const year = new Date().getFullYear();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="bg-yellow-200 sticky top-0 shadow">
    <nav class="container py-4 text-lg font-bold">
      <a href="./">Vite Tailwindcss Demo</a>
    </nav>
  </header>
  <main class="container py-2 flex-1 flex flex-col justify-center items-center gap-8">
    <a href="https://vitejs.dev" target="_blank" class="mx-auto">
      <img src="${viteLogo}" alt="Vite logo" height="120" width="120" />
    </a>
    <div>
      <button id="counter" type="button" class="py-2 px-4 rounded bg-yellow-200 hover:bg-yellow-300 text-lg shadow"></button>
    </div>
  </main>
  <footer class="bg-yellow-200 shadow">
    <nav class="container py-4 text-center">All rights reserved © ${year}</nav>
  </footer>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
