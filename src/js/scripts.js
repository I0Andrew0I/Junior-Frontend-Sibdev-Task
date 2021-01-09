const onSidebarButtonClick = () => {
  const sidebar = document.getElementById("sidebar-content");
  sidebar.classList.toggle("sidebar__content__opened");
};

const searchField = document.getElementById("search__input");

const onScrollAndWindowSizeChange = () => {
  const heightOffset = window.pageYOffset;
  const searchInput = document.getElementById("search-input");
  const normalHeightOffset =
    Math.floor(heightOffset / 53) > 0 ? 53 : heightOffset % 53;
  const marginOffset = Math.round((48 / 53) * normalHeightOffset);
  const windowWidth = window.innerWidth;
  if (windowWidth > 768) {
    searchInput.style.marginLeft = `60px`;
  }
  if (windowWidth <= 768) {
    searchInput.style.marginLeft = `${27 + marginOffset}px`;
  }
  if (windowWidth <= 320) {
    searchInput.style.marginLeft = `${20 + marginOffset}px`;
    document.getElementById("search-icon").style.display =
      marginOffset > 20 ? "none" : "block";
  }
};

document.addEventListener("scroll", onScrollAndWindowSizeChange);
window.onresize = onScrollAndWindowSizeChange;
