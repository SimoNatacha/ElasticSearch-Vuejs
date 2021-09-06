// state
export const state = () => ({
  users: []
})
// getters
export const getters = {}
// actions
export const action = {
  async getUsers ({ commit }) {
    // hit api to get users
    console.log('hey here getUsers')
    const response = await this.$axios.get(
      'https://randomuser.me/api/?results=10'
    )
    const results = response.results
    console.log('users', results)
    console.log('hey here after results')
    commit('addUsers', results)
    console.log('users', results)
    return results
  }
}
// mutations
export const mutation = {
  addUsers (state, users) {
    state.users = users
  }
}
