document.getElementById('modal-nav-close-btn').addEventListener('click', function () {
    document.getElementById('modal-nav').style.display = 'none';
});
document.getElementById('modal-close-btn').addEventListener('click', function () {
    document.getElementById('modal-container').style.display = 'none';
});
document.getElementById('order-btn').addEventListener('click', function () {
    document.getElementById('modal-container').style.display = 'block';
});
document.getElementById('burger-btn').addEventListener('click', function () {
    document.getElementById('modal-nav').style.display = 'block';
})