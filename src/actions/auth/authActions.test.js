import * as type from './actionTypes';
import configureMockStore from 'redux-mock-store'
import mockAxios from 'axios'
import thunk from 'redux-thunk'
import { fetchLogin, fetchSignup } from './authActions';
import 'babel-polyfill';

jest.mock('axios')

describe('fetchLogin', () => {
    it('should dispatch success action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()

        const mockUserData = { username: 'makabugo', password: 'fahad12345' }
        const message = { 'message': "login successful" }

        mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: message.message }))

        const expectedActions = [
            { type: type.FETCH_AUTH_SUCCESS, message: message.message },
        ]

        await store.dispatch(fetchLogin(mockUserData))

        expect(store.getActions()).toEqual(expectedActions)
        expect(mockAxios.post).toHaveBeenCalledTimes(1)
    })

    it('should dispatch failure action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()
        const mockUserData = { username: 'mutebile', password: 'BOUscandal' }
        const error = { 'errors': "Username and password do not match" }

        mockAxios.post.mockImplementationOnce(() => Promise.reject({ response: "Username and password do not match" }))

        const expectedActions = [
            { type: type.FETCH_AUTH_FAILURE, error: error.errors },
        ]

        await store.dispatch(fetchLogin(mockUserData))

        expect(store.getActions()).toEqual(expectedActions)
    })
})

describe('fetchSignup', () => {
    it('should dispatch success action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()

        const mockUserData = { username: 'makabugo', password: 'fahad12345' }
        const message = { 'message': "sign up successful" }

        mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: message }))

        const expectedActions = [
            { type: type.FETCH_AUTH_SUCCESS, message: message },
        ]

        await store.dispatch(fetchSignup(mockUserData))

        expect(store.getActions()).toEqual(expectedActions)
        expect(mockAxios.post).toHaveBeenCalledTimes(1)
    })

    it('should dispatch failure action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()
        const mockUserData = { username: '', password: '', name: '' }
        const error = { 'errors': "Please fill in gthe empty fields" }

        mockAxios.post.mockImplementationOnce(() => Promise.reject({ response: "Please fill in gthe empty fields" }))

        const expectedActions = [
            { type: type.FETCH_AUTH_FAILURE, error: error.errors },
        ]

        await store.dispatch(fetchSignup(mockUserData))

        expect(store.getActions()).toEqual(expectedActions)
    })
})
