var row=2;
var countmanga =8;
var countnovel =8;

function sethomepage(h)
{
  document.getElementById('communityIcon').addEventListener('click',(e)=>{
    window.location.href="community.html"
  })
  var homepageStatus;
  var quote = document.querySelector('.quotes');
  var quote1 = document.querySelector('.quotes1');var quote2 = document.querySelector('.quotes2');
  var intro = document.querySelector('.content-introduce-container');
  var news = document.querySelector("#news-update");
  var newsbody = document.querySelector('.newsupdate');
  var mangaDiv = document.querySelector(".mangaHomepage"); 
  var nDiv = document.querySelector(".novelHomepage");
  var mangaTitle = document.querySelector(".Manga-category");
  var novelTitle = document.querySelector(".Novel-category")

  var premangaTitle = document.querySelector(".preManga-category");
  var prenovelTitle = document.querySelector(".preNovel-category")
  var premangaDiv = document.querySelector(".premangaHomepage"); 
  var prenDiv = document.querySelector(".prenovelHomepage");

  
  homepageStatus=h;
  if(homepageStatus==='manga') {prenovelTitle.remove();prenDiv.remove();
    intro.style.backgroundImage = 'url(img/kimesu2.gif.gif)';quote.style.color="white";quote1.style.color="white";quote2.style.color="white";countmanga=16;countnovel=0;nDiv.remove();news.remove();novelTitle.remove();newsbody.remove();quote.innerHTML='"I want to protect my friends. I want to protect the people who are important to me. That’s why I’ll keep fighting, no matter how scared I am." – Zenitsu Agatsuma'}
  else if(homepageStatus==='novel') {premangaTitle.remove();premangaDiv.remove();
    intro.style.backgroundImage = 'url(img/hogwart.gif)';quote.style.color="white";quote1.style.color="white";quote2.style.color="white";countnovel=16;countmanga=0;mangaDiv.remove();news.remove();mangaTitle.remove();newsbody.remove();quote.innerHTML='"I have learned that the people we love never really leave us. They live on in our hearts, in the stories we tell, and the memories we cherish. It’s those connections, that love, that gives us the strength to keep going, even in the darkest of times." – Harry Potter'}
  else if(homepageStatus==='more') 
    {
      premangaTitle.remove();prenovelTitle.remove();premangaDiv.remove();prenDiv.remove();
      console.log('ok11')
      quote.innerHTML='"In times of change, learners inherit the earth, while the learned find themselves beautifully equipped to deal with a world that no longer exists." – Eric Hoffer'
      countnovel=0;nDiv.remove();news.remove();novelTitle.remove();countmanga=0;mangaDiv.remove();news.remove();mangaTitle.remove();
        console.log('ok')
        updatenews();
    }
  else {premangaTitle.remove();premangaDiv.remove(); prenovelTitle.remove();prenDiv.remove();
    newsbody.remove();countmanga=4;countnovel=4;nDiv.style.visibility='visible';mangaDiv.style.visibility='visible';news.style.visibility='visible';}
}

document.addEventListener("DOMContentLoaded", function() {
 
    // code của function chạy ngay lập tức khi DOM được tải xong
    display()
  });
