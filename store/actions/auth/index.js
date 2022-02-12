import Axios from 'axios'
import { removeCookie, setCookie } from '../../../util/session'
import {
  auth,
  memoryStrings,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  googleAuthProvider,
  signInWithPopup,
  signOut,
  apis,
} from '../../../services'
import axios from 'axios'

export const signInWithEmail = async ({ data, cbSuccess, cbFailure }) => {
  try {
    const { email, password } = data
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    const response = await axios(`api/getUser/${user.uid}`)
    const userProfile = response.data.data
    if (!userProfile.uid) {
      userProfile.uid = user.uid
    }
    setCookie(memoryStrings.userToken, user.uid)
    cbSuccess(userProfile)
  } catch (e) {
    console.log(e)
    cbFailure(e.message)
  }
}

export const signUpWithEmail = async ({
  data: values,
  cbSuccess,
  cbFailure,
}) => {
  try {
    let {
      email,
      password,
      username,
      firstName,
      lastName,
      type,
      address,
      birthday,
      phone,
      identityDocType,
      identityDoc,
      isApplicationSubmit,
    } = values

    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    const token = await user.getIdToken()

    const { data } = await Axios.post(`/api/user/register/`, {
      params: {
        email,
        username,
        provider: 'email',
        token,
        uid: user.uid,
        firstName,
        lastName,
        type,
        address,
        birthday,
        phone,
        identityDocType,
        identityDoc,
        isApplicationSubmit,
        //isUpdate: true,
      },
    })
    setCookie(memoryStrings.userToken, user.uid)
    cbSuccess(data)
  } catch (e) {
    console.log(e)
    cbFailure(e.message)
  }
}

export const updateProfile = async ({ data: values, cbSuccess, cbFailure }) => {
  try {
    const { data } = await Axios.post(`/api/user/update`, {
      params: values,
    })
    setCookie(memoryStrings.userToken, values.uid)
    cbSuccess(data)
  } catch (e) {
    console.log(e)
    cbFailure(e.message)
  }
}

export const signUpWithGoogle = async ({ cbSuccess, cbFailure }) => {
  try {
    const { user } = await signInWithPopup(auth, googleAuthProvider)

    if (!user) {
      return cbFailure()
    } else {
      const token = await user.getIdToken()

      const { data: registerData } = await Axios.post('/api/user/register/', {
        params: {
          email: user.email,
          username: user.displayName,
          provider: 'google',
          token,
          uid: user.uid,
        },
      })
      setCookie(memoryStrings.userToken, user.uid)
      cbSuccess(registerData)
    }
  } catch (e) {
    console.log(e)
    cbFailure(e.message)
  }
}

export const userSignOut = () => {
  try {
    removeCookie(memoryStrings.userToken)
    signOut(auth)
  } catch (error) {
    console.log('🚀 ~ file: index.js ~ line 70 ~ userSignOut ~ error', error)
  }
}

export const usersInfo = async ({ cbSuccess, cbFailure }) => {
  try {
    const { data } = await Axios.get('/api/user/getUserInfo/')
    cbSuccess(data)
  } catch (error) {
    cbFailure(error)
  }
}
