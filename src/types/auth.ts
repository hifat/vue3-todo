export type Username = {
   id: string
   username: string
   name: boolean
   created_at: Date | null,
   updated_at: Date | null,
}

export type Login = {
   username: string
   password: string
}
