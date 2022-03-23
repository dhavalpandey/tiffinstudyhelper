var input = document.querySelector("#url");

function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}

input.addEventListener("keyup", (key) => {
  if (key.keyCode == 13) {
    if (!input.value.trim().length) return;
    let isInputURL = isUrl(input.value);
    document.getElementById("initiate").innerHTML =
      "<span class='button__text disabled'>Loading...</span>";
    let url = btoa(input.value);
    if (isInputURL) {
      window.location.assign(`/prox/?url=${url}`);
    } else {
      let googleSearch = btoa(`https://www.google.com/search?q=${input.value}`);
      window.location.assign(`/prox/?url=${googleSearch}`);
    }
  }
});

document.querySelector("#initiate").addEventListener("click", () => {
  if (!input.value.trim().length) return;
  let isInputURL = isUrl(input.value);
  let url = btoa(input.value);
  document.getElementById("initiate").innerHTML =
    "<span class='button__text disabled'>Loading...</span>";
  if (isInputURL) {
    window.location.assign(`/prox/?url=${url}`);
  } else {
    let googleSearch = btoa(`https://www.google.com/search?q=${input.value}`);
    window.location.assign(`/prox/?url=${googleSearch}`);
  }
});
