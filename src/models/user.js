import validator, { rules, validate } from '../middlewares/validator'

const UserBuilder = ({ validate }) => ({ id, name, profileUrl, email, username, password, phoneNumber }) => {
	/** @type {import('../middlewares/validator')} */
	validate({
		id,
		name,
		profileUrl,
		email,
		username,
		password,
		phoneNumber,
	})
	return { id, name, profileUrl, email, username, password, phoneNumber }
}

export default UserBuilder
