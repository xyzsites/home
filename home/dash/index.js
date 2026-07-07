const log = document.getElementById('log');
const searchInput = document.getElementById('searchInput');
const tiles = document.querySelectorAll('.tile');
const headers = document.querySelectorAll('.cat-header');

 // Function to add log entries
function addLog(message, type = '') {
  const time = new Date().toLocaleTimeString('en-GB', { hour12: false });
  const entry = document.createElement('div');
  entry.className = `log-entry ${type}`;
  entry.innerHTML = `<span>[${time}]</span> ${message}`;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
  }

 // Search logic
searchInput.addEventListener('input', () => {
 const term = searchInput.value.toLowerCase();
 tiles.forEach(tile => {
 const isMatch = tile.getAttribute('data-name').toLowerCase().includes(term) || 
 tile.innerText.toLowerCase().includes(term);
 tile.style.display = isMatch ? 'flex' : 'none';
 });
 headers.forEach(h => {
 let next = h.nextElementSibling;
 let visible = false;
 while(next && !next.classList.contains('cat-header')) {
 if(next.style.display !== 'none') visible = true;
 next = next.nextElementSibling;
                       }
 h.style.display = visible ? 'flex' : 'none';
    });
  });

 // Click Tracking
 tiles.forEach(tile => {
 tile.addEventListener('click', (e) => {
 const siteName = tile.querySelector('span').innerText;
 addLog(`ACCESSING NODE: ${siteName}...`, 'warn');
   });
 });

 // Initial visual flavor
 setTimeout(() => { document.getElementById('cmdText').innerText = "ls --all nodes"; }, 1000);
