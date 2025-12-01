import { useMutation } from '@tanstack/react-query';
import { postSignIn } from '../../apis/signIn.api';
import { useRouter } from 'next/navigation';
import { useDispatch, UseDispatch } from 'react-redux';
import { setUser } from '@/public/redux/slices/userSlice';

interface UseSignInRequestBody {
  email: string;
  password: string;
}

export const useSignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return useMutation({
    mutationFn: ({ email, password }: UseSignInRequestBody) => postSignIn({ email, password }),
    onError: (err) => { alert(err.message) },
    onSuccess: (res) => {
      dispatch(setUser({
        id: res.user.id,
        name: res.user.name,
        email: res.user.email,
        identifyCode: res.user.identifyCode,
        provider: res.user.provider,
      }))

      setTimeout(() => {
        router.push("/main");
      }, 500);
    },
  })
} 