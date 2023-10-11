import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function BrandsIndex({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="fw-bold fs-4 text-dark">Brands</h2>}
        >
            <Head title="Brands" />

            <div className="py-5">
                <div className="container">
                    <div className="card">
                   Brand
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
