import { http, HttpResponse } from 'msw';

export const handlers = [
        http.get('/api/products', () => {
                return HttpResponse.json([{ id: 1, name: 'Demo Product' }])
        })
]