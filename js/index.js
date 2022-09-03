const loadCatagory = () =>{
    //https://openapi.programming-hero.com/api/news/categories
     const url=`https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
     .then(res=>res.json())
    .then(category=>displayCategory(category.data))
}
 const displayCategory = item=>{
    const categoryArray= item.news_category
    //console.log(categoryArray)
    const catagoryContainer = document.getElementById('category-container')
    //forecha loop
    categoryArray.forEach(items => {
        //console.log(items)
        const CategoryDiv =document.createElement('div')
          CategoryDiv.classList.add('col')
          CategoryDiv.innerHTML=`
          <button id="link" onclick="displaynews('${items.category_id}')"class="fs-5 btn btn-outline fw-semibold shadow p-3 mb-5 bg-body rounded" href="">${items.category_name}</buttom>
          `;
          //return items.category_id
          //console.log(items.category_id)
          //https://openapi.programming-hero.com/api/news/category/${items.category_id}
          catagoryContainer.appendChild(CategoryDiv)
      });
   
}
  
//neews try catch function
 const displaynews = async category_id =>{
   
    //loader start
    spinerchanges(true)
      const url =`https://openapi.programming-hero.com/api/news/category/${category_id}`
     const res = await fetch(url);
     const data = await res.json()
      displayNewsitem(data.data)
   
 }
 //SHows news function
 const displayNewsitem = NewsFeed =>{
       console.log(NewsFeed)
       ContainerNewsFeed = document.getElementById('container-newsfeed')
       const Noresult =document.getElementById('Showresult')
       
       //no Result massage
       if(NewsFeed.length === 0){
        Noresult.classList.remove('d-none')
        spinerchanges(false)
       }
       else{
        Noresult.classList.add('d-none')
       }
       ContainerNewsFeed.innerHTML=``;
       NewsFeed.forEach(New => {
        console.log(New)
        const NewFeedDiv =document.createElement('div')
          NewFeedDiv.classList.add('row')
          NewFeedDiv.innerHTML=`
          <div class="col-md-4  py-3">
          <img
            src="${New.image_url ? New.image_url :"No images Found."}"
            alt="Trendy Pants and Shoes"
            class="img-fluid rounded-start  "
          />
        </div>
        <div class="col-md-8 ">
                <div class="card-body ">
                  <h5 class="card-title">${New.title? New.title :"Not Found."}</h5>
                  <p class="card-text">
                    ${New.details? New.details.slice(0,260) :"No  Found."}
                  ...</p>

                  <div class="d-flex justify-content-between">
                  <div class="d-flex">  
                  <small class="d-flex">
                    <img
                        src="${New.thumbnail_url? New.thumbnail_url :"No images Found."}"
                        class="rounded-circle"
                        height="25"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      ></>
                      <h5 class="m-1">${New.author.name? New.author.name :"Not Found."}</h5>

                    </small>
                    </div>
                    <div>Rating: ${New.rating.number ? New.rating.number :"Not  Found."}
                    <i class="fas fa-eye"></i> ${New.total_view ? New.total_view :"Not Found."}
                    </div>
                    <div>
                    <button type="button" class="btn btn-primary fs-5" onclick="displaynewsDetails('${New._id}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                         See More
                      </button>
                    </div>
                  </div>

                  
                  
                </div>
              </div>
          `;
          //
                ContainerNewsFeed.appendChild(NewFeedDiv)
                //stop loader
                spinerchanges(false)
       })
    }
    //indivitual id load 
    const displaynewsDetails = async news_id =>{
      console.log(news_id)
  
        const url =`https://openapi.programming-hero.com/api/news/${news_id}`
       const res = await fetch(url);
       const data = await res.json()
        NewsDetails(data.data)

     
   }
   const NewsDetails =SeeMoreNews =>{
  console.log(SeeMoreNews)
  
  SeeMoreNews.forEach(news => {
    console.log(news)
    const modaltitle = document.getElementById('ModalTitleLabel')
    modaltitle.innerText =news.title
    
    const NewsDetail =document.getElementById('more-details')
  NewsDetail.innerText =news.details 
  })
  }
  const spinerchanges =isloading=>{
    const spinner = document.getElementById("loader");
    if(isloading){
      spinner.classList.remove("d-none");
    }
    else{
      spinner.classList.add('d-none')
    }
    
  }
 loadCatagory()
