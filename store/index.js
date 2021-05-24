export const state = () => ({
  quiz: {
    answers: {},
    status: 'initial',
    currentQuestion: 1,
    successes: 0,
    errors: 0,
    result: null
  }
})

export const mutations = {
  changeAnswers(state, { question, answer }) {
    state.quiz.answers[question] = answer
  },
  changeStatus(state, status) {
    state.quiz.status = status
  },
  changeСurrentQuestion(state, count) {
    state.quiz.currentQuestion = count
  },
  changeResultAnswers(state, { successes, errors }) {
    state.quiz.successes = successes
    state.quiz.errors = errors
  },
  changeResult(state, data) {
    state.quiz.result = data
  },
  resetQuiz(state) {
    state.quiz = {
      answers: {},
      status: 'going',
      currentQuestion: 1,
      successes: 0,
      errors: 0,
      result: null
    }
  }
}
