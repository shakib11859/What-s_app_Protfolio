const chatDataEn = {
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
    edu: {
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

const chatDataBn = {
    terminal: {
        title: "টার্মিনাল বট",
        icon: "terminal",
        iconBg: "#1e1e1e",
        messages: [
            { type: 'received', text: "পোর্টফোলিও টার্মিনালে স্বাগতম! 🖥️" },
            { type: 'received', text: "হ্যালো! আমি শাকিবুল হাসান সোহাগ। 👋" },
            { type: 'received', text: "উপলব্ধ কমান্ডসমূহ:\n• **about** - আমার সম্পর্কে\n• **skills** - টেক স্কিলস\n• **exp** - কাজের অভিজ্ঞতা\n• **projects** - প্রজেক্টসমূহ\n• **edu** - শিক্ষা\n• **contact** - যোগাযোগ\n• **clear** - টার্মিনাল মুছুন" }
        ]
    },
    about: {
        title: "আমার সম্পর্কে",
        icon: "user",
        iconBg: "#00a884",
        messages: [
            { type: 'received', text: "হ্যালো! আমি শাকিবুল হাসান সোহাগ। 👋" },
            { type: 'received', text: "আমি একজন পরিশ্রমী এবং নমনীয় ব্যক্তি, যার বিভিন্ন ধরণের কাজে অভিজ্ঞতা রয়েছে। আমি দ্রুত নতুন জিনিস শিখতে পারি এবং বিভিন্ন পরিস্থিতিতে নিজেকে মানিয়ে নিতে পারি।" },
            { type: 'received', text: "আমি সমস্যা সমাধান করতে, দলের সাথে কাজ করতে এবং ব্যবসায়িক লক্ষ্য অর্জনে সাহায্য করতে পছন্দ করি। আমি এমন একটি চাকরি খুঁজছি যেখানে আমি আমার দক্ষতা ব্যবহার করতে পারব, আরও শিখতে পারব এবং আমার ক্যারিয়ারে উন্নতি করতে পারব।" }
        ]
    },
    skills: {
        title: "টেকনিক্যাল স্কিলস",
        icon: "code-2",
        iconBg: "#34b7f1",
        messages: [
            { type: 'received', text: "এখানে আমার টেকনিক্যাল টুলকিট দেওয়া হলো: 🛠️" },
            { type: 'received', text: "• **ERP সিস্টেম**: ব্যবস্থাপনা এবং সমস্যা সমাধানের দক্ষতা।" },
            { type: 'received', text: "• **ওএস রক্ষণাবেক্ষণ**: উইন্ডোজ এবং ম্যাক অপারেটিং সিস্টেম রক্ষণাবেক্ষণ।" },
            { type: 'received', text: "• **ওয়েব ডিজাইন**: এইচটিএমএল, সিএসএস, পিএসডি টু এইচটিএমএল।" },
            { type: 'received', text: "• **এসইও**: অফ-পেজ এসইও (ব্যাকলিঙ্ক)।" },
            { type: 'received', text: "• **হার্ডওয়্যার/সফটওয়্যার**: কম্পিউটার এবং প্রিন্টার/স্ক্যানার রক্ষণাবেক্ষণ ও সমস্যা সমাধান।" },
            { type: 'received', text: "• **নেটওয়ার্কিং**: নেটওয়ার্ক সমস্যা সমাধান এবং রক্ষণাবেক্ষণ।" },
            { type: 'received', text: "• **অফিস টুলস**: এমএস অফিস অ্যাডভান্সড, আউটলুক, এক্সেল।" }
        ]
    },
    experience: {
        title: "কাজের অভিজ্ঞতা",
        icon: "briefcase",
        iconBg: "#ffbc2c",
        messages: [
            { type: 'received', text: "আমার পেশাদার জীবন: 💼" },
            { type: 'received', text: "**এমআইএস অফিসার (আইসিটি/এমআইএস)** | বিগ বস কর্পোরেশন লিমিটেড (অ্যাপটেক গ্রুপ)\n*চলমান*\nদায়িত্ব: ইআরপি সিস্টেম অ্যাডমিনিস্ট্রেশন, ম্যানেজমেন্টের জন্য রিপোর্ট তৈরি, ডেটা বৈষম্য তদন্ত এবং অ্যাপ্লিকেশন সাপোর্ট।" },
            { type: 'received', text: "**কন্টেন্ট মডারেটর** | জেনেক্স ইনফোসিস লিমিটেড\n*মেয়াদ: ১ বছর*\nদায়িত্ব: প্রতিদিন প্রচুর পরিমাণে কন্টেন্ট পর্যালোচনা করার জন্য মডারেশন টুলস ব্যবহার করা।" }
        ]
    },
    projects: {
        title: "প্রজেক্টসমূহ",
        icon: "layers",
        iconBg: "#ff2c74",
        messages: [
            { type: 'received', text: "আমি বেশ কিছু চমৎকার প্রজেক্টে কাজ করেছি! 🚀" },
            { type: 'received', text: "১. **ইআরপি অ্যাক্সেস অ্যাডমিনিস্ট্রেশন**: কর্পোরেট ইআরপি সিস্টেমের ইউজার অ্যাক্সেস ম্যানেজমেন্ট।" },
            { type: 'received', text: "২. **ম্যানেজমেন্ট রিপোর্টিং**: ম্যানেজমেন্টের সিদ্ধান্তের জন্য নতুন বিশ্লেষণাত্মক রিপোর্ট তৈরি।" },
            { type: 'received', text: "৩. **এন্ড-ইউজার সাপোর্ট**: কারিগরি সমস্যা সমাধান এবং অ্যাপ্লিকেশন উন্নত করা।" }
        ]
    },
    edu: {
        title: "শিক্ষা",
        icon: "graduation-cap",
        iconBg: "#a450ff",
        messages: [
            { type: 'received', text: "শিক্ষাগত যোগ্যতা: 🎓" },
            { type: 'received', text: "**বিএসসি ইন সিএসই** | উত্তরা ইউনিভার্সিটি\n*অবস্থা: চলমান*\nবিভাগ: সিএসই | বোর্ড: প্রাইভেট" },
            { type: 'received', text: "**ডিপ্লোমা ইন সিএসই** | খুলনা পলিটেকনিক ইনস্টিটিউট\n*ফলাফল: ৩.৪৬ / ৪.০০*\nপাশের বছর: ২০২৩ | বোর্ড: টেকনিক্যাল" },
            { type: 'received', text: "**এসএসসি (বিজ্ঞান)** | জঙ্গল বাদল হাই স্কুল\n*ফলাফল: ৪.৮৯ / ৫.০০*\nপাশের বছর: ২০১৯ | বোর্ড: যশোর" }
        ]
    },
    personal: {
        title: "ব্যক্তিগত তথ্য",
        icon: "info",
        iconBg: "#007bff",
        messages: [
            { type: 'received', text: "অতিরিক্ত তথ্য: 📋" },
            { type: 'received', text: "**পিতার নাম:** মো. সামসুল আলম\n**মাতার নাম:** মোসা. সালমা বেগম\n**জন্ম তারিখ:** ১৫/০২/২০০১\n**ধর্ম:** ইসলাম\n**রক্তের গ্রুপ:** ও+" },
            { type: 'received', text: "**বর্তমান ঠিকানা:** ৩০ শরাবো, কাশিমপুর, গাজীপুর।\n**স্থায়ী ঠিকানা:** বসুন্দিয়া, সদর, যশোর।" }
        ]
    },
    contact: {
        title: "যোগাযোগ",
        icon: "phone",
        iconBg: "#25d366",
        messages: [
            { type: 'received', text: "যোগাযোগ করুন! 📞" },
            { type: 'received', text: "📧 ইমেইল: shakibuls31@gmail.com\n📱 মোবাইল: +৮৮০১৮৭৩-৪৪১৫৬১" },
            { type: 'received', text: "🔗 লিঙ্কডইন: [shakibul-hassan](https://www.linkedin.com/in/shakibul-hassan-861054290)" }
        ]
    }
};

let chatData = chatDataEn;

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

// Theme Toggle Logic (3-State Cycle: Dark -> Light -> Winter)
const themeToggle = document.getElementById('themeToggle');
const snowContainer = document.getElementById('snowContainer');
let snowflakeInterval = null;

function createSnowflake() {
    if (!document.body.classList.contains('winter-theme')) return;
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    snowContainer.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const body = document.body;
        
        if (body.classList.contains('light-theme')) {
            // Switch to Winter
            body.classList.remove('light-theme');
            body.classList.add('winter-theme');
            themeToggle.innerHTML = `<i data-lucide="snowflake"></i>`;
            // Start Snowing
            if (!snowflakeInterval) {
                snowflakeInterval = setInterval(createSnowflake, 200);
            }
        } else if (body.classList.contains('winter-theme')) {
            // Switch to Dark
            body.classList.remove('winter-theme');
            themeToggle.innerHTML = `<i data-lucide="moon"></i>`;
            // Stop Snowing
            clearInterval(snowflakeInterval);
            snowflakeInterval = null;
            snowContainer.innerHTML = '';
        } else {
            // Switch to Light
            body.classList.add('light-theme');
            themeToggle.innerHTML = `<i data-lucide="sun"></i>`;
        }
        
        lucide.createIcons();
    });
}

