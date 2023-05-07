import { resolve } from 'path'
import { internalIpV4 } from 'internal-ip'
import { DOMElements, SVGElements } from 'solid-js/web/dist/dev.cjs'
import { defineConfig } from 'vite'
import inspect from 'vite-plugin-inspect'
import mkcert from 'vite-plugin-mkcert'
import { VitePWA } from 'vite-plugin-pwa'
import solidPlugin from 'vite-plugin-solid'

// https://vitejs.dev/config/
export default defineConfig(async () => {
    const host = await internalIpV4()

    /** @type {import('vite').UserConfig} */
    const config = {
        base: '/',
        resolve: {
            alias: {
                '@interfaces': resolve(__dirname, './src/interfaces'),
                '@components': resolve(__dirname, './src/components'),
                '@store': resolve(__dirname, './src/store'),
                '@routes': resolve(__dirname, './src/routes'),
                '@pages': resolve(__dirname, './src/pages'),
                '@styles': resolve(__dirname, './src/styles'),
                '@config': resolve(__dirname, './src/config'),
                '@src': resolve(__dirname, './src'),
                '@assets': resolve(__dirname, './assets'),
                '@hooks': resolve(__dirname, './src/utils/hooks'),
                '@static': resolve(__dirname, './src/static'),
                '@utils': resolve(__dirname, './src/utils'),
            },
        },
        plugins: [
            solidPlugin({
                solid: {
                    moduleName: 'solid-js/web',
                    // @ts-ignore
                    generate: 'dynamic',
                    renderers: [
                        {
                            name: 'dom',
                            moduleName: 'solid-js/web',
                            elements: [...DOMElements.values(), ...SVGElements.values()],
                        },
                        {
                            name: 'universal',
                            moduleName: 'solid-three',
                            elements: [],
                        },
                    ],
                },
            }),
            inspect(),
            VitePWA({
                strategies: 'injectManifest',
                registerType: 'autoUpdate',
                injectManifest: {
                    swSrc: 'public/sw.js',
                    swDest: 'dist/sw.js',
                    globDirectory: 'dist',
                    globPatterns: ['**/*.{html,js,css,json,png}'],
                },
                devOptions: {
                    enabled: true,
                },
            }),
            //mkcert(),
        ],
        server: {
            //https: true,
            host: '0.0.0.0', // listen on all addresses
            port: 3000,
            strictPort: true,
            hmr: {
                protocol: 'ws',
                host,
                port: 5183,
            },
        },
        build: {
            sourcemap: true,
            /* assetsDir: 'code', */
            target: ['esnext', 'edge100', 'firefox100', 'chrome100', 'safari18'],
        },
    }
    return config
})
