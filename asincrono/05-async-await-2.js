const empleados = [{
        id: 1,
        nombre: 'Oscar'
    }, {
        id: 2,
        nombre: 'Andres'
    },
    {
        id: 3,
        nombre: 'Felipe'
    }
];

const salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: '2000'
}];

const getEmpleado = async(id) => {

    const empleado = empleados.find(emp => emp.id === id);

    if (!empleado) {
        throw new Error(`No existe un empleado ${id}`)
    } else {
        return empleado;
    }

};

const getSalario = async(empleado) => {

    const salarioEmpledo = salarios.find(salario => salario.id === empleado.id);
    if (!salarioEmpledo) {
        throw new Error(`No existe el salario del empleado con el nombre ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioEmpledo.salario,
            id: empleado.id
        }
    }
};

const getInformacion = async(id) => {
    const empleado = await getEmpleado(id);
    const salarioEmpleado = await getSalario(empleado);

    return `${empleado.nombre} tiene un salario de ${salarioEmpleado.salario}`
};

getInformacion(4)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));