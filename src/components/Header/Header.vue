<script >
import   './Header.css'

</script>

<template>
    <header>
      <div class="header_content">
        <div class="header_logo">
          <img src="./../../img/logo.png" alt="logo" />
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
    
</template>