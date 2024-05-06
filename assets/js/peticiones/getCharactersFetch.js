export const getCharactersFetch = async(page = 1, limit = 8)=>{
    try{

        const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`)
        const data = await response.json();
        return data.items;
        
    }catch(error){
        console.log(`Error al obtener los personajes: ${error}`)
        return []; //retorna un array vacio
    }
}