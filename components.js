const loadTopNav = () => {
  document.getElementById("top-nav").innerHTML = `
    <nav>
        <div class="brand-area">
            <a href="index.html" class="brand">
                <img src="assets/ifm-logo.png" alt="Industrial Floor Maintenance Logo" />
                <b>Industrial Floor Maintenance</b>
            </a>
            <div class="contact">
                <span>P.O. Box 4183, Hopkins, MN 55343-7343</span>
                <span><a href="tel:7635661611">(763) 566-1611</a></span>
                <span>
                    <a href="mailto:sales@industrialfloormaintenance.com">
                        sales@industrialfloormaintenance.com
                    </a>
                </span>
            </div>
        </div>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="sales.html">Sales</a>
            <a href="service.html">Service</a>
            <a href="parts.html">Parts</a>
            <a href="soaps.html">Soaps</a>
        </div>
    </nav>
`;
};

const loadFooter = () => {
  document.getElementById("footer").innerHTML = 
    `
        <footer>
            Industrial Floor Maintenance &#169; 2023 &#8212; All rights reserved
        </footer>
    `;
};

loadTopNav();
loadFooter();
