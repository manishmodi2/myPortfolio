
// import { ArrowUp } from "lucide-react";

// export const Footer = () => {
//   return (
//     <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col items-center justify-center"> {/* Changed flex-wrap justify-between to flex-col items-center justify-center to center content */}
//       <p className="text-sm text-muted-foreground text-center mb-4 md:mb-0"> {/* Added text-center for the text, and adjusted margin for spacing */}
//         &copy; {new Date().getFullYear()} Manish Kumar. All rights reserved.
//       </p>
//       <a
//         href="#hero"
//         className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
//         aria-label="Back to top" // Added aria-label for better accessibility
//       >
//         <ArrowUp size={20} />
//       </a>
//     </footer>
//   );
// };



// // Footer.jsx
// import { ArrowUp, Linkedin, Github, Twitter, Instagram } from "lucide-react"; // Import necessary social icons

// export const Footer = () => {
//   return (
    
//     <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col items-center justify-center space-y-6 md:space-y-8">
//       {/* Social Media Links */}
//       <div className="flex space-x-6"> {/* Increased spacing between icons */}
//         <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
//           <Linkedin className="h-7 w-7 text-foreground/80 hover:text-primary transition-colors duration-300" /> {/* Slightly larger icons */}
//         </a>
//         <a href="https://github.com/manishmodi2" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
//           <Github className="h-7 w-7 text-foreground/80 hover:text-primary transition-colors duration-300" />
//         </a>
//         <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
//           <Twitter className="h-7 w-7 text-foreground/80 hover:text-primary transition-colors duration-300" />
//         </a>
//         <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
//           <Instagram className="h-7 w-7 text-foreground/80 hover:text-primary transition-colors duration-300" />
//         </a>
//       </div>

//       {/* Copyright Text */}
//       <p className="text-sm text-muted-foreground text-center">
//         &copy; {new Date().getFullYear()} Manish Kumar. All rights reserved.
//       </p>

//       {/* Back to Top Button */}
//       <a
//         href="#hero"
//         className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300 shadow-md hover:shadow-lg" // Enhanced styling for the button
//         aria-label="Back to top" // Added for accessibility
//       >
//         <ArrowUp size={24} /> {/* Slightly larger icon for better visibility */}
//       </a>
//     </footer>
//   );
// };
    


// Footer.jsx
import { ArrowUp, Linkedin, Github, Twitter, Instagram } from "lucide-react"; // Import necessary social icons

export const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-card relative border-t border-border mt-12 flex flex-col items-center justify-center space-y-4"> {/* Reduced py, mt, and space-y for a smaller height */}
      {/* Connect With Me Text */}
      <div className="text-lg font-semibold text-foreground">Connect With Me</div> {/* Reverted to text-lg */}

      {/* Social Media Links */}
      <div className="flex space-x-8"> {/* Increased spacing between icons for better visual separation */}
        <a href="https://www.linkedin.com/in/manish-kumar-032b0b302/"target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <Linkedin className="h-7 w-7 text-foreground/80 hover:text-primary transition-colors duration-300" /> {/* Reverted to h-7 w-7 */}
        </a>
        <a href="https://github.com/manishmodi2" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <Github className="h-7 w-7 text-foreground/80 hover:text-primary transition-colors duration-300" /> {/* Reverted to h-7 w-7 */}
        </a>
        <a href="https://x.com/Manishmodi02" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
          <Twitter className="h-7 w-7 text-foreground/80 hover:text-primary transition-colors duration-300" /> {/* Reverted to h-7 w-7 */}
        </a>
        <a href="https://www.instagram.com/manishkumarmodi12/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
          <Instagram className="h-7 w-7 text-foreground/80 hover:text-primary transition-colors duration-300" /> {/* Reverted to h-7 w-7 */}
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-sm text-muted-foreground text-center"> {/* Reverted to text-sm */}
        &copy; {new Date().getFullYear()} Manish Kumar. All rights reserved.
      </p>

      {/* Back to Top Button */}
      <a
        href="#hero"
        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300 shadow-md hover:shadow-lg" // Reverted padding and shadow
        aria-label="Back to top" // Added for accessibility
      >
        <ArrowUp size={24} /> {/* Reverted to size={24} */}
      </a>
    </footer>
  );
};
