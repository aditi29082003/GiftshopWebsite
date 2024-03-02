import axios from"axios";

const searchImages=async(userWish)=>{
    const response= await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID OaOHSzQ-rBoTI6iykguZ9W3Znhnk1QjmFeT8Zi3GXkQ'
    },
    params:{
        query: userWish,
    }
    });
    return response.data.results;
};
export default searchImages;