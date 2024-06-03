import { useContext} from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    // const captaRef = useRef(null)
    // const [disable,setDisable] = useState(true)
    const {signIn} = useContext(AuthContext)
    // useEffect(()=>{
    //     loadCaptchaEnginge(6);
    // },[])
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then((result)=>{
            const user = result.user
            console.log(user);
            if(user.uid){
                Swal.fire({
                    title: "The Internet?",
                    text: "That thing is still around?",
                    icon: "question"
                  });
                  navigate(from,{replace:true})
            }
            
        })
        .catch((error)=>{
            const errorMessage = error.message;
            console.log(errorMessage);
        })

    }
    // const handleValidateCapta = () =>{
    //     const user_capta_value = captaRef.current.value;
    //     if(validateCaptcha(user_capta_value)){
    //         setDisable(false)
    //     }
    // }


    
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Bistro Boss || Log in</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center lg:text-left md:w-[50%]">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input ref={captaRef} type="text" name="capta" placeholder="Type the text avobe" className="input input-bordered" required />
                                <button onClick={handleValidateCapta} className="btn btn-outline btn-xs mt-2">Validate</button>
                            </div> */}
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'><small>New Hear ? <Link to='/signup' className='text-blue-600'>Create an account</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;