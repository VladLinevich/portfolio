import data from '../../data';
const quntityData = data.length


const getPosts = (page) => {
  
  const onePageQuantity = 5;
  const postQuantity = quntityData;
  const currentPage = page;
  const pages = Math.ceil((postQuantity + 1) / onePageQuantity);

  function indexPostsInPage() {

    let firstPost = onePageQuantity * currentPage;
    let lastPost = firstPost + onePageQuantity > postQuantity ? postQuantity : firstPost + onePageQuantity
    let postsIndex = [];

    for(let i = firstPost; i < lastPost; i++){
      postsIndex.push(i)
    };

    return postsIndex;
  }

  function postsOfPage() {

    let pagePost = [];

    indexPostsInPage().map((el, index) => {
      pagePost.push(data[el])
    });

    return pagePost;

  }
  postsOfPage()

  return {
    pages: pages,
    postsIndex: indexPostsInPage(),
    posts: postsOfPage()
  }

}

console.log(getPosts(0));

export default getPosts