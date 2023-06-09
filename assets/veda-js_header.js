function veda_fn_740362d1c83b4345ad82db822e10abb4 () {
      
  if (window.veda_fn_740362d1c83b4345ad82db822e10abb4Cleanup === undefined) {
    window.veda_fn_740362d1c83b4345ad82db822e10abb4Cleanup = {
      listeners: [],
      push(listener) {
        this.listeners.push(listener);
      },
      cleanup() {
        this.listeners.forEach(listener => listener());
        this.listeners = [];
      }
    }
  }
  window.veda_fn_740362d1c83b4345ad82db822e10abb4Cleanup.cleanup();

      const uniqueId = "id_698bda23-62fc-490e-9ec2-b842b986b3fb";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        
      });
    }
veda_fn_740362d1c83b4345ad82db822e10abb4();
function veda_fn_0df57bd5794e40fb829069656d2904ac () {
      
  if (window.veda_fn_0df57bd5794e40fb829069656d2904acCleanup === undefined) {
    window.veda_fn_0df57bd5794e40fb829069656d2904acCleanup = {
      listeners: [],
      push(listener) {
        this.listeners.push(listener);
      },
      cleanup() {
        this.listeners.forEach(listener => listener());
        this.listeners = [];
      }
    }
  }
  window.veda_fn_0df57bd5794e40fb829069656d2904acCleanup.cleanup();

      const uniqueId = "id_141bc910-704e-46d3-a876-990c1bd1d6a7";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const {
  productCompare,
  productWishList,
  sticky,
  select,
  mobileMenu,
  predictiveSearch,cart
} = veda.plugins;
const comparePopupEls = container.querySelectorAll(".veda-compare-toggle-js");
const wishlistToggleEls = container.querySelectorAll(
  ".veda-wishlist-badge-toggle-js"
);
const socialEl = container.querySelector(".social-js");
const stickyEl = container.querySelector(".veda-sticky");

let visibleSearch = false;

function getSectionBackground(defaultValue) {
  const vedaBackgroundEl = container.querySelector(".veda-background");
  if (vedaBackgroundEl && vedaBackgroundEl.style.backgroundColor) {
    return vedaBackgroundEl.style.backgroundColor;
  }
  return defaultValue;
}

function containerZIndex() {
  function handleContainerClick() {
    container.style.zIndex = "999";
  }

  function handleWindowClick(event) {
    if (!container.contains(event.target)) {
      container.style.removeProperty("z-index");
    }
  }
  container.addEventListener("click", handleContainerClick);
  window.addEventListener("click", handleWindowClick);

  window.veda_fn_0df57bd5794e40fb829069656d2904acCleanup.push(() => {
    container.removeEventListener("click", handleContainerClick);
    window.removeEventListener("click", handleWindowClick);
  });
}
containerZIndex();

function navigation() {
  const compares = Array.from(comparePopupEls).map((element) => ({
    element,
    label: `<span class="ml:10px">Compare</span>`,
    className:
      "w:100% p:15px pl:5px! h:50px d:flex ai:center ff:font-secondary fz:13px fw:500 tt:uppercase c:color-gray9 ta:left",
  }));
  const wishLists = Array.from(wishlistToggleEls).map((element) => ({
    element,
    label: `<span class="ml:10px">Wishlist</span>`,
    className:
      "w:100% p:15px pl:5px! h:50px d:flex ai:center ff:font-secondary fz:13px fw:500 tt:uppercase c:color-gray9 ta:left",
  }));
  const appendElements = [].concat(compares, wishLists, [
    {
      element: socialEl,
      className: "w:100% p:15px pl:5px! h:50px d:flex ai:center jc:center",
    },
  ]);
  const menu = mobileMenu(container, {
    backClassName: "p:15px c:color-gray9 bdb:1px_solid_color-gray2",
    closeClassName: "w:100% p:8px_15px c:color-gray9 bdb:1px_solid_color-gray2",
    appendElements,
  });

  function checkResponsive() {
    if (window.innerWidth > 992) {
      menu.destroy();
    } else {
      menu.init();
    }
  }
  checkResponsive();
  window.addEventListener("resize", checkResponsive);
  window.veda_fn_0df57bd5794e40fb829069656d2904acCleanup.push(() => {
    window.removeEventListener("resize", checkResponsive);
  });
}
navigation();

function currency() {
  const selectEls = container.querySelectorAll(".veda-select-currency");
  selectEls.forEach((selectEl) => {
    if (selectEl) {
      const formEl = container.querySelector(".currency_form");
      const currencyCodeEl = container.querySelector('[name="currency_code"]');
      const flagEl = selectEl.querySelector(".veda-select__view .flag");
      select(selectEl, {
        onChange(value) {
          flagEl.className = `mr:5px flag flag-${value}`;
          if (!builderMode) {
            currencyCodeEl.setAttribute("value", value);
            formEl.submit();
          }
        },
      });
    }
  });
}
currency();

function language() {
  const selectEls = container.querySelectorAll(".veda-select-lang");
  selectEls.forEach((selectEl) => {
    if (selectEl) {
      const formEl = container.querySelector(".localization_form");
      const localeCodeEl = container.querySelector('[name="locale_code"]');
      select(selectEl, {
        onChange(value) {
          if (!builderMode) {
            localeCodeEl.setAttribute("value", value);
            formEl.submit();
          }
        },
      });
    }
  });
}
language();

function setBadbe(el, count) {
  if (count) {
    el.textContent = count;
    el.style.setProperty("display", "flex", "important");
  } else {
    el.style.removeProperty("display");
  }
}

function compare() {
  comparePopupEls.forEach((comparePopupEl) => {
    const compareOptionsData = veda.utils.objectParse(
      comparePopupEl.getAttribute("data-options")
    );
    const compareOptionsTitle =
      compareOptionsData.compareOptionsTitle.split(",");
    productCompare.customCompare({
      ...compareOptionsData,
      compareOptionsTitle: compareOptionsTitle,
    });
    //button popup
    const handleClick = () => {
      productCompare.togglePopup();
    };
    comparePopupEl.addEventListener("click", handleClick);
    // compare badge
    const compareBadgeEl = comparePopupEl.querySelector(
      ".veda-compare-badge-js"
    );
    setBadbe(compareBadgeEl, productCompare.getData().length);
    const unsubscribe = productCompare.subscribe((state) => {
      setBadbe(compareBadgeEl, state.length);
    });
    window.veda_fn_0df57bd5794e40fb829069656d2904acCleanup.push(() => {
      unsubscribe();
      comparePopupEl.removeEventListener("click", handleClick);
    });
  });
}
compare();

function wishList() {
  const wishlistBadgeEls = container.querySelectorAll(
    ".veda-wishlist-badge-js"
  );
  wishlistBadgeEls.forEach((wishlistBadgeEl) => {
    const count = productWishList.getData()?.length;
    setBadbe(wishlistBadgeEl, count);

    const unsubscribe = productWishList.subscribe((state) => {
      const count = state.length;
      setBadbe(wishlistBadgeEl, count);
    });

    window.veda_fn_0df57bd5794e40fb829069656d2904acCleanup.push(() => {
      unsubscribe();
    });
  });
}
wishList();

function search() {
  const btnSearchEls = container.querySelectorAll(".btn-search-js");
  const searchContent = container.querySelector(".search-content-js");
  const inputSearchEl = container.querySelector(".input-search-js");
  if (!!btnSearchEls) {
    btnSearchEls.forEach((btnSearchEl) => {
      const handleClick = () => {
        if (visibleSearch) {
          inputSearchEl.blur();
          searchContent.style.transform = "translateY(-100%)";
          searchContent.style.visibility = "hidden";
          visibleSearch = false;
        } else {
          inputSearchEl.focus();
          searchContent.style.transform = "translateY(0)";
          searchContent.style.visibility = "visible";
          visibleSearch = true;
        }
      };
      btnSearchEl.addEventListener("click", handleClick);
      window.veda_fn_0df57bd5794e40fb829069656d2904acCleanup.push(() => {
        btnSearchEl.removeEventListener("click", handleClick);
      });
    });
  }
}
search();

let isSticky = false;
function headerSticky() {
  if (stickyEl) {
    const destroy = sticky(stickyEl, {
      onChange(sticky) {
        if (sticky !== isSticky) {
          if (sticky) {
            stickyEl.style.backgroundColor =
              getSectionBackground("var(--color-light)");
          } else {
            stickyEl.style.removeProperty("background-color");
          }
          isSticky = sticky;
        }
      },
    });
    window.veda_fn_0df57bd5794e40fb829069656d2904acCleanup.push(() => {
      destroy();
    });
  }
}

function handlePredictiveSearch() {
  const el = container.querySelector(".veda-search-form-js");
  const resultText = el.getAttribute("data-text-result");
  let predictiveSearchOptions;
  if (!!resultText) {
    predictiveSearchOptions = {
      viewAllText: resultText,
      position: "fixed",
    };
  } else {
    predictiveSearchOptions = {
      position: "fixed",
    };
  }
  const destroy = predictiveSearch(el, predictiveSearchOptions);
  window.veda_fn_0df57bd5794e40fb829069656d2904acCleanup.push(() => {
    destroy();
  });
}

headerSticky();
handlePredictiveSearch();
const unSubCart = cart.subscribe(async (state) => {

  const badgeCart = container.querySelector(".veda-cart-badge-js");
  if (!!badgeCart) {
    badgeCart.textContent = `${state?.item_count}`;
    if (state?.item_count) {
      badgeCart.style.display = 'flex'
    } else {
      badgeCart.style.display = 'none'
    }
  }
});
window.veda_fn_0df57bd5794e40fb829069656d2904acCleanup.push(() => {
  unSubCart();
});
      });
    }
veda_fn_0df57bd5794e40fb829069656d2904ac();