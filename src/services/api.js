const API_URL = "https://cryptoassetrecovery.org/blog/wp-json/wp/v2";

export const getPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
