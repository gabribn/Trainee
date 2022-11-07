//informações

//Definindo formato 
interface TechObject {
    title: string;
    experience: number;
}
//definição dos tipos de um conjunto de iformações(objeto)
interface CreateUserData {
    // ?=opcional
    name?: string;
    email: string;
    password: string;
    //defir tipagem de vetor
    techs: Array<string | TechObject>;
}
//exportando função
export default function createUser({ name, email, password }: CreateUserData) {
    const user = {
        name,
        email,
        password,
    }

    return user;
}