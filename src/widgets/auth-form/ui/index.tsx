import { zodResolver } from '@hookform/resolvers/zod';
import { useUnit } from '@lib/effector';
import { Button } from '@ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/form';
import { Input } from '@ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { authModel } from '@features/auth';
import * as model from '../model';

const FormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Имя пользователя должно содержать минимум 2 символа.',
    })
    .max(20, {
      message: 'Имя пользователя должно содержать максимум 20 символов.',
    }),
  password: z
    .string()
    .min(2, {
      message: 'Пароль должен содержать минимум 2 символа.',
    })
    .max(20, {
      message: 'Пароль должен содержать максимум 20 символов.',
    }),
});

export const AuthForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const {
    login,
    register,
  } = useUnit({
    login: authModel.login,
    register: authModel.register,
  })

  const { type, toggle } = useUnit({
    type: model.$type,
    toggle: model.toggle,
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    return type === 'login' ? login(data) : register(data);
  };

  return (
    <div className="container relative min-h-screen flex flex-col items-center justify-center gap-6">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-2xl">{type === 'login' ? 'Вход' : 'Регистрация'}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя пользователя</FormLabel>
                    <FormControl>
                      <Input placeholder="john" autoComplete="off" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Пароль</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                {type === 'login' ? 'Войти' : 'Создать аккаунт'}
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            {type === 'login' ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
            <button className="underline" onClick={toggle}>
              {type === 'login' ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
