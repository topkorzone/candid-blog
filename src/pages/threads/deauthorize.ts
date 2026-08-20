// Threads/Meta 권한취소(deauthorize) 콜백.
// 사용자가 Threads에서 앱 권한을 취소하면 Meta가 signed_request를 POST한다.
// Sonari는 Threads 사용자 데이터를 저장하지 않으므로 확인(200)만 응답한다.
export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async () => {
	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
};

export const GET: APIRoute = async () =>
	new Response('Threads deauthorize callback (Sonari). No stored user data.', {
		status: 200,
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
