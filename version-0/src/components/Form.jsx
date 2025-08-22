//import styles
import "./Form.css";
export default function Form()
{
    return(<>
        <form>
            <h2> My Profile</h2>
            <p> <input name="fullName" type="text" placeholder="Full Name" /> </p>          
            <p> <input name="email" type="email" placeholder="Email"/> </p>
            <p> <input name="country" type="text" placeholder="Country"/> </p>      
            <textarea placeholder="Bio" name="bio" rows="4" />
            <button type="submit"> Submit </button>
        </form>
    </>);
}