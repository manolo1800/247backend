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

export default function Dashboard(props) {
    const [modal,setModal] = useState(false);
    const [title, setTitle ] = useState('');
    const [buttonMenssage,setButtonMenssage] = useState('');
    const [operation,setOperation] = useState(1);
    const nameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const password_confirmationInput = useRef();
    const profile_photo_pathInput = useRef();
    const id_user_typeInput = useRef();

    const options = props.user_types.map( i => {
        return {value: i.id, label: i.user_type};
    });

    //definir los campos y metodos a enviar
    const {data,setData,delete:destroy,post,puth,processing,reset,errors} = useForm({
        id: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        profile_photo_path: '',
        id_user_type: '',
    });

    //abrir modal y determinar si se crea o se actualiza
    const openModal = (op,id,name,email,password,password_confirmation,profile_photo_path,id_user_type) => {

        setModal(true);
        setOperation(op);
        setData({name:'',email:'',password:'',password_confirmation:'',id_user_type:'',profile_photo_path:''});

        //si la variable op es = 1 muestra el form de crear sino muestra el de actualizar
        if(op == 1){
            setTitle('Crear usuario');
            setButtonMenssage('Crear');
        }else{
            setTitle('Actualizar usuario');
            setButtonMenssage('Actualizar');
            setData({id:id,name:name,email:email,password:password,password_confirmation:password_confirmation,profile_photo_path:profile_photo_path,id_user_type:id_user_type});
        }
    }

    //cerrar modal
    const closeModal = () => {
        setModal(false);
    }

    //guardar datos
    const save = (e) => {
        e.preventDefault();

        post(route('user.store'));
    }

    const borrar = (id) => {
        alert(id);
    }
    return (
        <AuthenticatedLayout
            user={props.auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">USUARIOS</h2>}
        >
            <Head title="Usuarios" />
            <div className="grid v-screen place-items-center">
                <div className="mt-3 mb-3 flex justify-end">
                    <PrimaryButton onClick={()=>openModal(1)}>
                        <i className="fa-solid fa-plus-circle"></i>
                        crear
                    </PrimaryButton>
                </div>
            </div>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-purple-500 bg-opacity-50 overflow-hidden shadow-sm sm:rounded-lg">
                        <ul role="list" className="divide-y divide-gray-800 mx-12 px-12">
                            {props.users.map((user,i) => (
                                <li key={user.email} className="flex justify-between gap-x-6 py-5">
                                    <div className="flex gap-x-4">
                                        <img onClick={()=>openModal(2,user.id,user.name,user.email,user.profile_photo_path)} className="h-12 w-12 flex-none rounded-full bg-gray-50" src={user.profile_photo_path} alt="" />
                                        <div className="min-w-0 flex-auto">
                                            <p onClick={()=>openModal(2,user.id,user.name,user.email,user.profile_photo_path)} className="text-sm font-semibold leading-6 text-gray-900">{user.name}</p>
                                            <p onClick={()=>openModal(2,user.id,user.name,user.email,user.profile_photo_path)} className="mt-1 truncate text-xs leading-5 text-gray-500">{user.email}</p>
                                        </div>
                                    </div>

                                    <div className="hidden sm:flex sm:flex-col sm:items-end mt-3">
                                        <svg onClick={()=>borrar(user.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                        </svg>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
            <Modal show={modal} onClose={closeModal}>
                <form onSubmit={save} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        {title}
                    </h2>

                    <div className='py-5'>
                    <InputLabel htmlFor="id_user_type" value="Permisos de usuario" />
                        <Select
                            options={options}
                            id="id_user_type"
                            name="id_user_type"
                            ref={id_user_typeInput}
                            className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            selcthandle={(e) => setData('id_user_type', e.target.value)}
                            required
                        />
                        <InputError message={errors.id_user_type} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="name" value="Nombre" />

                        <TextInput
                            id="name"
                            name="name"
                            ref={nameInput}
                            value={data.name}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            ref={emailInput}
                            value={data.email}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Contraseña" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password_confirmation" value="Confirmar contraseña" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            ref={password_confirmationInput}
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="profile_photo_path" className="block text-sm font-medium leading-6 text-gray-900">
                            Foto
                        </label>

                        <InputFile
                            id="profile_photo_path"
                            name="profile_photo_path"
                            type="file"
                            ref={profile_photo_pathInput}
                            //value={data.profile_photo_path}
                            filehandle={(e) => setData('profile_photo_path', e.target.files[0])}
                            className="sr-only"
                        >
                        </InputFile>
                    </div>


                    <div className="mt-6 flex justify-end">

                        <DangerButton className="ml-3" onClick={closeModal} disabled={processing}>
                            Cancelar
                        </DangerButton>

                        <PrimaryButton className="ml-4" disabled={processing}>
                            {buttonMenssage}
                        </PrimaryButton>

                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
