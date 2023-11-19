<script setup></script>
<template>
  <div class="container">
    <header>
      <div class="header_content">
        <div class="header_logo">
          <img src="./img/logo.png" alt="logo" />
        </div>
        <nav>
          <ul>
            <li>МЕБЕЛЬ</li>
            <li>ОСВЕЩЕНИЕ</li>
            <li>ТЕКСТИЛЬ</li>
          </ul>
        </nav>
        <div class="header_right">
          <div class="header_search">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
            <input 
            type="search"
            placeholder="Поиск товаров..."
            />
          </div>
          <div class="header_cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
              />
            </svg>
            <span class="header_cart_count">1</span>
          </div>
        </div>
      </div>
    </header>
    <div class="banner">
      <div class="banner_left">
        <div class="banner_left-content">
          <h1>ДИЗАЙНЕРСКАЯ МЕБЕЛЬ</h1>
          <p>Кресло "Антиква"</p>
          <div class="price">
            <p>$380</p>
            <h4>$240</h4>
          </div>
        </div>
      </div>
      <div class="banner_img">
        <img src="./img/banner_img.png" alt="banner_img" />
      </div>
      <div class="banner_right">
        <ul>
          <li>Пагинация</li>
        </ul>
      </div>
    </div>
    <div class="products">
      <div class="products_card">
       <h3>НОВИНКИ</h3> 
      </div>
      <div class="products_card">
        <img src="./img/smerk.png" alt="Смеркается" />
        <p>Стул "Смеркается"</p>
        <span>$280</span>
      </div>
      <div class="products_card">
        <img src="./img/white-chocolate.png" alt="Белый шоколад" />
        <p>Стул офисный "Белый шоколад"</p>
        <span>$120</span>
      </div>
      <div class="products_card">
        <img src="./img/oblako.png" alt="люстра облако" />
        <p>Люстра "Облако"</p>
        <span>$250</span>
      </div>
      <div class="products_card">
        <img src="./img/cream-burle.png" alt="стол крем брюле" />
        <p>Стол "Крем брюле"</p>
        <span>$320</span>
      </div>
    </div>
    <div class="feedback_carusel">
      <div class="feedback_card">
        <img src="./img/user-feadback.png" alt="feedback" />
        <h4>Елена Новикова</h4>
        <span>Студентка</span>
        <p>
          «Хочу поделиться своими впечатлениями по использованию дивана «Бродвей»,<br />
          заказывала в конце 2016 года. Держится великолепно. Спасибо, большое <br />
          сотрудникам этого чудесного магазина.»
        </p>
      </div>
    </div>
    <div class="sale">
      <h3>ПОСЛЕДНЫЙ ШАНС</h3>
      <div class="sale_category">
        <ul>
          <li>
           <a href="/">СТУЛЬЯ</a> 
          </li>
          <li>
           <a href="/">ДИВАНЫ</a> 
          </li>
          <li>
          <a href="">КРЕСЛА</a>  
          </li>
        </ul>
      </div>
      <div class="sale_cards">
        <div class="sale_card">
          <div class="sale_card_title">
            <p>стул...</p>
            <h4>195$</h4>
            <span>245$</span>
          </div>
          <img src="./img/cream-burle.png" alt="карамель" />
          <button>Купить</button>
        </div>
        <div class="sale_card">
          <div class="sale_card_title">
            <p>стул...</p>
            <h4>195$</h4>
            <span>245$</span>
          </div>
          <img src="./img/cream-burle.png" alt="карамель" />
          <button>Купить</button>
        </div>
        <div class="sale_card">
          <div class="sale_card_title">
            <p>стул...</p>
            <h4>195$</h4>
            <span>245$</span>
          </div>
          <img src="./img/cream-burle.png" alt="карамель" />
          <button>Купить</button>
        </div>
        <div class="sale_card">
          <div class="sale_card_title">
            <p>стул...</p>
            <h4>195$</h4>
            <span>245$</span>
          </div>
          <img src="./img/cream-burle.png" alt="карамель" />
          <button>Купить</button>
        </div>
        <div class="sale_card">
          <div class="sale_card_title">
            <p>стул...</p>
            <h4>195$</h4>
            <span>245$</span>
          </div>
          <img src="./img/cream-burle.png" alt="карамель" />
          <button>Купить</button>
        </div>
      </div>
    </div>
    <footer>
        <div class="footer_logo">
          <img src="./img/logo.png" alt="logo" />
        </div>
        <div class="footer_dev_link">developed by....</div>
        <div class="nav">
          <ul>
            <li>
             <a href="#">ДОСТАВКА</a> 
            </li>
            <li>
              <a href="#">ОПЛАТА</a> 
            </li>
            <li>
              <a href="#">КОНТАКТЫ</a> 
            </li>
            <li>
              <a href="#">ГАРАНТИИ</a> 
            </li>
          </ul>
        </div>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  background: #fff;
}

