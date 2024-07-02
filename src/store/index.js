import { createStore } from 'vuex'

export default createStore({
  state: {
    education: null,
    aboutMe: null,
    workExp: null,
    projects: null,
    testimonials: null,
    skills: null
  },
  getters: {
  },
  mutations: {  
    setEducation(state, content) {
      state.education = content
    },
    setAboutMe(state, content) {
      state.aboutMe = content
    },
    setWorkExp(state, content) {
      state.workExp = content
    },
    setProjects(state, content) {
      state.projects = content
    },
    setTestimonials(state, content) {
      state.testimonials = content
    },
    setSkills(state, content) {
      state.skills = content
    }
  },
  actions: {
    async getData({commit}){
      try {
        let response = await fetch('https://oyintanda-zongwana.github.io/first_api/data/')
        let data = await response.json()
        commit('setAboutMe', data.aboutMe),
        commit('setProjects', data.projects),
        commit('setEducation', data.education),
        commit('setSkills', data.skills),
        commit('setWorkExp', data.workExp),
        commit('setTestimonials', data.testimonials)
      } catch (error) {
        console.error(error)
      }
    },
  },
  modules: {
    // used if you want to separate your code to make it more readable 
  }
})