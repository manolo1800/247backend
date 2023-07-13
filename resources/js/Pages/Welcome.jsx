import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const img_latin = 'imgs/latin.png';
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex flex flex-col sm:justify-center sm:items-center min-h-screen bg-dark-gray">
                <div className='pb-20'>
                    <h1 className='text-white' >BIENVENIDO A TU GIMNASIO</h1>
                </div>
                <div className=" w-90 p-6 text-right bg-white">



                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-cyan-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-cyan-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-cyan-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <img className='pt-20' src={img_latin}/>


            </div>

            <style>{`
                .bg-index {
                    dark-gray
                }
            `}</style>
        </>
    );
}
