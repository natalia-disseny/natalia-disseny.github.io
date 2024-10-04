interface CustomerInterface {
    name: string
    email: string
    company?: string
    message: string
}

interface NotificationInterface {
    description: string
    category: 'success' | 'info' | 'error'
}

export type { CustomerInterface, NotificationInterface }
