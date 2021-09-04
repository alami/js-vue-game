import {ref, Ref} from 'vue'
import {useFetch} from '@/use/fetch'

export async function useUsers(): Promise<any> {
    const loding:Ref<boolean> = ref(false)
    const {response: users, request} = useFetch('http://jsonplaceholder.typicode.com/users')

    if (!loding.value) {
        await request()
        loding.value = true
    }
    return {users}
}