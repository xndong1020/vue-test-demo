import { getBlogPosts, getComments } from '@/api'
export const state = {
  blogPosts: []
}

export const getters = {
  blogPosts: state => state.blogPosts,
  hasBlogPosts: state => state.blogPosts.length > 0,
  numberOfPosts: state => state.blogPosts.length
}

export const mutations = {
  saveBlogPosts(state, blogPosts) {
    state.blogPosts = blogPosts
  }
}

export const actions = {
  getBlogPosts({ commit }) {
    return getBlogPosts()
      .then(res => {
        commit('saveBlogPosts', res.data)
      })
      .catch(error => console.log('error', error))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
