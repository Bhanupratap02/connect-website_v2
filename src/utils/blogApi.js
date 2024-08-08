/** @format */

const API_URL = "https://connectplus.org.uk/wp/wp-json/wp/v2/posts";

export const fetchPosts = async () => {
  try {
    const response = await fetch(API_URL, { cache: "no-store" });
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};


export const extractImageUrlFromContent = (content) => {
  const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgTagMatch ? imgTagMatch[1] : "https://via.placeholder.com/400x200"; // Replace with your default image URL
};

export const fetchMedia = async (mediaId) => {
  try {
    const response = await fetch(
      `https://connectplus.org.uk/wp/wp-json/wp/v2/media/${mediaId}`
    );
    const data = await response.json();
    //  console.log(data, "featured media");
    return data.source_url;
  } catch (error) {
    console.error("Error fetching media:", error);
    return "https://via.placeholder.com/400x200"; // Replace with your default image URL
  }
};


export const extractPostData = async (post) => {
  const imageUrl = post.featured_media
    ? await fetchMedia(post.featured_media)
    : extractImageUrlFromContent(post.content.rendered);

  return {
    id: post.id,
    title: post.title.rendered,
    date: post.date,
    link: post.link,
    imageUrl: imageUrl,
  };
};




export const processPosts = async () => {
  const posts = await fetchPosts();
  const processedPosts = await Promise.all(posts.map(extractPostData));
  // console.log("Processed Posts", processedPosts);
  return processedPosts;
};

export const fetchPostById = async (id) => {
  try {
    const response = await fetch(
      `https://connectplus.org.uk/wp/wp-json/wp/v2/posts/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};
