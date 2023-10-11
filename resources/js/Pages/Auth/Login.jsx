import { useEffect } from 'react';
import  Checkbox from '@/Components/Checkbox';

import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div className="container-login">
            <div className="col-login">
                    {status && <div className="alert alert-success mb-4">{status}</div>}
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mb-4 label-flex">
                        <InputLabel htmlFor="password" value="Password" />

<TextInput
    id="password"
    type="password"
    name="password"
    value={data.password}
    className="mt-1 block w-full"
    autoComplete="current-password"
    onChange={(e) => setData('password', e.target.value)}
/>

<InputError message={errors.password} className="mt-2" />
</div>

<div className="block mt-4">
<label className="flex items-center">
    <Checkbox
        name="remember"
        checked={data.remember}
        onChange={(e) => setData('remember', e.target.checked)}
    />

                            <span className="label-text">Remember me</span>
                            </label>
                        </div>
      <Link
                        href={route('register')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-4"
                    >
                        Don't have an account? Register
                    </Link>
                        <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (

                            <Link
                                href={route('password.request')}
                                className="link-hover link-focus"
                            >
                                Forgot your password?
                            </Link>
                        )}
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </div>

            </div>
        </GuestLayout>
    );
}
