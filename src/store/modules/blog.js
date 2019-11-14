import { getBlogPosts, getComments } from '@/api'
export const state = {
  blogPosts: [],
  comments: []
}

export const getters = {
  blogPosts: state => state.blogPosts,
  hasBlogPosts: state => state.blogPosts.length > 0,
  numberOfPosts: state => state.blogPosts.length
}

export const mutations = {
  saveBlogPosts(state, blogPosts) {
    state.blogPosts = blogPosts
  },

  saveBlogComments(state, blogComments) {
    state.comments = blogComments
  }
}

export const actions = {
  getBlogPosts({ commit }) {
    return getBlogPosts()
      .then(res => {
        commit('saveBlogPosts', res.data)
      })
      .catch(error => console.log('error', error))
  },
  getComments({ commit }, postId) {
    return getComments(postId)
      .then(res => {
        commit('saveBlogComments', res.data)
        return res.data
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
