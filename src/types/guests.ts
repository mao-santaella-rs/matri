export interface guestName {
  name: string
  alias: string
}

export interface guestForDb {
  code: string
  greet: string
  names: guestName[]
}

export interface storeSavedGuest extends guestForDb {
  id: string
}
