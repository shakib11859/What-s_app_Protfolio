const chatData = {
    terminal: {
        title: "Terminal Bot",
        icon: "terminal",
        iconBg: "#1e1e1e",
        messages: [
            { type: 'received', text: "Welcome to the Portfolio Terminal! 🖥️" },
            { type: 'received', text: "Hello! I am Shakibul Hasan Sohag. 👋" },
            { type: 'received', text: "Available commands:\n• **about** - My background\n• **skills** - Tech stack\n• **exp** - Work experience\n• **projects** - My work\n• **edu** - Education\n• **contact** - Get in touch\n• **clear** - Clear terminal" }
        ]
    },
    about: {
        title: "About Me",
        icon: "user",
        iconBg: "#00a884",
        messages: [
            { type: 'received', text: "Hello! I am Shakibul Hasan Sohag. 👋" },
            { type: 'received', text: "I'm a hardworking and flexible person with experience in different types of work. I can quickly learn new things and work well in different situations." },
            { type: 'received', text: "I enjoy solving problems, working with teams, and helping businesses reach their goals. I am looking for a job where I can use my skills, learn more, and grow in my career." }
        ]
    },
    skills: {
        title: "Technical Skills",
        icon: "code-2",
        iconBg: "#34b7f1",
        messages: [
            { type: 'received', text: "Here is my technical toolkit: 🛠️" },
            { type: 'received', text: "• **ERP Systems**: Management and problem-solving skills." },
            { type: 'received', text: "• **OS Maintenance**: Windows & Mac Operating System maintaining." },
            { type: 'received', text: "• **Web Design**: HTML, CSS, PSD to HTML." },
            { type: 'received', text: "• **SEO**: Off-page SEO (Backlink)." },
            { type: 'received', text: "• **Hardware/Software**: Computer & Printer/Scanner maintenance & problem solving." },
            { type: 'received', text: "• **Networking**: Network issue solving & maintenance." },
            { type: 'received', text: "• **Office Tools**: MS Office Advance, Outlook, Excel." }
        ]
    },
    experience: {
        title: "Work Experience",
        icon: "briefcase",
        iconBg: "#ffbc2c",
        messages: [
            { type: 'received', text: "My professional journey: 💼" },
            { type: 'received', text: "**MIS Officer (ICT/MIS)** | Big Boss Corporation Ltd. (Aptech Group)\n*Ongoing*\nResponsibilities: ERP system administration, strong reporting for management, data discrepancy investigation, and application support." },
            { type: 'received', text: "**Content Moderator** | Genex Infosys Limited\n*Duration: 1 year*\nResponsibilities: Utilized moderation tools to review large volumes of content daily." }
        ]
    },
    projects: {
        title: "Projects",
        icon: "layers",
        iconBg: "#ff2c74",
        messages: [
            { type: 'received', text: "I've worked on several exciting projects! 🚀" },
            { type: 'received', text: "1. **ERP Access Administration**: Managing request forms and user access for corporate ERP systems." },
            { type: 'received', text: "2. **Management Reporting**: Creating new analytical reports for executive decision-making." },
            { type: 'received', text: "3. **End-user Support**: Providing technical troubleshooting and application enhancements." }
        ]
    },
    education: {
        title: "Education",
        icon: "graduation-cap",
        iconBg: "#a450ff",
        messages: [
            { type: 'received', text: "Academic Background: 🎓" },
            { type: 'received', text: "**BSC in CSE** | Uttara University\n*Result: Running*\nGroup: CSE | Board: Private" },
            { type: 'received', text: "**Diploma in CSE** | Khulna Polytechnic Institute\n*Result: 3.46 / 4.00*\nPassing year: 2023 | Board: Technical" },
            { type: 'received', text: "**SSC (Science)** | Jangle Badal High School\n*Result: 4.89 / 5.00*\nPassing year: 2019 | Board: Jessore" }
        ]
    },
    personal: {
        title: "Personal Info",
        icon: "info",
        iconBg: "#007bff",
        messages: [
            { type: 'received', text: "Additional Details: 📋" },
            { type: 'received', text: "**Father's Name:** MD. Sumsul Alam\n**Mother's Name:** MST. Salma Begum\n**DOB:** 15/02/2001\n**Religion:** Islam\n**Blood Group:** O+" },
            { type: 'received', text: "**Present Address:** 30 Sharabo, Kashimpur, Gazipur.\n**Permanent Address:** Bosundia, Sadar, Jessore." }
        ]
    },
    contact: {
        title: "Contact Me",
        icon: "phone",
        iconBg: "#25d366",
        messages: [
            { type: 'received', text: "Let's connect! 📞" },
            { type: 'received', text: "📧 Email: shakibuls31@gmail.com\n📱 Mobile: +8801873-441561" },
            { type: 'received', text: "🔗 LinkedIn: [shakibul-hassan](https://www.linkedin.com/in/shakibul-hassan-861054290)" }
        ]
    }
};

