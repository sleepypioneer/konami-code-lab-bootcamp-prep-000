const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;
function init() {
  const body = document.getElementsByTagName('body')
  body.addEventListener('keydown', function(e) {
    alert('raa');
    const key = parseInt(e.detail);
    console.log(key)
    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }

  })
}

init()
