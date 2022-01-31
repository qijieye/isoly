export type Time = string

export namespace Time {
	export function is(value: any | Time): value is Time {
		return typeof value == "string" && /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)(?:\.(\d+))?$/.test(value)
	}
}
