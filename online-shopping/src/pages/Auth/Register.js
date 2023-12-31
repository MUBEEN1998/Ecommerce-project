import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [answer, setAnswer] = useState('');
  const links="https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg?w=996&t=st=1700297561~exp=1700298161~hmac=d2459c8e968364e70b2886f65078b9933dc7b41e44464c7d27af9bc4766efdb5"
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      toast.success('Register success');
      const res = await axios.post('/api/v1/auth/register', {
        name,
        email,
        phone,
        address,
        password,
        answer,
      });
      if (res) {
        toast.success(res.data.message);
        console.log(res.data.message);
        navigate('/login');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <Layout>
    <div className=' py-4' style={{ backgroundImage:` url(${links})`, backgroundSize:"cover" }}>
    <section className=" dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0">
    
    <div className="w-full mt-20 bg-white rounded-lg shadow dark:border hover:shadow-xl md:mt-0 sm:max-w-md xl:p-0 dark:bg-red-900 dark:border-red-400">
      <div className="p-4  sm:p-4">
        <h1 className="text-xl font-bold leading-tight  text-red-900 md:text-2xl dark:text-white">
          Creat Account
        </h1>
        <form className="space-y-2 md:space-y-2" onSubmit={handlesubmit} action="#">
          <div>
            <input type="text" name="name" 
            onChange={(e)=>setName(e.target.value)}

             value={name}
             className="bg-gray-20 border
             border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
              focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="name" required />
          </div>
          <div class=""></div>

          <div>
            <input type="email" name="email"
            onChange={(e)=>setEmail(e.target.value)}

            value={email}
             className="bg-gray-20 border
             border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
              focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="name@company.com" required />
          </div>
          <div>
            <input type="Number" name="phone"
            onChange={(e)=>setPhone(e.target.value)}

            value={phone}
             className="bg-gray-20 border
             border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
              focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="phone" required />
          </div>
          <div>
            <input type="text" name="address" 
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
             placeholder="address" className="bg-gray-20 border
             border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
              focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
          </div>

          <div>
            <input type="text" name="answer" 
            value={answer}
            onChange={(e)=>setAnswer(e.target.value)}
             placeholder="answer" className="bg-gray-20 border
             border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
              focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
          </div>


          <div>
            <input type="text" name="password" 
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            placeholder="••••••••"
             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
               dark:focus:border-blue-500" required />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="terms" aria-describedby="terms" type="checkbox" className="bg-gray-20 border
             border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
              focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
            </div>
            <div className="ml-3 text-sm">
            </div>
          </div>
          <button type="submit" className="w-full
           text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... hover:bg-gray-800 md:text-white text-gray-500 focus:ring-4
           focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center
            dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline
             dark:text-primary-500">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
    </Layout>
    </>
  )
}

export default Register