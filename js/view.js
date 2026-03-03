// Gọi hàm getinfomanga() khi tất cả nội dung của trang đã được tải
document.addEventListener("DOMContentLoaded", function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const arrayData = urlParams.get('arrayData').split(',').map(item => item.replace(/["\\\[\]]/g, '').toString());  // Chuyển đổi chuỗi thành mảng, sử dụng dấu phẩy để phân tách

    const data1 = arrayData[0];
    const data2 = arrayData[1];
    const data3 = arrayData[2];
    const data4 = arrayData[3];
    const data5 = arrayData[4];
    const data6 = arrayData[5];
    const data7 = arrayData[6];
    const data8 = arrayData[7];
    const data9 = arrayData[8];
    if(data1!=null){
    getinfomanga(data1, data2,data3,data4,data5,data8,data6+data7);
      displaybox();
  } 
});
var row=2;
function displaybox() {
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
      createDivReview(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7]);
    }
  else {row=2;return;}

  }
};
  xhr.send();
  
}
function createDivReview(name,author,type,status,imgs,chapterSheet,summary,category ) {
  
  var arr= [];
  arr.push(name);  arr.push(author);  arr.push(type);
arr.push(status);  arr.push(imgs);  arr.push(summary);arr.push(chapterSheet);
  arr.push(category);
  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  const cardFront = document.createElement('div');
  cardFront.className = 'card-front';
  cardFront.style.backgroundImage = `url(${imgs})`;
  const subTitle = document.createElement('p');
  subTitle.className = 'sub-title';
  subTitle.textContent = category;

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = name;

  const subTitle2 = document.createElement('p');
  subTitle2.className = 'sub-title';
  subTitle2.textContent = author;

  cardFront.appendChild(subTitle);
  cardFront.appendChild(title);
  cardFront.appendChild(subTitle2);

  const cardBack = document.createElement('div');
  cardBack.className = 'card-back';

  const backTitle = document.createElement('div');
  backTitle.className = 'back-title';
  backTitle.textContent = name;

  const movieDescription = document.createElement('div');
  movieDescription.className = 'movie-description';

  const synopsis = document.createElement('span');
  synopsis.className = 'synopsis';
  synopsis.textContent = 'Author : ';

  const synopsisText = document.createElement('span');
  synopsisText.textContent = author;

  movieDescription.appendChild(synopsis);
  movieDescription.appendChild(synopsisText);

  const genre = document.createElement('div');
  genre.className = 'genre';

  const genreText = document.createElement('span');
  genreText.textContent = "Genre : "+type;

  genre.appendChild(genreText);

  const releaseDate = document.createElement('div');
  releaseDate.className = 'release-date';

  const releaseDateText = document.createElement('span');
  releaseDateText.textContent = "Status : "+status;

  releaseDate.appendChild(releaseDateText);

  const watchTrailer = document.createElement('a');
  watchTrailer.className = 'btn';
  watchTrailer.textContent = 'Read';
  watchTrailer.addEventListener("click", function (event) {
   if(category==='manga') window.location.href="ViewTruyen.html?arrayData="+arr;
   else window.location.href="ViewNovel.html";
});
  cardBack.appendChild(backTitle);
  cardBack.appendChild(movieDescription);
  cardBack.appendChild(genre);
  cardBack.appendChild(releaseDate);
  cardBack.appendChild(watchTrailer);

  cardContent.appendChild(cardFront);
  cardContent.appendChild(cardBack);

  var swiperslide = document.getElementById(name);
  swiperslide.appendChild(cardContent);


  displaybox();
  row++;
}



