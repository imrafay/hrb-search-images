import axios from 'axios';

const FetchImages = async (searchText) => {
      const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID 472_i57uzMJulE9ffkKfzCKnGPAUulQbZhFWoNEsGGQ'
        },
        params:{
            query:searchText
        }
      });
      return response.data.results;
  };

  export default FetchImages;