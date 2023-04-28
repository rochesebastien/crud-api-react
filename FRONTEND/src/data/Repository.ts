import axios from "axios";

// variable for api url
const API_URL = "http://localhost:3000"

export function getApiUrl() {
    return API_URL
}

export async function getAllContacts() {
    try {
        const response = await axios.get(`${API_URL}/contact`);
        return response.data;
    //   return data
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function getAllCivilite() {
    try {
        const response = await axios.get(`${API_URL}/civilite`);
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function deleteContact(id: number) {
    try {
        const response = await axios.delete(`${API_URL}/contact/${id}`);
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function deleteCivilite(id: number) {
    try {
        const response = await axios.delete(`${API_URL}/civilite/${id}`);
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }


  export async function createContact(nom : string, prenom : string, idcivilite : number) {
    try {
        const response = await axios.post(`${API_URL}/contact/`,{
          nom,
          prenom,
          idcivilite
        });
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function createCivilite(libelle : string) {
    try {
        const response = await axios.post(`${API_URL}/civilite/`,{
          libelle,
        });
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function getCiviliteByID(id : number) {
    try {
        const response = await axios.get(`${API_URL}/civilite/${id}`);
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function getContactByID(id : number) {
    try {
        const response = await axios.get(`${API_URL}/contact/${id}`);
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function updateContact(id : number, nom : string, prenom : string, idcivilite : number) {
    try {
        const response = await axios.put(`${API_URL}/contact/${id}`,{
          nom,
          prenom,
          idcivilite
        });
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function updateCivilite(id : number, libelle : string) {
    try {
        const response = await axios.put(`${API_URL}/civilite/${id}`,{
          libelle,
        });
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }