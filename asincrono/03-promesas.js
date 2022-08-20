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

const getEmpleado = (id) => {

    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find(emp => emp.id === id);
        if (!empleado) {
            // el reject se usa cuando hay un problema con la promesa
            reject(`No existe empleado con el id ${id}`);
        } else {
            // el resolve se ejecuta cuando todo se ejecuta correctamente en la
            resolve(empleado);
        }
    });

    return promesa;
};

const getSalario = (empleado) => {

    const promesa = new Promise((resolve, reject) => {
        const salarioEmpledo = salarios.find(salario => salario.id === empleado.id);
        if (!salarioEmpledo) {
            reject(`No existe el salario del empleado con el id ${empleado.id}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioEmpledo.salario,
                id: empleado.id
            });
        }
    });
    return promesa;
}

getEmpleado(4).then(empleado => {
        return getSalario(empleado);
        //console.log(empleado);
    })
    // este then aplica para la promesa de getEmpleado
    .then(resp => {
        console.log(resp);
    })
    .catch(err => console.log(err));