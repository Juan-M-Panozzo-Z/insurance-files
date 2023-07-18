import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/users', { email, password });
      if (res.status === 201) {
        router.push('/login');
      }
    } catch (err) {
      console.error(err);
      setError(err.response.data.message);
    }
  };

  return (
    <>
        signup
    </>
  )
}