import mockItems from './mockItems'

window.fetch = jest.fn()

const fetchSpy = jest.spyOn(window, 'fetch')

beforeEach(() => {
  fetchSpy.mockReset()
  fetchSpy.mockImplementation(async (url) => {
    if (url === 'http://localhost:8080/api/items?filter=') {
      return {
        ok: true,
        status: 200,
        json: async () => ({items: mockItems}),
      } as Response
    }

    if (url === 'http://localhost:8080/api/items?filter=hake') {
      console.log('wkjfnwjknwejknkwenknwek shagiity shit')
      const filteredItems = mockItems.filter(item => item.name.toLowerCase().includes('hake'))
      return {
        ok: true,
        status: 200,
        json: async () => ({items: filteredItems}),
      } as Response
    }

    return {
      ok: true,
      status: 200,
    } as Response
  })
})
