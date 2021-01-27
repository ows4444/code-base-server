import userModelGenerator from './user'

describe('User Model', () => {
	test('Create User', () => {
		const userModel = userModelGenerator()
		const user = userModel({ email: 'a', name: 'name', password: 'password', phoneNumber: '123123', profileUrl: 'https://localhost.com', username: 'abcd' })
		expect(user.email).toEqual('a')
	})
})
