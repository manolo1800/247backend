import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { useState } from 'react';
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
    const nombre_empresaInput = useState();
    const color_dashboardInput = useState();
    const color_letra_titleInput = useState();
    const color_letra_dashboardInput = useState();
    const color_letra_bodyInput = useState();
    const color_boton_crearInput = useState();
    const logo_file_pathInput = useState();

    //definir los campos y metodos a enviar
    const {data,setData,delete:destroy,post,put,processing,reset,errors} = useForm({
        id: '',
        nombre_empresa: '',
        color_dashboard: '',
        color_letra_title: '',
        color_letra_dashboard: '',
        color_letra_body: '',
        color_boton_crear: '',
        logo_file_path: '',
    });

    /*//abrir modal y determinar si se crea o se actualiza
    const openModal = (op,id,nombre_empresa,color_dashboard,color_letra_title,color_letra_dashboard,color_letra_body,color_boton_crear,logo_file_path) => {

        setModal(true);
        setOperation(op);
        setData({nombre_empresa:'',color_dashboard:'',color_letra_title:'',color_letra_dashboard:'',color_letra_body:'',color_boton_crear:'',logo_file_path:''});

        //si la variable op es = 1 muestra el form de crear sino muestra el de actualizar
        if(op == 1){
            setShowcolor_letra_title(true);
            setTitle('Crear usuario');
            setButtonMenssage('Crear');
        }else{
            setShowcolor_letra_title(false);
            setTitle('Actualizar usuario');
            setButtonMenssage('Actualizar');
            setData({id:id,nombre_empresa:nombre_empresa,color_dashboard:color_dashboard,color_letra_title:color_letra_title,color_letra_dashboard:color_letra_dashboard,color_letra_body:color_letra_body,color_boton_crear:color_boton_crear,logo_file_path:logo_file_path});
        }
    }

    //cerrar modal
    const closeModal = () => {
        setModal(false);
    }

    const ok = (mensaje) => {
        reset();
        closeModal();
        Swal.fire({title:mensaje,icon:'success'});
    }

    //guardar datos
    const save = (e) => {
        e.preventDefault();
        //setModal(false);

        if(operation === 1)
        {
            post(route('empresa.store'),{
                onSuccess: () => {ok('se creo con exito')},
                onError: () => {
                    if(errors.nombre_empresa)
                    {
                        reset('nombre_empresa');
                        nombre_empresaInput.current.focus();
                    }
                    if(errors.nombre_empresa)
                    {
                        reset('nombre_empresa');
                        nombre_empresaInput.current.focus();
                    }
                    if(errors.color_dashboard)
                    {
                        reset('color_dashboard');
                        color_dashboardInput.current.focus();
                    }
                    if(errors.color_letra_title)
                    {
                        reset('color_letra_title');
                        color_letra_titleInput.current.focus();
                    }
                    if(errors.color_letra_dashboard)
                    {
                        reset('color_letra_dashboard');
                        color_letra_dashboardInput.current.focus();
                    }
                }
            });
        }else{
            put(route('empresa.update',data.id),{
                onSuccess: () => {ok('se modifico con exito')},
                onError: () => {
                    if(errors.nombre_empresa)
                    {
                        reset('nombre_empresa');
                        nombre_empresaInput.current.focus();
                    }
                    if(errors.nombre_empresa)
                    {
                        reset('nombre_empresa');
                        nombre_empresaInput.current.focus();
                    }
                    if(errors.color_dashboard)
                    {
                        reset('color_dashboard');
                        color_dashboardInput.current.focus();
                    }
                    if(errors.color_letra_title)
                    {
                        reset('color_letra_title');
                        color_letra_titleInput.current.focus();
                    }
                    if(errors.color_letra_dashboard)
                    {
                        reset('color_letra_dashboard');
                        color_letra_dashboardInput.current.focus();
                    }
                }
            });
        }

    }

    const borrar = (id,nombre_empresa) => {
        const alerta = Swal.mixin({buttonsStyling:true});
        alerta.fire({
            title:'seguro desea eliminar a <br>'+nombre_empresa,
            text:'se perdera el usuario',
            icon:'question',showCancelButton:true,
            confirmButtonText: '<i class="fa-solid fa-check"></i> Si, eliminar ',
            cancelButtonText: '<i class="fa-solid fa-check"></i> Cancelar ',
        }).then((result) => {
            if(result.isConfirmed)
            {
                destroy(route('empresa.destroy',id),{
                    onSuccess: () => {ok('se elimino con exito')},
                });
            }
        })

    }*/

    return (
        <AuthenticatedLayout
            //empresa={props.auth}
            header={<h2 classname="font-semibold text-xl text-gray-800 leading-tight">USUARIOS</h2>}
        >
            <Head title="Usuarios" />
            <div classname="grid v-screen place-items-center">
                <div classname="mt-3 mb-3 flex justify-end">
                    {/*
                        <PrimaryButton onClick={()=>openModal(1)}>
                        <i classname="fa-solid fa-plus-circle"></i>
                        crear
                        </PrimaryButton>
                    */}
                </div>
            </div>
            <div classname="py-12">
                <div classname="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div classname="bg-purple-500 bg-opacity-50 overflow-hidden shadow-sm sm:rounded-lg">
                        <ul role="list" classname="divide-y divide-gray-800 mx-12 px-12">
                            {props.empresas.map((empresa,i) => (
                                <li key={empresa.color_dashboard} classname="flex justify-between gap-x-6 py-5">
                                    <div classname="flex gap-x-4">
                                        <img  classname="h-12 w-12 flex-none rounded-full bg-gray-50" src={empresa.color_letra_body} alt="" />
                                        <div classname="min-w-0 flex-auto">
                                            <p  classname="text-sm font-semibold leading-6 text-gray-900">{empresa.nombre_empresa}</p>
                                            <p  classname="mt-1 truncate text-xs leading-5 text-gray-500">{empresa.color_dashboard}</p>
                                        </div>
                                    </div>
                                    {/*
                                    <div classname="hidden sm:flex sm:flex-col sm:items-end mt-3">
                                        <svg onClick={()=>borrar(empresa.id,empresa.nombre_empresa)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" classname="w-6 h-6">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                        </svg>
                                    </div>
                                    */}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
            {/*
            <Modal show={modal} onClose={closeModal}>
                <form onSubmit={save} classname="p-6">
                    <h2 classname="text-lg font-medium text-gray-900">
                        {title}
                    </h2>

                    <div classname='py-5'>
                    <InputLabel htmlFor="color_boton_crear" value="Permisos de usuario" />
                        <Select
                            options={options}
                            id="color_boton_crear"
                            nombre_empresa="color_boton_crear"
                            ref={color_boton_crearInput}
                            value={data.color_boton_crear}
                            classname="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            selcthandle={(e) => setData('color_boton_crear', e.target.value)}
                            required
                        />
                        <InputError message={errors.color_boton_crear} classname="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="nombre_empresa" value="Nombre" />

                        <TextInput
                            id="nombre_empresa"
                            nombre_empresa="nombre_empresa"
                            ref={nombre_empresaInput}
                            value={data.nombre_empresa}
                            classname="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData('nombre_empresa', e.target.value)}
                            required
                        />
                        <InputError message={errors.nombre_empresa} classname="mt-2" />
                    </div>

                    <div classname="mt-4">
                        <InputLabel htmlFor="color_dashboard" value="color_dashboard" />

                        <TextInput
                            id="color_dashboard"
                            type="color_dashboard"
                            nombre_empresa="color_dashboard"
                            ref={color_dashboardInput}
                            value={data.color_dashboard}
                            classname="mt-1 block w-full"
                            onChange={(e) => setData('color_dashboard', e.target.value)}
                            required
                        />

                        <InputError message={errors.color_dashboard} classname="mt-2" />
                    </div>

                    <div classname="mt-4">
                        <InputLabel htmlFor="color_letra_title" value="Contraseña" style={{display: showcolor_letra_title ? 'block' : 'none'}} />

                        <TextInput
                            id="color_letra_title"
                            type="color_letra_title"
                            nombre_empresa="color_letra_title"
                            ref={color_letra_titleInput}
                            value={data.color_letra_title}
                            classname="mt-1 block w-full"
                            onChange={(e) => setData('color_letra_title', e.target.value)}
                            //required
                            style={{display: showcolor_letra_title ? 'block' : 'none'}}
                        />

                        <InputError message={errors.color_letra_title} classname="mt-2" />
                    </div>

                    <div classname="mt-4">
                        <InputLabel htmlFor="color_letra_dashboard" value="Confirmar contraseña" style={{display: showcolor_letra_title ? 'block' : 'none'}} />

                        <TextInput
                            id="color_letra_dashboard"
                            type="color_letra_title"
                            nombre_empresa="color_letra_dashboard"
                            ref={color_letra_dashboardInput}
                            value={data.color_letra_dashboard}
                            classname="mt-1 block w-full"
                            onChange={(e) => setData('color_letra_dashboard', e.target.value)}
                            //required
                            style={{display: showcolor_letra_title ? 'block' : 'none'}}
                        />

                        <InputError message={errors.color_letra_dashboard} classname="mt-2" />
                    </div>

                    <div classname="mt-4">
                        <label htmlFor="color_letra_body" classname="block text-sm font-medium leading-6 text-gray-900">
                            Foto
                        </label>

                        <InputFile
                            id="color_letra_body"
                            nombre_empresa="color_letra_body"
                            type="file"
                            ref={color_letra_bodyInput}
                            //value={data.color_letra_body}
                            filehandle={(e) => setData('color_letra_body', e.target.files[0])}
                            classname="sr-only"
                        >
                        </InputFile>
                    </div>


                    <div classname="mt-6 flex justify-end">

                        <DangerButton classname="ml-3" onClick={closeModal} disabled={processing}>
                            Cancelar
                        </DangerButton>

                        <PrimaryButton classname="ml-4" disabled={processing}>
                            {buttonMenssage}
                        </PrimaryButton>

                    </div>
                </form>
            </Modal>
            */}
        </AuthenticatedLayout>
    );
}
