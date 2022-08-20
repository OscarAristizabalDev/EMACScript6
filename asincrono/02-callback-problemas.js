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

const getEmpleado = (id, callback) => {

    const empleado = empleados.find(emp => emp.id === id);
    if (!empleado) {
        callback(`No existe empleado con el id ${id}`);
    } else {
        callback(null, empleado);
    }
};

const getSalario = (empleado, callback) => {
    const salarioEmpledo = salarios.find(salario => salario.id === empleado.id);
    if (!salarioEmpledo) {
        callback(`No existe el salario del empleado con el id ${empleado.id}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioEmpledo.salario,
            id: empleado.id
        });
    }
}

// Uso
getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    // El problema con los callback es que el codigo empieza a crecer cada vez que se hagan mas llamados internos
    getSalario(empleado, (err, salarioEmpleado) => {
        if (err) {
            return console.log(err);
        }
        console.log('detalle empleado', salarioEmpleado);
    });
    //console.log('emppleado', empleado);

});