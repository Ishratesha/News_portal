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
          <button id="link" onclick="displaynews('${items.category_id}')"class="fs-5 btn btn-light text-decoration-none text-black" href="">${items.category_name}</buttom>
          `;
          //return items.category_id
          //console.log(items.category_id)
          //https://openapi.programming-hero.com/api/news/category/${items.category_id}
          catagoryContainer.appendChild(CategoryDiv)
      });
   
}
  
//neews 
 const displaynews = async category_id =>{
    //console.log(category_id)

      const url =`https://openapi.programming-hero.com/api/news/category/${category_id}`
     const res = await fetch(url);
     const data = await res.json()
      displayNewsitem(data.data)
   
 }
 //SHows news function
 const displayNewsitem = NewsFeed =>{
       console.log(NewsFeed)
       ContainerNewsFeed = document.getElementById('container-newsfeed')
       ContainerNewsFeed.innerHTML=``;
       NewsFeed.forEach(New => {
        console.log(New)
        const NewFeedDiv =document.createElement('div')
          NewFeedDiv.classList.add('row')
          NewFeedDiv.innerHTML=`
          <div class="col-md-4 p-1">
          <img
            src="${New.image_url}"
            alt="Trendy Pants and Shoes"
            class="img-fluid rounded-start"
          />
        </div>
        <div class="col-md-8 p-1">
                <div class="card-body">
                  <h5 class="card-title">${New.title}</h5>
                  <p class="card-text">
                    ${New.details}
                  </p>

                  <div class="d-flex justify-content-between">
                  <div class="d-flex">  
                  <small class="d-flex">
                    <img
                        src="${New.thumbnail_url}"
                        class="rounded-circle"
                        height="25"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      ></>
                      <h5>${New.author.name}</h5>

                    </small>
                    </div>
                    <div>Rating:${New.rating.number}
                     Viwes:${New.total_view}
                    </div>
                    <div><button class="btn btn-primary fs-5">See More</button></div>
                  </div>

                  
                  
                </div>
              </div>
          `;
          
                ContainerNewsFeed.appendChild(NewFeedDiv)
       })
    }
  loadCatagory()
