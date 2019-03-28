import Vue from 'vue'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
    issuer: 'https://dev-885724.okta.com/oauth2/default',
    client_id: '0oaea8lcnAanIL5BO356',
    redirect_uri: 'http://localhost:3000/implicit/callback',
    scope: 'openid profile email'
})

