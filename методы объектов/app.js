const user = {
    name: 'Vasia',
    surname: 'Pupkin',
    age: 24,
    getFullName: function( ) {
        return this.name + ' ' + this.surname;
    }
};

user.getFullName()