ul {
  list-style: none;
}



.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

header {
  width: 100%;
  height: 100px;
}

.header_content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
}

.header_logo img {
  width: 50px;
  height: 50px;
  margin: auto;
}
.header_content ul {
  display: flex;
  flex-direction: row;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.13em;
  padding: 20px;
}
.header_content ul li {
  padding-left: 10px;
}

.header_right {
  display: flex;
  flex-wrap: wrap;  
  padding: 20px;


}

.header_search input {
  border-radius: 5px;
  padding-left: 10px;
  border: none;

}

.header_cart {
  position: relative;
  width: 30px;
  height: 30px;
}

.header_cart_count {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #b9b9b9;
  right: 13px;
  bottom: 5px;
  border-radius: 50%;
  font-weight: 700;
  font-size: 10px;
  color: #040404;
  text-align: center;
  line-height: 10px;

}
.banner {
  display: flex;
  flex-direction: row;
  width: 100%;

}
.banner_left {
  background: #f9fdff;
  width: 42%;
  height: 750px;


}
.banner_left-content {
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 360px;
  align-items: center;
  margin: 260px 100px;
}

.banner_img {
  display: block;
  align-items: center;
}
.banner_right {
  width: 25%;
  background: #fceae8;
  height: 750px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 614px;

}

.products_card {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 265px;
  align-items: center;
  margin: 20px 10px auto 110px;
  padding-inline: 5px;
  border-radius: 10px;

}
.products_card:first-child {
  border: none;
}
.products_card:first-child h3 {
  margin: auto;
  
  
}

.products_card img {
  width: 100%;
  height: 200px;
}

.feedback_carusel {
  width: 100%;
  height: 400px;

}

.feedback_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
}

.feedback_card img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.feedback_card p {
  text-align: center;
}

.sale {
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;

}



.sale h3 {
  margin: 10px;
}

.sale_category ul {
  display: flex;
  flex-direction: row;
  margin: 5px;
  padding: 5px;
}

.sale_category ul li {
  padding-left: 5px;
  font-weight: 600;
}

.sale_category ul li a {
  text-decoration: none;
  color: #000;
}

.sale_category ul li a:hover {
  border-bottom: 1px solid #000;
}

.sale_cards {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding: 30px 30px;
}

.sale_card {
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 20px;
  border: 2px solid rgb(213, 185, 185);
  border-radius: 10px;
}

.sale_card img {
  width: 100%;
  margin: auto;
}
.sale_card_title {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 2px;
  padding: 30px;
}

.sale_card button {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  border-radius: 10px 10px 10px 10px;
  text-align: center;
  transition: transform 1s ease-in-out;
}

.sale_card button:hover {
  background: black;
  color: #fff;
  transform: translateY(-15px);
}

footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}

footer ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
}

footer ul li a {
  text-decoration: none;
  color: #000;
}

footer ul li a:hover {
  border-bottom: 1px solid #000;
}

.footer_logo  img {
  width: 30px;
  height: 30px;
  margin: 10px;
}

.footer_dev_link {
  margin: 10px;
}

footer ul li {
  margin-left: 10px;
}

</style>
