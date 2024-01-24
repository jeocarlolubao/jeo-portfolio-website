import adapter from "@sveltejs/adapter-static";
import { mdsvex, escapeSvelte } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/kit/vite';
import shiki from 'shiki'

/** @type {import('mdsvex').MdsvexCompileOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await shiki.getHighlighter({ theme: 'one-dark-pro' })
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
      return `{@html \`${html}\` }`
    }
  },
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],

  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/portfolio" : "/portfolio",


    },

  },
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

};

export default config;
