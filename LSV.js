window.addEventListener('DOMContentLoaded', function() {
  var buttons = document.getElementsByClassName("LSV1");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      console.log(5);
      this.classList.toggle("montrer");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 50 + "px";
      }
    });
  }

  var buttons2 = document.getElementsByClassName("LSV2");

  for (var j = 0; j < buttons2.length; j++) {
    buttons2[j].addEventListener("click", function() {
      this.classList.toggle("montrer");
      var panel2 = this.nextElementSibling;
      if (panel2.style.maxHeight) {
        panel2.style.maxHeight = null;
      } else {
        panel2.style.maxHeight = panel2.scrollHeight + 50 + "px";
      }
    });
  }

  var buttons3 = document.getElementsByClassName("LSV3");

  for (var k = 0; k < buttons3.length; k++) {
    buttons3[k].addEventListener("click", function() {
      this.classList.toggle("montrer");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 50 + "px";
      }
    });
  }
});

var blocks = document.querySelectorAll('.block1, .block2, .block3');

function checkVisibility() {
  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];
    var position = block.getBoundingClientRect();

    if (position.top >= 0 && position.bottom <= window.innerHeight - 100) {
      block.classList.add('show');
    }
  }
}

checkVisibility();

window.addEventListener('scroll', checkVisibility);