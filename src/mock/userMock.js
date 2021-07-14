import mock from '../utils/mock';

/*200 significa que a requisição deu certo*/
mock.onPost('/api/home/login').reply((config) => {
    const {email, password} = JSON.parse(config.data);

    if(email !== 'felipericardoevaristo@gmail.com' || password !== 'admin'){
        return [400, {message: 'Seu e-mail ou senha estão incorretos'}]
    }
    /*caso estiver correto segue o fluxo abaixo*/
    const user={
        id:1,
        name: 'Felipe Ricardo',
        username: 'felipericardoevaristo',
        email: 'felipericardoevaristo@gmail.com'
    }

    return [200, {user}]
});