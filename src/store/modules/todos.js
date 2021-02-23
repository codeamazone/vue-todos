/* eslint-disable */
import Vue from "vue";
import '@/plugins/axios'
import Validation from "@/inc/validation"
import auth from "./auth";

const apiRoute = "/api/todos",
	axios = Vue.axios;

const state = {
	todos: null,
	storeErrors: null,
	updateErrors: null,
}

const getters = {
	allTodos: state => state.todos,
	getStoreErrors: state => state.storeErrors,
	getUpdateErrors: state => state.updateErrors,
}

const actions = {
	_checkAuth() {
		if(auth.state.user) {
			axios.defaults.headers.common['Authorization'] = "Bearer " + auth.state.user.token;
		}
	},
	all({commit}) {
		axios.get(apiRoute)
			.then(resp => {
				commit('setTodos', resp.data.data)
			})
			.catch(err => {
				Validation.handleErrors(err)
			});
	},
	add({commit}, newTodo) {
		actions._checkAuth()
		axios.post(apiRoute, newTodo)
			.then(resp => {
				if(resp.data.error) {
					commit('setStoreErrors', resp.data.error)
				} else {
					commit('unsetStoreErrors')
					commit('addTodo', resp.data.data)
				}
			})
			.catch(err => {
				Validation.handleErrors(err)
				commit('setStoreErrors', err)
			});
	},
	update({commit}, todo) {
		actions._checkAuth()
		axios.put(apiRoute + "/" + todo.id, todo)
			.then(resp => {
				if(resp.data.error) {
					commit('setUpdateErrors', resp.data.error)
				} else {
					commit('unsetUpdateErrors')
					commit('updateTodo', resp.data.data)
				}
			})
			.catch(err => {
				Validation.handleErrors(err)
				commit('setUpdateErrors', err)
			});
	},
	remove({commit}, todo) {
		actions._checkAuth()
		axios.delete(apiRoute + "/" + todo.id)
			.then(resp => {
				if(resp.data.data) {
					commit('removeTodo', todo)
				}
			})
			.catch(err => {
				Validation.handleErrors(err)
			});
	}
}

const mutations = {
	setTodos: (state, todos) => state.todos = todos,
	addTodo: (state, todo) => (state.todos.unshift(todo)),
	updateTodo: (state, todo) => (state.todos = state.todos.map(item => (item === todo) ? todo : item )),
	removeTodo: (state, todo) => (state.todos = state.todos.filter(item => item !== todo)),
	setStoreErrors: (state, errors) => (state.storeErrors = errors),
	unsetStoreErrors: (state) => (state.storeErrors = null),
	setUpdateErrors: (state, errors) => (state.updateErrors = errors),
	unsetUpdateErrors: (state) => (state.updateErrors = null),
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