const chatList = document.getElementById('chatList');
const messagesContainer = document.getElementById('messagesContainer');
const chatTitle = document.getElementById('chatTitle');
const chatStatus = document.getElementById('chatStatus');
const headerProfilePic = document.getElementById('headerProfilePic');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const appContainer = document.querySelector('.app-container');
const backBtn = document.getElementById('backBtn');
const welcomeScreen = document.getElementById('welcomeScreen');
const chatHeader = document.querySelector('.chat-header');
const chatFooter = document.querySelector('.chat-footer');

// Mobile Navigation Logic (Moved to top for reliability)
function goBackToSidebar() {
    const container = document.querySelector('.app-container');
    if (container) {
        container.classList.remove('show-chat');
    }
}

let currentChatId = null;

function loadChat(chatId) {
    // Show Chat UI, Hide Welcome Screen
    welcomeScreen.style.display = 'none';
    chatHeader.style.display = 'flex';
    messagesContainer.style.display = 'flex';
    chatFooter.style.display = 'flex';

    currentChatId = chatId;
    const chat = chatData[chatId];

    // Update Header
    chatTitle.innerText = chat.title;
    headerProfilePic.innerHTML = `
        <div style="background: ${chat.iconBg}; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
            <i data-lucide="${chat.icon}" style="color: white; width: 24px; height: 24px;"></i>
        </div>
    `;
    lucide.createIcons();

    // Clear and Load Messages
    messagesContainer.innerHTML = '';
    showMessages(chat.messages, chatId);

    // Mobile navigation
    if (window.innerWidth <= 768) {
        appContainer.classList.add('show-chat');
    }
}

