import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { useRef, useState } from 'react';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import Swal from 'sweetalert2';
import PrimaryButton from '@/Components/PrimaryButton';
import Select from '@/Components/Select';
import InputFile from '@/Components/InputFile';
import { Popover, Transition } from '@headlessui/react'
import {BuildingOfficeIcon} from '@heroicons/react/24/outline'


export default function Dashboard(props) {
    const opciones = [
        {
            name: 'Empresas',
            href: 'empresa.index',
            icon: BuildingOfficeIcon
        },
        /*{
            name: 'Sucursales',
            href :
        },
        {
            name: 'Cobro de Membresia',
            href :
        },
        {
            name: 'Impresion Tiquete',
            href :
        },
        {
            name: 'Asistencia',
            href :
        },
        {
            name: 'Control Contable',
            href :
        },
        {
            name: 'Control Tributario',
            href :
        }*/
    ]

    return (
        <AuthenticatedLayout
            user={props.auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">CONFIGURACION INICIAL</h2>}
        >
            <Head title="Usuarios" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-purple-500 bg-opacity-50 overflow-hidden shadow-sm sm:rounded-lg">
                        <ul role="list" className="divide-y divide-gray-800 mx-12 px-12">
                            {opciones.map((opcion,i) => (
                                <li  className="flex justify-between gap-x-6 py-5">
                                    <div className="flex gap-x-4">                                    
                                        <opcion.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                        <p>{opcion.name}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
