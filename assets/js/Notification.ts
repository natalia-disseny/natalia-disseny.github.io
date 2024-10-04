import { ref, type InjectionKey } from 'vue'

interface NotificationInterface {
    description: string
    category: 'success' | 'info' | 'error'
}

// const notification = ref(Symbol() as InjectionKey<NotificationInterface>)
const notification = ref()


export default notification
export type { NotificationInterface }
