export interface guestName {
  name: string
  alias: string
}

export interface guestForDb {
  code: string
  greet: string
  names: guestName[]
  notice?: boolean
}

export interface storeSavedGuest extends guestForDb {
  id: string
}
