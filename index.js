addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method !== 'GET') return MethodNotAllowed(request)
  const res = fetch('https://note.com/api/v2/creators/naru_note/contents?kind=note&page=1', {
      headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    })
  return res
  function MethodNotAllowed(request) {
    return new Response(`Method ${request.method} not allowed.`, {
      status: 405,
      headers: {
        'Allow': 'GET'
      }
    })
  }
}
