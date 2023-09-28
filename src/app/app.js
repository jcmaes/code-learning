// import { login, logout } from './features/authentification';
//
// login();
// logout();

const auth = import('./features/authentification');

auth.then( m => {
    console.log(m);

    m.login();
})