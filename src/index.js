/**
 * Created on 1399/9/19 (2020/12/9).
 * @author {@link https://mirismaili.github.io S. Mahdi Mir-Ismaili}
 */

export const deepEqual = (var1, var2) => {
	if (var1 === var2) return true

	const prototype = Object.prototype.toString.call(var1)

	if (prototype !== Object.prototype.toString.call(var2)) return false

	if (prototype === '[object Object]') {
		if (Object.keys(var1).length !== Object.keys(var2).length) return false

		for (const key in var1) {
			if (!(key in var2)) return false

			// noinspection JSUnfilteredForInLoop
			if (!deepEqual(var1[key], var2[key])) return false
		}

		return true
	}

	if (var1 instanceof Array) {
		if (var1.length !== var2.length) return false

		for (let i = 0; i < var1.length; i++)
			if (!(deepEqual(var1[i], var2[i]))) return false

		return true
	}

	return false
}

export default deepEqual
