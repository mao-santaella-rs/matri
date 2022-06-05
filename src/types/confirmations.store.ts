export interface ConfirmationName {
  name: string
  confirmed: boolean
}

export interface ConfirmationDb {
  hotelPay: boolean
  names: ConfirmationName[]
}

export interface ConfirmationStore extends ConfirmationDb {
  id: string
}
