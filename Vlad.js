document.getElementById("button1").addEventListener("click", function button(button1) {
    alert("Молодец,ответ правильный!");
});

const button = document.getElementById('button2');
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const buttonRect = button.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const offsetX = mouseX - buttonCenterX;
    const offsetY = mouseY - buttonCenterY;

    const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
    const moveSpeed = 50; // Скорость убегания

    if (distance < 200) {
      // Двигаем кнопку от курсора
      const moveX = (offsetX / distance) * moveSpeed;
      const moveY = (offsetY / distance) * moveSpeed;

      const newX = button.offsetLeft - moveX;
      const newY = button.offsetTop - moveY;

      const maxX = window.innerWidth - button.offsetWidth;
      const maxY = window.innerHeight - button.offsetHeight;

      
      button.style.left = `${newX}px`;
      button.style.top = `${newY}px`;
    }
  });
