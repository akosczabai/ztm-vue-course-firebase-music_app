import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import SongItem from '../SongItem.vue'

describe('Snapshot SongItem.vue', () => {
  test('renders correctly', () => {
    const song = {
      docID: 'abc',
      modified_name: 'test',
      display_name: 'test',
      commnet_count: 5
    }

    const wrapper = shallowMount(SongItem, {
      propsData: { song },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
