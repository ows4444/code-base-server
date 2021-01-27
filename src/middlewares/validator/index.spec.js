import validator, { rules } from './index'

describe('Validator', () => {
	test('Validate Email', () => {
		try {
			validator({
				email: ['a', `${rules.isEmail}`],
			})
		} catch (error) {
			expect(error.message).toEqual('shouldBeValid')
		}
	})
})
