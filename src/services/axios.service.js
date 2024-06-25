import axios from "axios";

const createAxiosInstance = (baseURL) => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const axiosService = {
  async get({ baseURL, path }) {
    try {
      const axiosInstance = createAxiosInstance(baseURL);
      const response = await axiosInstance.get(path);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async post({ baseURL, data, path }) {
    try {
      
      const axiosInstance = createAxiosInstance(baseURL);
      const response = await axiosInstance.post(path, data);
      return response.data;
    } catch (error) {
      console.error("Error in axiosService.post:", error);
      throw error;
    }
  },

  async put({ baseURL, data, path }) {
    try {
      const axiosInstance = createAxiosInstance(baseURL);
      const response = await axiosInstance.put(path, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async patch({ baseURL, data = null, path }) {
    try {
      const axiosInstance = createAxiosInstance(baseURL);
      const response = await axiosInstance.patch(path, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async delete({ baseURL, path }) {
    try {
      const axiosInstance = createAxiosInstance(baseURL);
      const response = await axiosInstance.delete(path);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export { axiosService };
