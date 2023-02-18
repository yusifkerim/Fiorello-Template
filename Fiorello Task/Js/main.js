function homeButton() {
    var home = document.getElementById("homeButton");
    var homeList = document.getElementById("home_list");
    var pagesList = document.getElementById("pages_list");
    var shopFlex = document.getElementById("shop_flex");
    var portfolioList = document.getElementById("portfolio_list");
    var blogList = document.getElementById("blog_list");
    var elementsList = document.getElementById("elements_list");
    
    if (homeList.style.display === "flex") {
      homeList.style.display = "none";

    } else {
      homeList.style.display = "flex";
      pagesList.style.display = "none";
      shopFlex.style.display = "none";
      portfolioList.style.display = "none";
      blogList.style.display = "none";
      elementsList.style.display = "none";
      search.style.display = "none";
    }
  }
  function pagesButton() {
    var pages = document.getElementById("pagesButton");
    var homeList = document.getElementById("home_list");
    var pagesList = document.getElementById("pages_list");
    var shopFlex = document.getElementById("shop_flex");
    var portfolioList = document.getElementById("portfolio_list");
    var blogList = document.getElementById("blog_list");
    var elementsList = document.getElementById("elements_list");
    if (pagesList.style.display === "flex") {
        pagesList.style.display = "none";
    } else {
        pagesList.style.display = "flex";
        homeList.style.display = "none";
        shopFlex.style.display = "none";
        portfolioList.style.display = "none";
        blogList.style.display = "none";
        elementsList.style.display = "none";
        search.style.display = "none";
    }
  }
  function shopButton() {
    var shop = document.getElementById("shop");
    var homeList = document.getElementById("home_list");
    var pagesList = document.getElementById("pages_list");
    var shopFlex = document.getElementById("shop_flex");
    var portfolioList = document.getElementById("portfolio_list");
    var blogList = document.getElementById("blog_list");
    var elementsList = document.getElementById("elements_list");
    if (shopFlex.style.display === "flex") {
        shopFlex.style.display = "none";
    } else {
        shopFlex.style.display = "flex";
        pagesList.style.display = "none";
        homeList.style.display = "none";
        portfolioList.style.display = "none";
        blogList.style.display = "none";
        elementsList.style.display = "none";
        search.style.display = "none";
        
    }
  }
  function portfolioButton() {
    var portfolio = document.getElementById("portfolio");
    var homeList = document.getElementById("home_list");
    var pagesList = document.getElementById("pages_list");
    var shopFlex = document.getElementById("shop_flex");
    var portfolioList = document.getElementById("portfolio_list");
    var blogList = document.getElementById("blog_list");
    var elementsList = document.getElementById("elements_list");
    if (portfolioList.style.display === "flex") {
        portfolioList.style.display = "none";
    } else {
        portfolioList.style.display = "flex";
        shopFlex.style.display = "none";
        pagesList.style.display = "none";
        homeList.style.display = "none";
        blogList.style.display = "none";
        elementsList.style.display = "none";
        search.style.display = "none";
    }
  }
  function blogButton() {
    var blog = document.getElementById("blog");
    var homeList = document.getElementById("home_list");
    var pagesList = document.getElementById("pages_list");
    var shopFlex = document.getElementById("shop_flex");
    var portfolioList = document.getElementById("portfolio_list");
    var blogList = document.getElementById("blog_list");
    var elementsList = document.getElementById("elements_list");
    if (blogList.style.display === "flex") {
        blogList.style.display = "none";
    } else {
        blogList.style.display = "flex";
        portfolioList.style.display = "none";
        shopFlex.style.display = "none";
        pagesList.style.display = "none";
        homeList.style.display = "none";
        elementsList.style.display = "none";
        search.style.display = "none";
    }
  }
  function elementsButton() {
    var elements = document.getElementById("elements");
    var homeList = document.getElementById("home_list");
    var pagesList = document.getElementById("pages_list");
    var shopFlex = document.getElementById("shop_flex");
    var portfolioList = document.getElementById("portfolio_list");
    var blogList = document.getElementById("blog_list");
    var elementsList = document.getElementById("elements_list");
    var search = document.getElementById("search")
    if (elementsList.style.display === "flex") {
        elementsList.style.display = "none";
    } else {
        elementsList.style.display = "flex";
        blogList.style.display = "none";
        portfolioList.style.display = "none";
        shopFlex.style.display = "none";
        pagesList.style.display = "none";
        homeList.style.display = "none";
        search.style.display = "none";
        
    }
  }
  function searchButton() {
    var elements = document.getElementById("elements");
    var homeList = document.getElementById("home_list");
    var pagesList = document.getElementById("pages_list");
    var shopFlex = document.getElementById("shop_flex");
    var portfolioList = document.getElementById("portfolio_list");
    var blogList = document.getElementById("blog_list");
    var elementsList = document.getElementById("elements_list");
    var search = document.getElementById("search")
    if (search.style.display === "flex") {
        search.style.display = "none";
    } else {
        search.style.display = "flex";
        blogList.style.display = "none";
        portfolioList.style.display = "none";
        shopFlex.style.display = "none";
        pagesList.style.display = "none";
        homeList.style.display = "none";
        elementsList.style.display = "none";
        
    }
  }

  function exit() {
    var x = document.getElementById("mobilMenu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  
  function filterButton() {
    var x = document.getElementById("filterList");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

