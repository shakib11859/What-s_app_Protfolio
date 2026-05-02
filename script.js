const chatData = {
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
            { type: 'received', text: "LinkedIn & other social profiles available on request." }
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

let currentChatId = 'about';

function loadChat(chatId) {
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
    showMessages(chat.messages);
}

async function showMessages(messages) {
    chatStatus.innerText = 'typing...';
    
    for (const msg of messages) {
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate typing delay
        addMessage(msg.text, msg.type);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    chatStatus.innerText = 'online';
}

function addMessage(text, type) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${type}`;
    msgDiv.innerHTML = `
        ${text.replace(/\n/g, '<br>')}
        <span class="message-time">${time}</span>
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
    }
});

function handleSendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, 'sent');
    userInput.value = '';
    
    // Simple Auto-reply
    setTimeout(() => {
        chatStatus.innerText = 'typing...';
        setTimeout(() => {
            addMessage("Thanks for your message! This is a portfolio bot. Please select a chat from the sidebar to learn more about me.", 'received');
            chatStatus.innerText = 'online';
        }, 1500);
    }, 500);
}

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendMessage();
});

sendBtn.addEventListener('click', handleSendMessage);

// Initial Load
window.onload = () => {
    loadChat('about');
};
