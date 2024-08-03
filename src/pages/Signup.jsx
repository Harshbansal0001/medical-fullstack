import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the millions learning to code with Maa Shamla Mediclas for free"
      description1="Sign up or Sign in to access your orders, special offers, health tips and more!"
      // description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
