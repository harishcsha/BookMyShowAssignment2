let _initializeEnv = function () {
    let env = '';
    if(window.location.host.indexOf('stage') > -1 || window.location.host.indexOf('localhost') == 0) {
        env =  'STAGE';
    } else if (window.location.host.indexOf('-pp') > -1) {
        env = 'PREPROD'
    } else {
        env =  'PROD';
    }
    return env;
}


export
default {
    CURR_ENV: _initializeEnv()
}
