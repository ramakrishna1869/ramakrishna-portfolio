
export const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: React and Beyond",
    date: "May 10, 2024",
    content: `
      <p>Web development continues to evolve at a rapid pace, with new frameworks and technologies emerging regularly. React has maintained its position as one of the most popular frontend libraries for years, but what does the future hold?</p>
      
      <h2>React's Continued Evolution</h2>
      <p>React 18 brought significant improvements with concurrent rendering, automatic batching of updates, and the new Suspense features. These changes have made React applications faster and more responsive than ever before.</p>
      
      <p>The React team continues to innovate with features like Server Components, which allow developers to render components on the server for improved performance and reduced client-side JavaScript.</p>
      
      <h2>Beyond React: What's Next?</h2>
      <p>While React remains dominant, other frameworks are making significant strides:</p>
      
      <ul>
        <li><strong>Svelte</strong> - Offering a compile-time approach to reactivity that results in highly optimized JavaScript.</li>
        <li><strong>Solid</strong> - Inspired by React but with a fine-grained reactivity system that eliminates the need for a virtual DOM.</li>
        <li><strong>Qwik</strong> - Focusing on resumability rather than hydration for extremely fast initial loads.</li>
      </ul>
      
      <h2>The Rise of Meta-Frameworks</h2>
      <p>Meta-frameworks like Next.js, Remix, and Astro are becoming increasingly popular as they provide more comprehensive solutions including routing, data fetching, and server-side rendering out of the box.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development will likely be shaped by a focus on performance, developer experience, and end-user experience. While React will continue to be a major player, the ecosystem is rich with alternatives and complementary tools that push the boundaries of what's possible on the web.</p>
    `,
  },
  {
    id: 2,
    title: "Getting Started with TypeScript in React Projects",
    date: "April 22, 2024",
    content: `
      <p>TypeScript has become increasingly popular in the React ecosystem due to its ability to catch errors early and improve code quality. This post will guide you through setting up TypeScript in a React project and highlight best practices.</p>
      
      <h2>Setting Up TypeScript in React</h2>
      <p>Getting started with TypeScript in a React project is straightforward, especially with modern tooling:</p>
      
      <pre><code>npx create-react-app my-app --template typescript</code></pre>
      
      <p>Or if you're using Vite:</p>
      
      <pre><code>npm create vite@latest my-app -- --template react-ts</code></pre>
      
      <h2>Basic TypeScript Patterns in React</h2>
      
      <p>Here are some common patterns for typing React components:</p>
      
      <pre><code>// Typing props
type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};</code></pre>
      
      <h2>Using Hooks with TypeScript</h2>
      
      <p>TypeScript works well with React hooks:</p>
      
      <pre><code>// useState with type inference
const [count, setCount] = useState(0);

// useState with explicit typing
const [user, setUser] = useState<User | null>(null);

// useRef with TypeScript
const inputRef = useRef<HTMLInputElement>(null);</code></pre>
      
      <h2>Benefits of TypeScript in React Projects</h2>
      
      <ul>
        <li><strong>Better developer experience</strong> with autocompletion and inline documentation</li>
        <li><strong>Catching errors early</strong> during development rather than runtime</li>
        <li><strong>Self-documenting code</strong> that's easier for team members to understand</li>
        <li><strong>Safer refactoring</strong> with immediate feedback on type errors</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>TypeScript adds tremendous value to React projects by providing type safety and improved developer experience. While there is a learning curve, the benefits of using TypeScript with React far outweigh the initial investment in learning the type system.</p>
    `,
  },
  {
    id: 3,
    title: "Building Responsive UIs with Tailwind CSS",
    date: "March 18, 2024",
    content: `
      <p>Tailwind CSS has transformed how many developers approach styling web applications. Its utility-first approach provides a fast and efficient way to build responsive user interfaces without writing custom CSS. Let's explore how to use Tailwind effectively in your projects.</p>
      
      <h2>Getting Started with Tailwind CSS</h2>
      
      <p>Installing Tailwind in a modern web project is simple:</p>
      
      <pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
      
      <p>Then add the paths to your template files in your tailwind.config.js:</p>
      
      <pre><code>/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
      
      <h2>Responsive Design with Tailwind</h2>
      
      <p>Tailwind makes responsive design straightforward with its breakpoint prefixes:</p>
      
      <pre><code>&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;
  &lt;!-- Content here --&gt;
&lt;/div&gt;</code></pre>
      
      <p>This creates a one-column layout on mobile, two columns on medium-sized screens, and three columns on larger screens.</p>
      
      <h2>Component Patterns with Tailwind</h2>
      
      <p>While Tailwind promotes utility classes, you can still create reusable components:</p>
      
      <pre><code>const Card = ({ title, children }) => {
  return (
    &lt;div className="bg-white rounded-lg shadow-md p-6"&gt;
      &lt;h2 className="text-xl font-bold mb-4"&gt;{title}&lt;/h2&gt;
      &lt;div&gt;{children}&lt;/div&gt;
    &lt;/div&gt;
  );
};</code></pre>
      
      <h2>Dark Mode Support</h2>
      
      <p>Tailwind makes it easy to support dark mode:</p>
      
      <pre><code>// In tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}

// In your HTML
&lt;div className="bg-white text-black dark:bg-gray-800 dark:text-white"&gt;
  Dark mode supported content
&lt;/div&gt;</code></pre>
      
      <h2>Conclusion</h2>
      
      <p>Tailwind CSS provides a powerful approach to building responsive UIs that's both flexible and maintainable. By embracing its utility-first philosophy and combining it with component-based architecture, you can build beautiful interfaces quickly without sacrificing quality or performance.</p>
    `,
  },
];
