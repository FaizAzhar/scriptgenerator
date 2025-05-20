function generateNavbar() {
    return `
<section id="navigation_bar">
<a href="../pages/site.html" style="float:left;background-color:black;padding:7px;">
    <img src="../assets/head-icon.png" style="width:32px;height:32px">
</a>
    <ul>
        <li><a href="../pages/about.html">About</a></li>
        <li>
            <div class="dropdown">
                <button class="dropbtn">Generator</button>
                <div class="dropdown-content">
                    <a href="../pages/mrscript.html">MRSCRIPT</a>
                    <a href="../pages/dms.html">DMS</a>
                    <a href="#crunch">CRUNCH</a>
                </div>
            </div>
        </li>
        <li>
            <div class="dropdown">
                <button class="dropbtn">Tutorials</button>
                <div class="dropdown-content">
                    <a href="../pages/tutorial-mrscript.html">MRSCRIPT</a>
                    <a href="../pages/tutorial-dms.html">DMS</a>
                    <a href="#crunchtutor">CRUNCH</a>
                </div>
            </div>
        </li>
    </ul>
</section>`;
}

// When DOM is ready, append the nav to a container or straight to body:
document.addEventListener('DOMContentLoaded', () => {
  // Option A: to a specific container:
  // document.getElementById('nav-container').innerHTML = generateNavigationBarHTML();

  // Option B: directly into body:
  document.body.insertAdjacentHTML('afterbegin', generateNavbar());
});