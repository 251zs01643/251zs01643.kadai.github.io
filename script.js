function changeMessage() {
    const messages = [
        "こんにちは！",
        "GitHub Pagesへようこそ！",
        "JavaScriptが動いています！",
        "今日もがんばりましょう！"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").textContent = messages[randomIndex];
}
