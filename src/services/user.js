import { v4 as uuidv4 } from "uuid";
export const fetchUser = async () => {
  const host = `${import.meta.env.VITE_API_HOST}`;
  const userId = localStorage.getItem("user_id")
 ||"1af48341-c251-43f5-8ba0-01da35064bb9";

  try {
    const response = await fetch(`${host}/user/${userId}`);
    console.log('responsee', response)
    if (!response.ok) {
      throw new Error("Error al obtener el usuario");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};


export const updateUser = async ({ userId, updates }) => {
  const host = `${import.meta.env.VITE_API_HOST}`;
console.log('update', updates )
  try {
    const response = await fetch(`${host}/user/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: userId, updates }),
    });

    if (!response.ok) {
      throw new Error("Error al actualizar el usuario");
    }

    const data = await response.json();

    localStorage.setItem("user_id", userId);

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export const createUser = async () => {
  const host = `${import.meta.env.VITE_API_HOST}`;
  const userId = uuidv4(); // Generar un UUID para el nuevo usuario

  try {
    const response = await fetch(`${host}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: userId }),
    });

    if (!response.ok) {
      throw new Error("Error al crear el usuario");
    }

    const data = await response.json();

    localStorage.setItem("user_id", userId);

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
