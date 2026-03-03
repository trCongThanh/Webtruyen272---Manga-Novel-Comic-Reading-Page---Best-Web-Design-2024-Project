let currname='';
const GLOBAL_VARIABLE_KEY = 'globalVariable';
const GLOBAL_VARIABLE_GMAIL = 'globalVariable1';

// document.querySelector('.icon').addEventListener('click',(e)=>{
//   window.location.href="community.html"
// })

function returnuser() {
  return localStorage.getItem(GLOBAL_VARIABLE_KEY);
}

function setupuser(newValue) {
  localStorage.setItem(GLOBAL_VARIABLE_KEY, newValue);
}



function returngmail() {
  return localStorage.getItem(GLOBAL_VARIABLE_GMAIL);
}

function setupgmail(newVa) {
  console.log()
  localStorage.setItem(GLOBAL_VARIABLE_GMAIL, newVa);
}
function setuser(uname,gmail)
{
  currname=uname;
  console.log("it is curr:"+currname)
  var btnsignup = document.querySelector('.button-sign-up')
  var btnlogin = document.querySelector('.button-login')
  var avatar = document.querySelector('.avatar')
  console.log(window.currname)
  if(currname!='undefined'&&currname!='null') {btnsignup.remove();btnlogin.remove();}
  else{avatar.remove();}
  setupuser(currname);setupgmail(gmail);
}

// Gọi hàm getinfomanga() khi tất cả nội dung của trang đã được tải
document.addEventListener("DOMContentLoaded", function() {
    //lấy người dùng hiện tại
   
    var btnsignup = document.querySelector('.button-sign-up')
    var btnlogin = document.querySelector('.button-login')
    var avatar = document.querySelector('.avatar')
    console.log("return user: "+returnuser());
    if(returnuser()!='undefined'&&returnuser()!='null') {btnsignup.remove();btnlogin.remove();}
  else{avatar.remove()}
  //////////////////
  const toggleMenu = document.querySelector('.toggle-menu');
  const nav = document.querySelector('nav');

  toggleMenu.addEventListener('click', () => {
  nav.classList.toggle('responsive');
  });
  //////////////////// mini search bar
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if( urlParams.get('arrayData')!=null){const arrayData = urlParams.get('arrayData').split(',').map(item => item.replace(/["\\\[\]]/g, '').toString());  // Chuyển đổi chuỗi thành mảng, sử dụng dấu phẩy để phân tách

    const data1 = arrayData[0];
    const data2 = arrayData[1];
    const data3 = arrayData[2];
    const data4 = arrayData[3];
    const data5 = arrayData[4];
    const data6 = arrayData[5];
    const data7 = arrayData[6];
    const data8 = arrayData[7];
    const data9 = arrayData[8];
    console.log(data8);
    console.log(data5);
    console.log(data6+data7);
    if(data1!=null){
    getinfomanga(data1, data2,data3,data4,data5,data8,data6+data7);
      display();}
  } 
});





var search;
function setSearch(s)
{
  search=s;
  console.log('it is: '+s);
  display();
}
document.addEventListener("DOMContentLoaded", function() {
  var home = document.querySelector('.Home');
  var manga = document.querySelector('.Manga');
  var novel = document.querySelector('.Novel');
  var contact = document.querySelector('.Contact');
  var more = document.querySelector('.More');
  home.addEventListener('click', function(event) {window.location.href = "HomePage.html?home=home"})
  manga.addEventListener('click', function(event) {window.location.href = "HomePage.html?home=manga"})
  novel.addEventListener('click', function(event) { window.location.href = "HomePage.html?home=novel"})
  contact.addEventListener('click', function(event) { window.location.href = "HomePage.html?home=contact"})
  more.addEventListener('click', function(event) { window.location.href = "HomePage.html?home=more"})

  var button = document.querySelector('.material-symbols-outlined'); // Chọn nút với lớp '.button-sign-up'
  // Gán sự kiện onclick cho nút
  if(button){
  button.addEventListener('click', function(event) {
    search = document.getElementById("search").value;
    window.location.href="testsearch.html?data1="+search;
  });
            }
});

var row=2;
// đây là sẽ truy cập đến info.txt để lấy thông tin truyện gồm tên, tác giả, ảnh bìa, gg sheet lưu truyện
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
    if(search!=""){arr=searchManga(arr);createDiv(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7]);row++;display();} 
    else {createDiv(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7]);row++;display();}}
  else {row=2;return;}
  }
};
  xhr.send();
}

