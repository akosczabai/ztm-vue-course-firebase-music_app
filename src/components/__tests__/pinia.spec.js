import { setActivePinia, createPinia } from 'pinia'
import useUserStore from '@/stores/user'

vi.mock('@/includes/firebase', () => ({
  auth: {
    signInWithEmailAndPassword: () => Promise.resolve()
  }
}))

describe('stores', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('authenticate User', async () => {
    const store = useUserStore()

    expect(store.userLoggedIn).not.toBe(true)
    await store.authenticate({})

    expect(store.userLoggedIn).toBe(true)
  })
})
