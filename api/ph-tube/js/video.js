const loadCategoriesData = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
    .catch(err=> console.log("ERROR: ",err))
}

/* {
    "category_id": "1001",
    "category": "Music"
}*/

const displayCategories = (categories) => {
    console.log(categories);
    const categoriesContainer = document.getElementById("categories-container");
  categories.forEach((item) => {
      const button = document.createElement('button');
      button.classList.add('btn');
      button.innerHTML = item.category;
      categoriesContainer.append(button)
  });
};

const loadVideosData = () => {
     fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
       .then((res) => res.json())
       .then((data) => displayVideos(data.videos))
       .catch((err) => console.log("ERROR: ", err));
}
/**
 * {
    "category_id": "1003",
    "video_id": "aaaj",
    "thumbnail": "https://i.ibb.co/xgWL3vQ/kid-gorgeous.jpg",
    "title": "Kid Gorgeous",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/xsfkwN2/john.jpg",
            "profile_name": "John Mulaney",
            "verified": true
        }
    ],
    "others": {
        "views": "241K",
        "posted_date": ""
    },
    "description": "John Mulaney's 'Kid Gorgeous' has captured the hearts of many with 241K views. As a verified comedian, John delivers a masterclass in stand-up with clever anecdotes, quick wit, and relatable humor. This performance is a laugh-filled adventure through his unique take on life, politics, and pop culture."
}
 */

function getTimeString(time) {
  const hour = time / 3600;
  let remainingSeconds = time % 3600;
  const minutes = remainingSeconds / 60;
  remainingSeconds = remainingSeconds % 60;
  return `${parseInt(hour)} hour ${parseInt(
    minutes
  )} minutes ${remainingSeconds} second ago`;
}

// console.log(getTimeString(7865));

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");
    videos.forEach(videos => {
        console.log(videos);
        const div = document.createElement('div');
        div.classList="card card-compact ";
        div.innerHTML = `
         <figure class="relative">
    <img class="h-[180px] w-full object-cover"
      src=${videos.thumbnail}
      alt="Shoes" />
    ${videos.others.posted_date.length === 0 ?"":`<span class="absolute bottom-0 right-0 bg-black text-white">${getTimeString(
      videos.others.posted_date
    )}</span>`}
    

  </figure>
  <div>
    <div class="flex items-center space-x-2">
    <div>
    <img class="w-10 h-10 rounded-full object-cover relative" src=${
      videos.authors[0].profile_picture
    }>
    </div>
    <div>
    <h2 class="font-bold text-3xl">${videos.title}</h2>
    <div class="flex items-center ">
    <p>${videos.authors[0].profile_name}</p>
    
    ${
      videos.authors[0].verified === true
        ? '<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png"/>'
        : ""
    }
    </div>
    <p></p>
    </div>
    </div>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        `;
        videoContainer.append(div)
    })
}

loadVideosData()
loadCategoriesData();