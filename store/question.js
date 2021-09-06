export const state = () => ({
  questions: {}
})

export const mutations = {
  add (state, data) {
    state.questions = data
    console.log('new state', state.questions)
  }
}

export const getters = {
  getQuestByid: state => (id) => {
    return state.questions.filter(quest => quest.id === id)
  }
}
