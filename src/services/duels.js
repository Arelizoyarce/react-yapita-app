
export const getDuels = async (userId) => {
    const host = `${import.meta.env.VITE_API_HOST}`
    ;
    console.log('host', host);
    
    try {
      const response = await fetch(`${host}/user/${userId}/duels`);
      if (!response.ok) {
        throw new Error("Error al obtener los premios");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
};

export const getFriends = async (userId) => {
  const host = `${import.meta.env.VITE_API_HOST}`
  ;
  console.log('host', host);
  
  try {
    const response = await fetch(`${host}/user/${userId}`);
    if (!response.ok) {
      throw new Error("Error al obtener los premios");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};