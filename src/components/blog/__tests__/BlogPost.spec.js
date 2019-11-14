import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import BlogPost from '@/components/blog/BlogPost'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Testing BlogPost.vue', () => {
  let wrapper
  let store
  beforeEach(() => {
    store = new Vuex.Store({})
    wrapper = shallowMount(BlogPost, {
      localVue,
      store,
      propsData: {
        post: {
          title: 'some title',
          body: 'Lorem ipsum',
          id: 1
        }
      }
    })
  })

  it('renders without errors', () => {
    expect(wrapper.contains('div.blog-post')).toBe(true)
  })
})
