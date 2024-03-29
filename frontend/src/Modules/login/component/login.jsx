import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import "./login.css";
import { Schema } from '../Api/schema'
import user from '../../../data/user';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Schema) });
    const navigate = useNavigate();
   
    const onSubmit = (data) => {
        user.forEach((users) => {
            const email = users.email;
            const password = users.password;
            if (data.email === email && data.password === password) {
                navigate("/card")
            }else{
                alert("verifier vos informations")
            }
        })
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Connexion</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Entrez votre e-mail"
                            {...register("email", { required: true })}
                        />
                        <span className="error-message">{errors.email?.message}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Entrez votre mot de passe"
                            {...register("password", { required: true })}
                        />
                        <span className="error-message">{errors.password?.message}</span>
                    </div>
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
