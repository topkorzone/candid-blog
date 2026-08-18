// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
// 페이지는 기본 정적(프리렌더). Threads OAuth 콜백만 per-route로 서버 렌더(prerender=false).
export default defineConfig({
	site: 'https://candid-blog.vercel.app',
	adapter: vercel(),
	// Meta(Threads) 콜백은 교차 출처 POST → Astro 기본 CSRF(checkOrigin) 해제.
	// 이 사이트엔 상태 변경 폼이 없어 안전.
	security: { checkOrigin: false },
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
