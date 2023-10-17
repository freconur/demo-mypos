// ./initAuth.js
import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    
    authPageURL: '/register-login',
    appPageURL: '/dashboard/registro-ventas',
    loginAPIEndpoint: '/api/login',
    logoutAPIEndpoint: '/api/logout',
    onLoginRequestError: (err) => {
      console.error(err)
    },
    onLogoutRequestError: (err) => {
      console.error(err)
    },
    // firebaseAuthEmulatorHost: 'localhost:3000',
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'fir-mypos',
        clientEmail: 'firebase-adminsdk-919dc@fir-mypos.iam.gserviceaccount.com',
        privateKey: process.env.FIREBASE_PRIVATE_KEY as string
      },
    },
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyDC8SLrbJFpjhh1g57SqTes6SOWKh7miD0', // required
      authDomain: 'fir-mypos.firebaseapp.com',
      // databaseURL: 'https://my-example-app.firebaseio.com',
      projectId: 'fir-mypos',
    },
    cookies: {
      name: 'demo-mypos', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 1 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err)
    },
    onTokenRefreshError: (err) => {
      console.error(err)
    },
  })
}

export default initAuth