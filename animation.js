// JavaScript
const animateMeElements = document.querySelectorAll('.animate-me');

function checkScroll() {
    const windowHeight = window.innerHeight;

    animateMeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight * 0.75 && !element.classList.contains('animated')) {
            element.classList.add('animated');
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// スクロールイベントを監視し、スクロール位置を調整する
window.addEventListener('scroll', () => {
    checkScroll();
});

// 初期状態で要素が表示されないようにする
checkScroll();

// ヘッダーのリンクがクリックされたときの処理
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // リンクのhrefから#を削除
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // スクロールを一時停止
            // disableScroll();

            // ターゲット要素までスクロール
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            // アニメーションが完了したらスクロールを再開
            targetElement.addEventListener('transitionend', () => {
                allowScroll = true;
            });
        }
    });
});
