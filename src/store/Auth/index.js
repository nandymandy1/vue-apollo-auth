import {
    apolloClient
} from '@/vue-apollo';

import {
    LOGIN_USER,
    REGISTER_USER,
    GET_AUTHENTICATED_USER,
} from '../../gql';
import router from '@/router';

const state = {
    user: {},
    authStatus: false,
    token: localStorage.getItem('apollo-token') || null,
};

const getters = {
    user: state => state.user,
    authStatus: state => state.authStatus,
    isAuthenticated: state => !!state.token,
};

const actions = {
    async login({
        commit,
    }, authDetails) {
        try {
            const {
                data
            } = await apolloClient.mutate({
                mutation: LOGIN_USER,
                variables: {
                    ...authDetails
                }
            });
            console.log("DATA", data);

            let {
                token
            } = data.authenticateUser;

            commit('SET_TOKEN', token);
            localStorage.setItem('apollo-token', token);
            commit('LOGIN_USER', data.authenticateUser.user);
            router.push('/dashboard/posts');
        } catch (e) {
            console.log(e)
        }
    },

    async registerUser({
        commit,
    }, user) {
        const {
            data
        } = await apolloClient.mutate({
            mutation: REGISTER_USER,
            variables: {
                ...user
            }
        });

        let {
            token
        } = data.registerUser;

        commit('SET_TOKEN', token);
        localStorage.setItem('apollo-token', token);
        commit('LOGIN_USER', data.registerUser.user);
        router.push('/dashboard/posts');
    },

    async setUser({
        commit,
        dispatch
    }) {
        try {
            const {
                data
            } = await apolloClient.query({
                query: GET_AUTHENTICATED_USER
            });
            commit('LOGIN_USER', data.authUserProfile);
            router.push('/dashboard/posts');
        } catch (err) {
            dispatch('logOut');
        }
    },

    async logOut({
        commit
    }) {
        commit('LOGOUT_USER')
    }
};

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },

    LOGIN_USER(state, user) {
        state.authStatus = true
        state.user = {
            ...user
        }
    },

    LOGOUT_USER(state) {
        state.authStatus = ''
        state.token = '' && localStorage.removeItem('apollo-token');
        localStorage.clear();
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}