// Language Translations
const translations = {
    en: {
        profileName: "SHAKIBUL",
        searchInput: "Search or start new chat",
        terminal: "Terminal Bot",
        about: "About Me",
        skills: "Technical Skills",
        experience: "Work Experience",
        projects: "Projects",
        edu: "Education",
        personal: "Personal Info",
        contact: "Contact Me",
        welcomeText: "You can learn about me using the terminal bot or directly in the private chat box.",
        encrypted: "End-to-end encrypted",
        online: "online",
        typeMsg: "Type a message",
        refresh: "Refresh",
        exit: "Exit",
        modalTitle: "Profile Info",
        modalStatus: "Student & IT Professional",
        modalAbout: "About",
        modalLinkedIn: "LinkedIn",
        modalPhone: "Phone",
        viewProfile: "View Profile",
        lastMsgs: {
            terminal: "Type 'help' to start...",
            about: "Hi! I'm Shakibul Hasan Sohag...",
            skills: "Check out my tech stack!",
            experience: "IT Professional & ERP Specialist",
            projects: "View my latest work...",
            edu: "Academic background...",
            personal: "Personal details & address...",
            contact: "Let's get in touch!"
        }
    },
    bn: {
        profileName: "শাকিবুল",
        searchInput: "সার্চ করুন বা চ্যাট শুরু করুন",
        terminal: "টার্মিনাল বট",
        about: "আমার সম্পর্কে",
        skills: "টেকনিক্যাল স্কিলস",
        experience: "কাজের অভিজ্ঞতা",
        projects: "প্রজেক্টসমূহ",
        edu: "শিক্ষা",
        personal: "ব্যক্তিগত তথ্য",
        contact: "যোগাযোগ",
        welcomeText: "আপনি টার্মিনাল বট ব্যবহার করে অথবা সরাসরি প্রাইভেট চ্যাট বক্সের মাধ্যমে আমার সম্পর্কে জানতে পারেন।",
        encrypted: "এন্ড-টু-এন্ড এনক্রিপ্টেড",
        online: "অনলাইন",
        typeMsg: "একটি বার্তা লিখুন",
        refresh: "রিফ্রেশ",
        exit: "প্রস্থান",
        modalTitle: "প্রোফাইল তথ্য",
        modalStatus: "ছাত্র এবং আইটি প্রফেশনাল",
        modalAbout: "সম্পর্কে",
        modalLinkedIn: "লিঙ্কডইন",
        modalPhone: "ফোন",
        viewProfile: "প্রোফাইল দেখুন",
        lastMsgs: {
            terminal: "শুরু করতে 'help' লিখুন...",
            about: "হাই! আমি শাকিবুল হাসান সোহাগ...",
            skills: "আমার টেক স্ট্যাক দেখুন!",
            experience: "আইটি প্রফেশনাল এবং ইআরপি বিশেষজ্ঞ",
            projects: "আমার সাম্প্রতিক কাজ দেখুন...",
            edu: "শিক্ষাগত যোগ্যতা...",
            personal: "ব্যক্তিগত তথ্য ও ঠিকানা...",
            contact: "যোগাযোগ করুন!"
        }
    }
};

