import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} className="container mt-5">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={data.name}
                        className="form-control"
                        autoComplete="name"
                        required
                        onChange={(e) => setData('name', e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2 text-danger" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="form-control"
                        autoComplete="username"
                        required
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2 text-danger" />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="form-control"
                        autoComplete="new-password"
                        required
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2 text-danger" />
                </div>

                <div className="mb-4">
                    <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>

                    <input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="form-control"
                        autoComplete="new-password"
                        required
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                    />

                    <InputError message={errors.password_confirmation} className="mt-2 text-danger" />
                </div>

                <div className="d-flex justify-content-between">
                    <Link
                        href={route('login')}
                        className="text-decoration-none text-muted"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="btn btn-primary" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
