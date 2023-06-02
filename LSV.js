window.onload = function() {
    var buttons = document.getElementsByClassName("LSV1");
    var i;
  
    for (i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        this.classList.toggle("montrer");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
    var buttons2 = document.getElementsByClassName("LSV2");
    var j;
  
    for (j = 0; j < buttons2.length; j++) {
      buttons2[j].addEventListener("click", function() {
        this.classList.toggle("montrer");
        var panel2 = this.nextElementSibling;
        if (panel2.style.maxHeight) {
          panel2.style.maxHeight = null;
        } else {
          panel2.style.maxHeight = panel2.scrollHeight + "px";
        }
      });
    }
    var buttons3 = document.getElementsByClassName("LSV3");
    var k;
  
    for (k = 0; k < buttons3.length; k++) {
      buttons3[k].addEventListener("click", function() {
        this.classList.toggle("montrer");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
    
    document.querySelector('.block1').classList.add('show');
    document.querySelector('.block2').classList.add('show');
    document.querySelector('.block3').classList.add('show');
  }