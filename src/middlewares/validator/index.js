import validator from 'validator'

const rules = {
	isEmail: 'isEmail',
	isEmpty: 'isEmpty',
	isMobilePhone: 'isMobilePhone',
	isNumeric: 'isNumeric',
	isMongoId: 'isMongoId',
	isAlpha: 'isAlpha',
	isInt: 'isInt',
	isIn: 'isIn',
	isLength: 'isLength',
}

const validate = (ctx) => {
	Object.keys(ctx).forEach((field) => {
		const [value, validations = '', opts] = ctx[field]
		if (validations) {
			validations.split('|').forEach((rule) => {
				try {
					switch (rule) {
						case rules.isEmpty:
							if (validator.isEmpty(value)) throw new Error('isRequired')
						case rules.isEmail:
							if (!validator.isEmail(value)) throw new Error('shouldBeValid')
						case rules.isMobilePhone:
							if (!validator.isMobilePhone(value)) throw new Error('shouldBeValid')
						case rules.isNumeric:
							if (!validator.isNumeric(value)) throw new Error('canOnlyContainNumbers')
						case rules.isMongoId:
							if (!validator.isMongoId(value)) throw new Error('idShouldBeValid')
						case rules.isAlpha:
							value.split(' ').forEach((val) => {
								if (!validator.isAlpha(val)) throw new Error('canContainOnlyLetters')
							})
						case rules.isInt:
							if (!validator.isNumeric(value, opts)) throw new Error('canOnlyContainNumbers')
						case rules.isIn:
							if (!validator.isIn(value, opts)) throw new Error('canContainValidOption')
						case rules.isLength:
							if (opts) if (!validator.isLength(value, opts)) throw new Error('mustBeLength')
					}
				} catch (error) {
					error['field'] = field
					if (opts) {
						error['max'] = opts.max
						error['min'] = opts.min
					}
					throw error
				}
			})
		}
	})
}
export { rules, validate }