let currentLang = 'en';

function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Swap Chat Data
    chatData = lang === 'en' ? chatDataEn : chatDataBn;

    // Sidebar Header
    document.querySelector('.profile-name').textContent = t.profileName;
    document.getElementById('searchInput').placeholder = t.searchInput;

    // Chat List
    document.querySelectorAll('.chat-item').forEach(item => {
        const chatId = item.getAttribute('data-chat');
        if (t[chatId]) {
            item.querySelector('.chat-name').textContent = t[chatId];
            item.querySelector('.chat-last-msg').textContent = t.lastMsgs[chatId];
        }
    });

    // Welcome Screen
    document.querySelector('.welcome-screen h1').textContent = lang === 'en' ? 'Portfolio' : 'পোর্টফোলিও';
    document.querySelector('.welcome-screen p').textContent = t.welcomeText;
    document.querySelector('.welcome-footer span').textContent = t.encrypted;

    // Chat Area (if active)
    if (currentChatId) {
        chatTitle.textContent = t[currentChatId];
        chatStatus.textContent = t.online;
        
        // Reload messages in new language
        messagesContainer.innerHTML = '';
        chatData[currentChatId].messages.forEach(msg => {
            const msgDiv = document.createElement('div');
            msgDiv.className = `message ${msg.type}`;
            msgDiv.innerHTML = `
                ${parseMarkdown(msg.text)}
                <span class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            `;
            messagesContainer.appendChild(msgDiv);
        });
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    userInput.placeholder = t.typeMsg;

    // Dropdown
    document.getElementById('refreshBtn').textContent = t.refresh;
    document.getElementById('exitBtn').textContent = t.exit;

    // Modal
    document.querySelector('.modal-header span').textContent = t.modalTitle;
    document.querySelector('.modal-status').textContent = t.modalStatus;
    
    const infoItems = document.querySelectorAll('.info-item');
    if (infoItems.length >= 3) {
        infoItems[0].querySelector('span').textContent = t.modalAbout;
        infoItems[1].querySelector('span').textContent = t.modalLinkedIn;
        infoItems[1].querySelector('a').textContent = t.viewProfile;
        infoItems[2].querySelector('span').textContent = t.modalPhone;
    }
}

// Language Option Logic
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'bn' : 'en';
    updateLanguage(nextLang);
});

// Initial Load
window.onload = () => {
    lucide.createIcons();
    initProfileModal();
};
