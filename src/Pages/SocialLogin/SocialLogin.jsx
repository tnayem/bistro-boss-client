import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignin} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    // Handle Google SIgnin
    const handleGoogleSignIn =()=>{
        googleSignin()
        .then(result=>{
            const user = result?.user;
            const userInfo = {
                email:user?.name,
                name:user?.displayName

            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className="p-8">
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn text-yellow-700">
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;