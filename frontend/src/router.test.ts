import {describe, test, expect, beforeEach, jest, afterEach} from '@jest/globals'
import {redirect} from './router'

describe('Router tests', () => {
	jest.mock('./router')

	let win: jest.SpiedFunction<(url: string) => void>

	beforeEach(() => {
		win = jest.spyOn(window, 'window', 'get')
	})
	afterEach(() => {
		win.mockRestore()
	})

	test('redirect to /test', () => {
		redirect('/test')
		expect(window.location.pathname).toBe('/test')
	})
})
