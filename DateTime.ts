export type DateTime = string

// tslint:disable-next-line: no-namespace
export namespace DateTime {
	export function is(value: any | DateTime): value is DateTime {
		return typeof(value) == "string" &&
		/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)$/.test(value)
	}
	export function parse(value: DateTime): Date {
		return new Date(value)
	}
	export function create(value: Date): DateTime {
		return value.toISOString()
	}
	export function now(): DateTime {
		return create(new Date())
	}
	export function localize(value: Date, locale?: string, options?: object): DateTime {
		const localeString = locale ? locale : Intl.DateTimeFormat().resolvedOptions().locale
		const localeOptions = options ? options : {
			year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric",
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		}
		return value.toLocaleDateString(localeString, localeOptions)
	}
}
