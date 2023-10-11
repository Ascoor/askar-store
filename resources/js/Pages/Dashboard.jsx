import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="fw-bold fs-4 text-dark">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-5">
                <div className="container">
                    <div className="card">
                        <div className="card-body">You're logged in!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
