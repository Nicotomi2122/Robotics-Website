
function setupDarkModeToggle() {
    var button = document.createElement("button");
    button.id = "darkModeToggle";
    button.textContent = "🌓 Dark Mode";

    
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "10px 15px";
    button.style.backgroundColor = "#4f7c82";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.zIndex = "999";
    button.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";

    document.body.appendChild(button);

    
    var darkMode = localStorage.getItem("darkMode") === "true";
    applyDarkMode(darkMode);
    button.textContent = darkMode ? "🌞 Light Mode" : "🌓 Dark Mode";

    button.addEventListener("click", function () {
        darkMode = !darkMode;
        localStorage.setItem("darkMode", darkMode);
        applyDarkMode(darkMode);
        button.textContent = darkMode ? "🌞 Light Mode" : "🌓 Dark Mode";
    });
}

function applyDarkMode(enabled) {
    document.body.style.transition = "background-color 0.3s, color 0.3s";
    document.body.style.backgroundColor = enabled ? "#111" : "#f4f4f4";
    document.body.style.color = enabled ? "#eee" : "#333";
}


function setupBackToTopButton() {
    var topBtn = document.createElement("button");
    topBtn.textContent = "⬆ Top";

    topBtn.style.position = "fixed";
    topBtn.style.right = "20px";
    topBtn.style.bottom = "70px";
    topBtn.style.display = "none";
    topBtn.style.padding = "10px 15px";
    topBtn.style.backgroundColor = "#4f7c82";
    topBtn.style.color = "#fff";
    topBtn.style.border = "none";
    topBtn.style.borderRadius = "5px";
    topBtn.style.cursor = "pointer";
    topBtn.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    topBtn.style.zIndex = "999";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", function () {
        topBtn.style.display = window.scrollY > 150 ? "block" : "none";
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


function setupLogoPulse() {
    var logo = document.querySelector("img");
    if (logo) {
        logo.style.transition = "transform 0.3s ease";
        logo.addEventListener("click", function () {
            logo.style.transform = "scale(1.6)";
            setTimeout(function () {
                logo.style.transform = "scale(1)";
            }, 200);
        });
    }
}


window.addEventListener("DOMContentLoaded", function () {
    setupDarkModeToggle();
    setupBackToTopButton();
    setupLogoPulse();
});


function createFloatingBubbles() {
    var container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.zIndex = "0";
    container.style.overflow = "hidden";
    container.style.pointerEvents = "none";
    document.body.appendChild(container);

    for (var i = 0; i < 25; i++) {
        var bubble = document.createElement("div");
        var size = Math.random() * 20 + 10;
        bubble.style.width = size + "px";
        bubble.style.height = size + "px";
        bubble.style.position = "absolute";
        bubble.style.left = Math.random() * 100 + "%";
        bubble.style.bottom = "-40px";
        bubble.style.borderRadius = "50%";
        bubble.style.background = "rgba(79, 124, 130, 0.3)";
        bubble.style.boxShadow = "0 0 8px rgba(79, 124, 130, 0.6)";
        bubble.style.animation = "rise " + (8 + Math.random() * 10) + "s linear infinite";
        container.appendChild(bubble);
    }

    var style = document.createElement("style");
    style.textContent =
        "@keyframes rise {" +
        "0% { transform: translateY(0) scale(1); opacity: 1; }" +
        "100% { transform: translateY(-120vh) scale(1.5); opacity: 0; }" +
        "}";
    document.head.appendChild(style);
}
window.addEventListener("DOMContentLoaded", function () {
    setupDarkModeToggle();
    setupBackToTopButton();
    setupLogoPulse();
    createFloatingBubbles();
});


function setupSparkleTrail() {
    var sparkleContainer = document.createElement("div");
    sparkleContainer.style.position = "fixed";
    sparkleContainer.style.top = "0";
    sparkleContainer.style.left = "0";
    sparkleContainer.style.width = "100%";
    sparkleContainer.style.height = "100%";
    sparkleContainer.style.pointerEvents = "none";
    sparkleContainer.style.zIndex = "9999";
    document.body.appendChild(sparkleContainer);

    function createSparkle(x, y) {
        var sparkle = document.createElement("div");
        sparkle.style.position = "absolute";
        sparkle.style.left = x + "px";
        sparkle.style.top = y + "px";
        sparkle.style.width = "6px";
        sparkle.style.height = "6px";
        sparkle.style.background = "rgba(255, 255, 255, 0.8)";
        sparkle.style.borderRadius = "50%";
        sparkle.style.boxShadow = "0 0 8px #00f0ff";
        sparkle.style.transition = "opacity 0.4s ease-out, transform 0.4s ease-out";
        sparkleContainer.appendChild(sparkle);

        setTimeout(function () {
            sparkle.style.opacity = "0";
            sparkle.style.transform = "scale(1.8)";
        }, 10);

        setTimeout(function () {
            sparkleContainer.removeChild(sparkle);
        }, 400);
    }

    var targets = document.querySelectorAll("a, button");
    for (var i = 0; i < targets.length; i++) {
        targets[i].addEventListener("mousemove", function (e) {
            createSparkle(e.pageX, e.pageY);
        });
    }
}
	window.addEventListener("DOMContentLoaded", function () {
    setupDarkModeToggle();
    setupBackToTopButton();
    setupLogoPulse();
    createFloatingBubbles();
    setupSparkleTrail();
});

document.addEventListener('DOMContentLoaded', function() {
    createFloatingBubblesWithRobots();
});

function createFloatingBubblesWithRobots() {
    var container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = '0';
    container.style.overflow = 'hidden';
    container.style.pointerEvents = 'none'; 
    document.body.appendChild(container);

    function createBubble() {
        var bubble = document.createElement('div');
        var size = Math.random() * 40 + 20; 
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.position = 'absolute';
        bubble.style.left = Math.random() * 100 + '%'; 
        bubble.style.bottom = '-40px'; 
        bubble.style.borderRadius = '50%';
        bubble.style.background = 'rgba(79, 124, 130, 0.4)';
        bubble.style.boxShadow = '0 0 8px rgba(79, 124, 130, 0.6)';
        bubble.style.animation = 'rise ' + (8 + Math.random() * 10) + 's linear infinite';
        container.appendChild(bubble);

        
        var robotImg = document.createElement('img');
        robotImg.src = 'ROBOTICS LOGO.png'; 
        robotImg.style.position = 'absolute';
        robotImg.style.top = '50%';
        robotImg.style.left = '50%';
        robotImg.style.transform = 'translate(-50%, -50%)'; 
        robotImg.style.width = size * 0.7 + '15px'; 
        robotImg.style.height = 'auto';
        bubble.appendChild(robotImg);
    }

    
    setInterval(createBubble, 500);  

    
    var style = document.createElement('style');
    style.textContent =
        '@keyframes rise {' +
        '0% { transform: translateY(0) scale(1); opacity: 1; }' +
        '100% { transform: translateY(-120vh) scale(1.5); opacity: 0; }' +
        '}';
    document.head.appendChild(style);
}
document.addEventListener("DOMContentLoaded", function () {
    var logo = document.getElementById("draggableLogo");
    var isDragging = false;
    var offsetX, offsetY;

    logo.addEventListener("mousedown", function (e) {
        isDragging = true;
        offsetX = e.clientX - logo.getBoundingClientRect().left;
        offsetY = e.clientY - logo.getBoundingClientRect().top;
        logo.style.transition = "none";
    });

    document.addEventListener("mousemove", function (e) {
        if (isDragging) {
            logo.style.left = e.clientX - offsetX + "px";
            logo.style.top = e.clientY - offsetY + "px";
        }
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
        logo.style.transition = "all 0.2s ease";
    });
});