var maincategory;
function setcategory(c)
{
  maincategory=c;
}
function timtruyentheotheloai(theloai)
{
  maintheloai=theloai;
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
      console.log("ketqua"+arr[2])
    });
  if(arr[0]!=""&&!arr[0].startsWith("undefined")){
    if(maintheloai!=""){arr=searchTheloai(arr,arr[2]);createDiv(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7]);row++;timtruyentheotheloai(maintheloai);} 
    else {createDiv(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7]);row++;timtruyentheotheloai(maintheloai);}}
  else {row=2;return;}
  }
};
  xhr.send();
}

function refreshtrang(classrefresh)
{
  var divs = document.getElementsByClassName(classrefresh);
for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}
}

//tạo ra thẻ div bằng js và gán vào div
var createDiv = function(name,author,type,status,imgs,chapterSheet,summary,category )
{
  var arr=[];
  arr.push(name);arr.push(author);arr.push(type);arr.push(status),arr.push(imgs);arr.push(summary);arr.push(chapterSheet);arr.push(category)
  var newDiv = document.createElement("div") ;
  var Image = document.createElement("img");
  var nameDiv = document.createElement("a");
  var authorDiv =document.createElement("a");
  Image.src=(imgs);
  Image.style.width="180px";
  Image.style.height="280px";
  nameDiv.innerText="\n"+name+"\n";
  nameDiv.style.fontWeight="bold";
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
  if(maincategory==='Manga'){
  if(category==='manga'){
  var mangaDiv = document.querySelector(".manga");
  mangaDiv.appendChild(newDiv);}}
  else if(maincategory==='Novel'){
    if(category==='novel'){
    var mangaDiv = document.querySelector(".manga");
    mangaDiv.appendChild(newDiv);}}
    else{
      var mangaDiv = document.querySelector(".manga");
      mangaDiv.appendChild(newDiv);}
}


//Hàm search
function searchManga(arr)
{
  var regex = new RegExp(search, "i"); // loại bỏ chữ in hoa
  var found = regex.test(arr[0]); //tìm kiếm
  if(found) return arr;
  else {row++;display();}
}
var maintheloai;
function searchTheloai(arr,theloai)
{
  let mainChars = maintheloai.split('-');
  let otherChars = theloai.split('-');
  console.log(mainChars);
  console.log(otherChars)
  // Check if there are any common characters
  function hasCommonElement(arr1, arr2) { //arr1 mystery  arr2: mystery,adventure
    const trimmedArr2 = arr2.map(element => element.trim());
    
    // Kiểm tra xem mọi phần tử của arr1 có tồn tại trong trimmedArr2 hay không
    return arr1.every(element => trimmedArr2.includes(element));
  }
  console.log(maintheloai);
  console.log(theloai)
  // Return true if there is at least one common character
  if(hasCommonElement(mainChars, otherChars)==true){return arr;}
  else {row++;timtruyentheotheloai(maintheloai);}
}