function display() {
    var arr=[];
    var sheetURL = "https://docs.google.com/spreadsheets/d/1houNF8C5NrJsVqXL9ESqw890xZKWs7HQtKeC3Z7wTqQ/edit#gid=0";
    // Sử dụng XMLHttpRequest để tải nội dung của bảng tính
  var xhr = new XMLHttpRequest();
  xhr.open("GET", sheetURL, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Nội dung của trang web được trả về
      var response = xhr.responseText;
      // Sử dụng các phương thức xử lý DOM để phân tích cú pháp và lấy nội dung của hàng đầu tiên
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(response, 'text/html');
      var RowCells = htmlDoc.querySelectorAll("tr:nth-child("+row+") td"); // Chọn tất cả các ô trong hàng 
      // In ra nội dung của từng ô trong hàng đầu tiên
      RowCells.forEach(function(cell) {
        arr.push(cell.innerText);
      });
    if(arr[0]!=""&&!arr[0].startsWith("undefined")){
     createDiv(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7]);row++;display();}
    else {row=2;return;}
    }
  };
    xhr.send();
  }
  var createDiv = function(name,author,type,status,imgs,chapterSheet,summary,category )
{
  
  var arr=[];
  arr.push(name);arr.push(author);arr.push(type);arr.push(status),arr.push(imgs);arr.push(summary);arr.push(chapterSheet);
  var newDiv = document.createElement("div") ;
  var Image = document.createElement("img");
  var nameDiv = document.createElement("a");
  var authorDiv =document.createElement("a");
  Image.src=(imgs);
  Image.style.width="200px";
  Image.style.height="320px";
  nameDiv.innerText="\n"+name+"\n";
  nameDiv.style.fontWeight="bold";
  authorDiv.style.fontWeight="normal";
  nameDiv.style.width="180px";
  nameDiv.style.wordBreak = "break-word";
  nameDiv.style.display = "block"; 
  nameDiv.style.textDecoration = "none"; // Loại bỏ gạch chân
  nameDiv.style.color = "inherit"; // Sử dụng màu văn bản mặc định
  nameDiv.addEventListener("click", function (event) {
       if(category==='manga') window.location.href="ViewTruyen.html?arrayData="+arr;
       else window.location.href="ViewNovel.html";
  });
  authorDiv.innerText=author;
  newDiv.style.marginRight="30px";
  newDiv.appendChild(Image);
  newDiv.appendChild(nameDiv);
  newDiv.appendChild(authorDiv);
  if(category==='manga'&&countmanga>0){
  var mangaDiv = document.querySelector(".mangaHomepage");
  mangaDiv.appendChild(newDiv);countmanga--;}
  else if(category==='novel'&&countnovel>0){
    var nDiv = document.querySelector(".novelHomepage");
    nDiv.appendChild(newDiv);countnovel--;}
}



async function updatenews() {
  var arrbaiviet = [];

  const proxyUrl = 'https://api.allorigins.win/get?url=';
  const targetUrl = 'https://thanhnien.vn/giai-tri/phim.htm';

  try {
      const response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.contents, 'text/html');
      const cards = doc.querySelectorAll('.box-category-item');

      arrbaiviet = Array.from(cards).map(card => {
          const text = card.innerText.replaceAll("\t", "").replaceAll("\n", "").replaceAll("ago", "<br>");
          const imgElement = card.querySelector('img');
          const img = imgElement ? imgElement.src : '';
          const linkElement = card.querySelector('a');
          const link = linkElement ? linkElement.href : '';
          const linkok = link.replace("127.0.0.1:5500", "thanhnien.vn");
         
          return { text, img, linkok };
      });

      var body = document.querySelector('.newsupdate');
      var body1 = document.querySelector('.col-12');
      if (!body) {
          throw new Error('.newsupdate element not found');
      }
      body.innerHTML = ''; // Clear previous content

      var news = document.createElement("div");
      news.innerHTML="NEWS UPDATE"
      news.style.fontWeight = "bold";
      news.style.width = "580px";
      news.style.wordBreak = "break-word";
      news.style.display = "block";
      news.style.textDecoration = "none";
      news.style.fontSize = "25px";
      news.style.color = "black";
      news.style.textDecoration = "underline";
      news.style.textDecorationColor = "red";
      news.style.textDecorationThickness = "10px";
      news.style.margin="50px"
      body1.appendChild(news);
      arrbaiviet.forEach(article => {
          var div = document.createElement("div");
          var image = document.createElement("img");
          var txt = document.createElement("a");

          txt.innerHTML = article.text;
          txt.href = article.linkok;
          txt.target = '_blank';
          txt.style.fontWeight = "bold";
          txt.style.width = "630px";
          txt.style.wordBreak = "break-word";
          txt.style.display = "block";
          txt.style.textDecoration = "none";
          txt.style.fontSize = "25px";
          txt.style.color = "black";

          image.src = article.img;
          image.style.marginRight = "10px"; // Optional: Adds some spacing between image and text
          image.style.height = "150px";
          image.style.width = "200px";
          div.style.display = "flex";
          div.style.flexDirection = "row";
          div.style.marginBottom = "20px"; // Optional: Adds some spacing between articles
          div.style.marginLeft = "30px";
          div.style.marginTop = "30px";
          div.appendChild(image);
          div.appendChild(txt);
          body.appendChild(div);
      });
  } catch (error) {
      console.error('Error fetching data:', error);
      document.getElementById('output').textContent = 'Error fetching data: ' + error.message;
  }
}