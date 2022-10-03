export type AuthUser = {
   id: string
   username: string
   name: string
   created_at: Date | null,
   updated_at: Date | null,
}

export type Credentials = {
   username: string
   password: string
}
