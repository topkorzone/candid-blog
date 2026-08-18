// Threads/Meta 데이터 삭제 요청(data deletion) 콜백.
// Meta는 signed_request를 POST하고, { url, confirmation_code } JSON 응답을 기대한다.
// Candid는 Threads 사용자 데이터를 저장하지 않으므로 즉시 확인 코드를 반환한다.
export const prerender = false;

import type { APIRoute } from 'astro';

const STATUS_URL = 'https://candid-blog.vercel.app/threads/data-deletion';

export const POST: APIRoute = async () => {
	const confirmation_code = 'candid-nodata';
	return new Response(
		JSON.stringify({ url: STATUS_URL, confirmation_code }),
		{ status: 200, headers: { 'Content-Type': 'application/json' } },
	);
};

// 사용자가 상태 확인 차 방문하는 GET — 저장 데이터 없음을 안내.
export const GET: APIRoute = async () =>
	new Response(
		'Candid does not store Threads user data. There is nothing to delete.',
		{ status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
	);
