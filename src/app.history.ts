import { createHashHistory } from 'history';

export default createHashHistory({
    basename: '',
    hashType: 'noslash',
    getUserConfirmation: (message, callback) => callback(window.confirm(message)),
});
