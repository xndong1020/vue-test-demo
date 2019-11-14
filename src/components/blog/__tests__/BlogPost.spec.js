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
      },
      stubs: {
        BlogComment: '<div class="blog-comments"></div>'
      },
      mocks: {
        $settings: {
          enableComments: true
        }
      }
    })
  })

  it('renders without errors', () => {
    expect(wrapper.contains('div.blog-post')).toBe(true)
  })

  it('should not show body when created', () => {
    expect(wrapper.contains('.body')).toBe(false)
  })

  it('should show body when title clicked once', () => {
    const title = wrapper.find('h3.title')
    title.trigger('click')
    expect(wrapper.contains('.body')).toBe(true)
  })

  it('should toggle body when title clicked twice', () => {
    const title = wrapper.find('h3.title')
    title.trigger('click')
    title.trigger('click')
    expect(wrapper.contains('.body')).toBe(false)
  })

  it('should render correct content', () => {
    const title = wrapper.find('h3.title')
    title.trigger('click')
    expect(wrapper.html()).toContain('some title')
    expect(wrapper.html()).toContain('Lorem ipsum')
  })

  it('add expanded class to expanded blog post', () => {
    const title = wrapper.find('h3.title')
    title.trigger('click')
    expect(wrapper.classes()).toContain('expanded')
  })

  // it('should show comments when expanded', () => {
  //   const title = wrapper.find('h3.title')
  //   title.trigger('click')
  //   expect(wrapper.contains('.blog-comments')).toBe(true)
  // })

  it('should show comments when $settings is enabled', () => {
    const title = wrapper.find('h3.title')
    title.trigger('click')
    expect(wrapper.contains('.blog-comments')).toBe(true)

    // now set enableComments to false, and BlogComment should be hided
    wrapper.vm.$settings.enableComments = false
    expect(wrapper.contains('.blog-comments')).toBe(false)
  })
})
