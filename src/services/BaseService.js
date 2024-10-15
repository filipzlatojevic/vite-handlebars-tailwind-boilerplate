const API_URL = ""

const getSomething = async () => {
    try {
      const response = await fetch(`${API_URL}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json', 
        },
      });
      return await response.json();
    } catch (error) {
      console.log('🚀 ~ file: BaseService.js ~ line 3 ~ error', error);
      return { status: 500 };
    }
  };

// more services func

export const BaseService = {
    getSomething
}