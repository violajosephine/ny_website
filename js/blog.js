fetch("../blogposts.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handlePosts(data);
    console.log(data);
  });
function handlePosts(data) {
  data.blogposts.forEach(showContent);
  console.log(data.blogposts);
}

function showContent(post) {
  if (post.type == "blog") {
    console.log(post);
    //grab template
    const template = document.querySelector(".post_template").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content

    copy.querySelector("a").href = "blogpost.html?id=" + post.id;
    copy.querySelector(".post_title").textContent = post.title;
    copy.querySelector(".post_date").textContent = post.date_published;
    copy.querySelector(".post_image").src = post.image;

    copy.querySelector(".post_text").innerHTML = post.intro;
    copy.querySelector(".post_text").classList.add = post.class;

    //grab parent
    const parent = document.querySelector("#posts");
    //append child
    parent.appendChild(copy);
  } else if (post.type == "thought") {
    //grab template
    const template = document.querySelector(".thought_template").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content

    copy.querySelector(".thought_text").innerHTML = post.intro;
    copy.querySelector(".date_thought").textContent = post.date;

    //grab parent
    const parent = document.querySelector("#posts");
    //append child
    parent.appendChild(copy);
  } else if (post.type == "quote") {
    //grab template
    const template = document.querySelector(".quote_template").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content

    copy.querySelector(".quote_text").innerHTML = post.intro;
    copy.querySelector(".date_quote").textContent = post.date;

    //grab parent
    const parent = document.querySelector("#posts");
    //append child
    parent.appendChild(copy);
  }
}
