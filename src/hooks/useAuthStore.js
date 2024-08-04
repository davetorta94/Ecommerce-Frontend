import { useDispatch, useSelector } from "react-redux"
import ecommerceApi from "../api/ecommerceApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/slices/auth/authSlice";





export const useAuthStore = () => {


    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({email, password}) => {
        
        dispatch( onChecking() );

        try {

            const { data } = await ecommerceApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( onLogin({ name: data.name, uid: data.uid}) );
            
        } catch (error) {
            dispatch( onLogout('Credenciales Incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const startRegistry = async({email, password, name}) => {
        dispatch( onChecking() );

        try {

            const { data } = await ecommerceApi.post('/auth/new', { email, password, name });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( onLogin({ name: data.name, uid: data.uid}) );
            
        } catch (error) {
            dispatch( onLogout( error.response.data?.msg || '') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch( onLogout() );

        try {
            const { data } = await ecommerceApi.get('auth/renew');
            localStorage.setItem( 'token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( onLogin({ name: data.name, uid: data.uid}) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );
    }

    return {

        //* Propiedades
        status, 
        user, 
        errorMessage,

        //*Métodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegistry,

    }
}