var sharedVar
function returnshareVar()
{
  return sharedVar;
}
function getinfomanga(name,author,type,status,imgs,chapterSheet,summary ) 
{
  
  var numberCh=0;
  console.log(chapterSheet);
      document.getElementById("name").innerHTML=name;
      document.getElementById("myImg").src=imgs;
      document.getElementById("imageList").src =imgs;
      document.getElementById("author").innerHTML='Tác giả: '+author;
      document.getElementById("type").innerHTML='Thể loại: '+type;
      document.getElementById("status").innerHTML='Tình trạng: '+status;
      document.getElementById("summary").innerHTML='Nội dung chính: <br>'+summary;
      var arr=[];
      var xhr = new XMLHttpRequest();
      xhr.open("GET", chapterSheet, true);
      xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // Nội dung của trang web được trả về
    var response = xhr.responseText;
    // Sử dụng các phương thức xử lý DOM để phân tích cú pháp và lấy nội dung của hàng đầu tiên
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(response, 'text/html');
    var RowCells = htmlDoc.querySelectorAll("tr:nth-child(1) td"); // Chọn tất cả các ô trong hàng 1 để lấy chapter 
    // In ra nội dung của từng ô trong hàng đầu tiên
    RowCells.forEach(function(cell) {
      arr.push(cell.innerText);
    });
    var imageList = document.getElementById('imageList');
    imageList.innerHTML = '';
    var trash='hello';
    for(var i=arr.length;i>=0;i--)
  {
     if(arr[i])  trash=arr[i];
     if (trash.startsWith("Chapter")) {numberCh++;}
    }
    sharedVar = numberCh;
    console.log(numberCh);
    for (var i = arr.length; i >= 0; i--) {
      (function() {
          var a = document.createElement("a");
          var stringName = '';
          if (arr[i]) {
              stringName = arr[i];
          }
          if (stringName.startsWith("Chapter")) {
  
              var img = document.createElement('img');
              img.src = imgs;
              var li = document.createElement('li');
              li.style.margin = '5px';
              li.appendChild(img);
              console.log(stringName);
              a.style.marginLeft = '40px';
              a.style.marginRight = '80px';
              a.style.color = 'white';
              li.appendChild(a);
  
              a.innerHTML = '<br>' + arr[i] + '<br>';
              a.addEventListener("click", function(event) {
                  window.location.href = "DocTruyenPhong.html?data1=" + chapterSheet + "&data2=" + stringName + "&data3=" + name + "&data4=" + numberCh;
              });
              imageList.appendChild(li);
          }
      })();
    }
  }
};
  xhr.send();

}


//// FIXED 
// 1/ tìm kiếm NULL
// 2/ lỗi chỉ hiện chapter 1








// Đổ ảnh vào var TrangList = document.getElementById('TrangList');
var listall = function(sheetURL, Chapter){ 
  console.log(Chapter);
  var TrangList = document.getElementById('TrangList');
  TrangList.innerHTML = '';

  var finishcount=1;
  var isFinish=false;
  var check=false;
  var numberChap=2;
// Sử dụng XMLHttpRequest để tải nội dung của bảng tính
var xhr = new XMLHttpRequest();
xhr.open("GET", sheetURL, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200 && isFinish==false) {
    // Nội dung của trang web được trả về
    var response = xhr.responseText;
    // Sử dụng các phương thức xử lý DOM để phân tích cú pháp và lấy nội dung của cột đầu tiên
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(response, 'text/html');
    var firstColumnCells = htmlDoc.querySelectorAll("td:nth-child("+numberChap+")"); // Chọn tất cả các ô trong cột đầu tiên
    // Lặp qua từng ô trong cột đầu tiên
    firstColumnCells.forEach(function(cell) {
      var text = cell.innerText.trim();
      if(text==Chapter||check==true){
        check=true; 
        if(text=='Sheet1') {isFinish=true;return;} // đoạn này để đảm bảo return cả hàm
      var imgElement = cell.querySelector("img");
      console.log(text); 
      if (imgElement && isFinish==false) {
        var imageUrl = imgElement.src;
        console.log('img src: '+imageUrl)
        var img1 = document.createElement("img");
        img1.src=(imageUrl);
        img1.style.width="90%";
        img1.style.height="60%";
        var li = document.createElement('li');
        li.style.marginLeft = '4%';
        li.appendChild(img1);                  
        TrangList.appendChild(li);
      
      } 
        }
      else {
        // var selectElement = document.getElementById('Chapter');

        // // Set the second option as selected (index starts from 0)
        // selectElement.options[1].selected = true;
        check=false;
        numberChap++;
        xhr.onreadystatechange();
      }
    });
  }
};
xhr.send();
}