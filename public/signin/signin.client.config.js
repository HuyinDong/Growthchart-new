/**
 * Created by dongyin on 9/7/15.
 */
signin.config(function($authProvider) {
    $authProvider.facebook({
        clientId: '1650769961876938'
    });

    $authProvider.google({
        clientId: '526876616106-0vs3d4u7hk68guk0lcdou385j1f8p24b.apps.googleusercontent.com'
    });

    $authProvider.github({
        clientId: 'GitHub Client ID'
    });

    $authProvider.linkedin({
        clientId: 'LinkedIn Client ID'
    });

    $authProvider.yahoo({
        clientId: 'Yahoo Client ID / Consumer Key'
    });

    $authProvider.live({
        clientId: 'Microsoft Client ID'
    });
    $authProvider.twitch({
        clientId: 'Twitch Client ID'
    });

    // No additional setup required for Twitter

    $authProvider.oauth2({
        name: 'foursquare',
        url: '/auth/foursquare',
        clientId: 'Foursquare Client ID',
        redirectUri: window.location.origin,
        authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });

    $authProvider.google({
        url: '/auth/google',
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
        redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
        requiredUrlParams: ['scope'],
        optionalUrlParams: ['display'],
        scope: ['profile', 'email'],
        scopePrefix: 'openid',
        scopeDelimiter: ' ',
        display: 'popup',
        type: '2.0',
        popupOptions: { width: 452, height: 633 }
    });
});