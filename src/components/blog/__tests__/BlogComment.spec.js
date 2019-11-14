import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import BlogComment from '@/components/blog/BlogComment'
import flushPromise from 'flush-promises'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Testing BlogComment.vue', () => {
  let wrapper
  let store
  let actions
  beforeEach(() => {
    actions = {
      getComments: jest.fn(() => {
        return new Promise(resolve => {
          global.process.nextTick(() => {
            resolve({ data: [{ title: 'comment 1' }, { title: 'comment 2' }] })
          })
        })
      })
    }
    store = new Vuex.Store({
      modules: {
        blog: {
          namespaced: true,
          actions
        }
      }
    })
    wrapper = shallowMount(BlogComment, {
      localVue,
      store,
      propsData: {
        id: 1
      },
      stubs: {
        Loader: '<div class="loader"></div>'
      }
    })
  })

  it('renders without errors', () => {
    expect(wrapper.contains('div.blog-comments')).toBe(true)
  })

  it('calls action to get comments on mounted', () => {
    expect(actions.getComments).toHaveBeenCalled()
  })

  it('show loader initially, then hide it when comments are loaded', async () => {
    expect(wrapper.contains('.loader')).toBe(true)
    await flushPromise()
    expect(wrapper.contains('.loader')).toBe(false)
  })
})
