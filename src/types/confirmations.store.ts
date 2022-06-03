export interface confirmedName {
  name: string
  confirmed: boolean
}

export interface confirmedForDb {
  hotelPay: boolean
  names: confirmedName[]
}

export interface storeSavedConfirmed extends confirmedForDb {
  id: string
}