async function showMessages(messages, chatId) {
    chatStatus.innerText = 'typing...';

    for (const msg of messages) {
        if (currentChatId !== chatId) return;
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate typing delay
        if (currentChatId !== chatId) return;
        addMessage(msg.text, msg.type);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    if (currentChatId === chatId) {
        chatStatus.innerText = 'online';
    }
}

function addMessage(text, type) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${type}`;

    // Process text: handle newlines and simple markdown links [text](url)
    let processedText = text.replace(/\n/g, '<br>');
    processedText = processedText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" style="color: #53bdeb; text-decoration: underline;">$1</a>');

    msgDiv.innerHTML = `
        ${processedText}
    `;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Event Listeners
chatList.addEventListener('click', (e) => {
    const chatItem = e.target.closest('.chat-item');
    if (!chatItem) return;

    // UI Update
    document.querySelectorAll('.chat-item').forEach(item => item.classList.remove('active'));
    chatItem.classList.add('active');

    // Load Chat
    const chatId = chatItem.getAttribute('data-chat');
    if (chatId !== currentChatId) {
        loadChat(chatId);
    } else {
        // If same chat, still show on mobile
        if (window.innerWidth <= 768) {
            appContainer.classList.add('show-chat');
        }
    }
});

// Robust Mobile Navigation Listener
document.addEventListener('click', (e) => {
    if (e.target.closest('#backBtn')) {
        goBackToSidebar();
    }
});

function handleSendMessage() {
    const text = userInput.value.trim().toLowerCase();
    if (!text) return;

    addMessage(userInput.value, 'sent');
    userInput.value = '';

    if (currentChatId === 'terminal') {
        processTerminalCommand(text);
        return;
    }

    // Simple Auto-reply for other chats
    setTimeout(() => {
        chatStatus.innerText = 'typing...';
        setTimeout(() => {
            addMessage("Thanks for your message! This is a portfolio bot. Please select a chat from the sidebar to learn more about me.", 'received');
            chatStatus.innerText = 'online';
        }, 1500);
    }, 500);
}

function processTerminalCommand(cmd) {
    setTimeout(() => {
        chatStatus.innerText = 'typing...';
        setTimeout(() => {
            let response = "";
            switch (cmd) {
                case 'help':
                    response = "Available commands:\n• **about** - My background\n• **skills** - Tech stack\n• **exp** - Work experience\n• **projects** - My work\n• **edu** - Education\n• **contact** - Get in touch\n• **clear** - Clear terminal";
                    break;
                case 'about':
                    response = chatData.about.messages.map(m => m.text).join('\n\n');
                    break;
                case 'skills':
                    response = chatData.skills.messages.map(m => m.text).join('\n\n');
                    break;
                case 'exp':
                case 'experience':
                    response = chatData.experience.messages.map(m => m.text).join('\n\n');
                    break;
                case 'projects':
                    response = chatData.projects.messages.map(m => m.text).join('\n\n');
                    break;
                case 'edu':
                case 'education':
                    response = chatData.education.messages.map(m => m.text).join('\n\n');
                    break;
                case 'contact':
                    response = chatData.contact.messages.map(m => m.text).join('\n\n');
                    break;
                case 'clear':
                    messagesContainer.innerHTML = '';
                    chatStatus.innerText = 'online';
                    return;
                default:
                    response = "Unknown command: '" + cmd + "'. Type **help** to see all commands.";
            }
            addMessage(response, 'received');
            chatStatus.innerText = 'online';
        }, 1000);
    }, 500);
}

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendMessage();
});

sendBtn.addEventListener('click', handleSendMessage);

// Search Filter Logic
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const chatItems = document.querySelectorAll('.chat-item');
    
    chatItems.forEach(item => {
        const name = item.querySelector('.chat-name').innerText.toLowerCase();
        if (name.includes(query)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

// Modal Logic
function initProfileModal() {
    const sidebarProfilePic = document.getElementById('sidebarProfilePic');
    const profileModal = document.getElementById('profileModal');
    const closeModal = document.getElementById('closeModal');

    if (sidebarProfilePic && profileModal && closeModal) {
        sidebarProfilePic.addEventListener('click', () => {
            profileModal.style.display = 'flex';
        });

        closeModal.addEventListener('click', () => {
            profileModal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === profileModal) {
                profileModal.style.display = 'none';
            }
        });
    }
}

// Dropdown Menu Logic (Robust Delegation)
document.addEventListener('click', (e) => {
    const menuBtn = document.getElementById('menuBtn');
    const menuDropdown = document.getElementById('menuDropdown');
    
    // Toggle dropdown
    if (e.target.closest('#menuBtn')) {
        e.stopPropagation();
        menuDropdown.classList.toggle('show-dropdown');
        return;
    }

    // Refresh button
    if (e.target.closest('#refreshBtn')) {
        e.preventDefault();
        location.reload();
        return;
    }

    // Exit button
    if (e.target.closest('#exitBtn')) {
        e.preventDefault();
        window.location.href = '404 Page Not Found/index.html'; 
        return;
    }

    // Close dropdown when clicking anywhere else
    if (menuDropdown && menuDropdown.classList.contains('show-dropdown')) {
        menuDropdown.classList.remove('show-dropdown');
    }
});

// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const body = document.body;
        body.classList.toggle('light-theme');
        
        const isLight = body.classList.contains('light-theme');
        
        // Correctly replace the icon (Lucide replaces the tag, so we must reset innerHTML)
        const iconName = isLight ? 'sun' : 'moon';
        themeToggle.innerHTML = `<i data-lucide="${iconName}"></i>`;
        lucide.createIcons();
    });
}

// Language Option Logic
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
    alert("Language options coming soon! Currently supported: English.");
});

// Initial Load
window.onload = () => {
    lucide.createIcons();
    initProfileModal();
};
