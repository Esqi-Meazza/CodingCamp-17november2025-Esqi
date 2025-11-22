let messages = [];

        function formatTime() {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            return `${h}:${m}`;
        }

        function renderMessages() {
            const container = document.getElementById('messagesContainer');
            const count = document.getElementById('msgCount');
            count.textContent = messages.length;

            if (messages.length === 0) {
                container.innerHTML = `
                <div class="no-messages">
                        <i class="fa-regular fa-comment-dots"></i>
                        <p>No messages yet.<br>Be the first to send!</p>
                    </div>
                `;
                return;
              }

            container.innerHTML = messages.map(m => `
                <div class="message-card">
                    <div class="message-header">
                        <span class="message-name">${m.name}</span>
                        <span class="message-time">${m.time}</span>
                    </div>
                    <div class="message-subject">${m.subject}</div>
                    <div class="message-email">${m.email}</div>
                    <div class="message-text">${m.message}</div>
                </div>
            `).join('');
        }

        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const newMsg = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                time: formatTime()
            };

            messages.unshift(newMsg);
            renderMessages();
            this.reset();
        });
        
        renderMessages();

        document.querySelectorAll('a[href^="#"]').forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
        
            target.scrollIntoView({
              behavior: "smooth"
            });
          });
        });

        // Welcome Speech
document.addEventListener("DOMContentLoaded", () => {
    let userName = prompt("Siapa nama kamu?");

    if (userName === null || userName.trim() === "") {
        userName = "Guest";
    }

    document.getElementById("welcome-message").textContent = `Welcome, ${userName}!`;
});
