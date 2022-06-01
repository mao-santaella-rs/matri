export interface User {
  uid: string
  email: string
  emailVerified: boolean
  displayName: string
  isAnonymous: boolean
  photoURL: string
  createdAt: string
  lastLoginAt: string
  apiKey: string
}

export interface GoogleAuthObj {
  user: User
}

export interface SuscribedUser {
  uid: string
  email: string
  emailVerified: boolean
  displayName: string
  isAnonymous: boolean
  photoURL: string
  createdAt: string
  lastLoginAt: string
  apiKey: string
  appName: string
}
