import axios from "axios";

const button = document.querySelector("button");
const box = document.querySelector(".articles");

async function getNews() {
  try {
    box.textContent = "Loading ...";

    const news = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=kr&apiKey=83cec20583a34f5e960c4e5a366e3404"
    );

    box.textContent = "";
    // 구조 분해 할당, 전개 연산자
    const { articles, ...results } = news.data;

    makeElement(articles);
  } catch (error) {
    console.log(`Error message: ${error}`);
  }
}

function makeElement(articles) {
  // forEach 함수 활용
  articles.forEach((article) => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    div.className = "article";
    h2.textContent = JSON.stringify(article.title, null);
    p.textContent = JSON.stringify(article.description, null);

    div.appendChild(h2);
    div.appendChild(p);
    box.append(div);
  });
}

button.addEventListener("click", getNews);
