import "./Footer.css";

export const Footer = () => {
    return (
        <footer>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            <div className="title">
            <p className="foot">♡Book-Dorm♡ &copy;All rights reserved</p>
            </div>
            <div className="social">
                <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i>    </a>
                <a href="https://discord.com/" target="_blank"><i class="fa-brands fa-discord"></i></a>
            </div>
        </footer>
    );
};