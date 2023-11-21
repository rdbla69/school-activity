alert("Welcome to KKD Tutorials!");
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
      createClickEffect(e.clientX, e.clientY);
    });
  });

  function createClickEffect(x, y) {
    var clickEffect = document.getElementById('click-effect');
    clickEffect.style.left = x - 10 + 'px'; // Adjust for half of the border width
    clickEffect.style.top = y - 10 + 'px'; // Adjust for half of the border width
    clickEffect.style.transform = 'scale(1)';
    setTimeout(function() {
      clickEffect.style.transform = 'scale(0)';
    }, 200);
  }