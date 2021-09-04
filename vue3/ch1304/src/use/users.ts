import {ref, Ref} from 'vue'
import {useFetch} from '@/use/fetch'

interface User {
    id: number
    name: string
    email: string
}

type UsableUsers = Promise<{ users: Ref<User[] | undefined> }>

export async function useUsers(): UsableUsers {
    const loding:Ref<boolean> = ref(false)
    const {response: users, request} = useFetch<User[]>('http://jsonplaceholder.typicode.com/users')

    if (!loding.value) {
        await request()
        loding.value = true
    }
    return {users}
}