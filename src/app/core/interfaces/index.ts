export interface ResponseErro {
	statusCode: number
	code: string
	message: string
	description: string
	timestamp: string
	path: string
	method: string
	req: any,
	offset: number
	order: string
	column: string
	search: string
	start: string
	end: string
	limit: number
	count: number
	body: any
}

export interface ResponseSuccess {
	results: any[]
	size: number
	timestamp: string
	message: string
	code: string
	description: string
	search: string
	limit: number
	offset: number
	count: number
	order: string
	column: string
	start: string
	end: string
	statusCode: number
}

export interface Response {
	timestamp: string
	message: string
	code: string
	description: string
	statusCode: number
}

export interface Filter {
	size: number
	search: string
	limit: number
	offset: number
	count: number
	order: string
	column: string
	start: string
	end: string
}

export interface AppState {
  selected: any
  body: ResponseSuccess | null
  isLoading?: boolean
  error?: any
}

export const initialState: AppState = {
	selected: null,
	body: null,  
	isLoading: false,
	error: null
}

/** component */

export interface Comment {
	id?: number
	user_id?: number
	publication_id?: number
	comment?: string
	timestamp?: string
}

export interface CreateComment {
	id?: number
	user_id?: number
	publication_id?: number
	comment: string
	timestamp?: string
}

export interface ListComment {
	id?: number
	user_id?: number
	publication_id?: number
	comment?: string
	timestamp?: string
}

export interface EditComment {
	id?: number
	user_id?: number
	publication_id?: number
	comment?: string
	timestamp?: string
}

export interface DetailComment {
	id?: number
	user_id?: number
	publication_id?: number
	comment?: string
	timestamp?: string
}
