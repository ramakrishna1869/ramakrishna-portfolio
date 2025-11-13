
export interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "What's new? My blog and news.",
    date: "Oct 15",
    summary: "Latest updates about my projects and thoughts on web development trends.",
    content: `
      <h2>What's new? My blog and news.</h2>
      
      <p>Welcome to my latest blog post! In this article, I'll be sharing some updates about my recent projects and thoughts on current web development trends.</p>
      
      <p>Over the past few months, I've been diving deeper into modern JavaScript frameworks, particularly focusing on React and its ecosystem. The component-based architecture of React has allowed me to build more maintainable and scalable applications.</p>
      
      <p>One of the most exciting developments has been the integration of TypeScript into my workflow. Strong typing has significantly reduced runtime errors and improved the overall quality of my code.</p>
      
      <h3>Recent Projects</h3>
      
      <p>I've recently completed a major project using the MERN stack (MongoDB, Express, React, and Node.js). This project was challenging but extremely rewarding, as it allowed me to implement complex features while maintaining a clean architecture.</p>
      
      <p>Another area I've been exploring is performance optimization. Web performance is becoming increasingly important, and I've been learning techniques to minimize bundle sizes and improve loading times for my applications.</p>
      
      <h3>What's Next?</h3>
      
      <p>Looking ahead, I'm excited to explore server components and the latest features in React 18. The concurrent rendering capabilities open up new possibilities for creating even more responsive user interfaces.</p>
      
      <p>I'll be sharing more detailed technical articles on specific aspects of modern web development in the coming weeks, so stay tuned!</p>
    `
  },
  {
    id: 2,
    title: "How do you see time working for projects?",
    date: "Oct 12",
    summary: "Insights on project management and time estimation for developers.",
    content: `
      <h2>How do you see time working for projects?</h2>
      
      <p>Time management is one of the most challenging aspects of software development projects. In this post, I want to share some thoughts on how I approach time estimation and project planning.</p>
      
      <p>First, it's important to acknowledge that software development time estimates are notoriously difficult to get right. There are many factors that can affect the actual time required to complete a task, from unforeseen technical challenges to changing requirements.</p>
      
      <h3>My Approach to Time Estimation</h3>
      
      <p>I've found that breaking down projects into smaller, more manageable tasks helps with creating more accurate time estimates. Rather than trying to estimate the time for an entire feature, I break it down into specific components and estimate each one separately.</p>
      
      <p>Another technique I use is the "multiply by three" rule: take my initial estimate and triple it. While this might seem excessive, it often accounts for the unforeseen complications that inevitably arise during development.</p>
      
      <h3>Time-Boxing and the Pomodoro Technique</h3>
      
      <p>For actual development work, I'm a big fan of time-boxing and the Pomodoro Technique. Working in focused 25-minute intervals with short breaks in between helps maintain productivity and prevents burnout on longer projects.</p>
      
      <p>I also make sure to allocate specific time for research, experimentation, and refactoring. These activities are essential for quality software development but are often overlooked in initial project estimates.</p>
      
      <h3>Communication is Key</h3>
      
      <p>Perhaps most importantly, I maintain clear communication with stakeholders about project timelines. Being transparent about progress, challenges, and updated estimates builds trust and helps manage expectations.</p>
      
      <p>What are your thoughts on time management for development projects? I'd love to hear your experiences and techniques in the comments!</p>
    `
  },
  {
    id: 3,
    title: "Ego and empathy in design",
    date: "Oct 9",
    summary: "Reflections on the balance between ego and empathy in UX/UI design.",
    content: `
      <h2>Ego and empathy in design</h2>
      
      <p>As developers, we often focus primarily on technical solutions, but understanding the human aspects of design is equally important. In this post, I want to explore the balance between ego and empathy in the design process.</p>
      
      <p>Design is inherently personal. When we create something, we naturally invest a part of ourselves in it. This personal connection can lead to what I call "ego-driven design" — where we prioritize our own preferences and ideas over the needs of the users.</p>
      
      <h3>The Role of Empathy</h3>
      
      <p>Empathy serves as the counterbalance to ego in design. By putting ourselves in the users' shoes, we can create experiences that truly serve their needs rather than just showcasing our technical prowess or aesthetic preferences.</p>
      
      <p>User research, usability testing, and gathering feedback are all ways to inject empathy into the design process. These activities help us understand the actual problems users face, rather than the problems we imagine they have.</p>
      
      <h3>Finding the Balance</h3>
      
      <p>The best designs come from finding the right balance between ego and empathy. We need enough ego to have conviction in our ideas and to push boundaries, but enough empathy to ensure our solutions actually solve real problems for real people.</p>
      
      <p>I've found that collaboration is one of the best ways to achieve this balance. Working with others helps check our egos and brings different perspectives to the table, ultimately leading to better design solutions.</p>
      
      <h3>Continuous Improvement</h3>
      
      <p>Balancing ego and empathy is not a one-time task but a continuous process. As we receive feedback and learn from user interactions with our designs, we need to be willing to iterate and improve, even if that means letting go of ideas we were initially attached to.</p>
      
      <p>Have you struggled with the balance between ego and empathy in your own work? What techniques have you found helpful? I'd love to continue this conversation in the comments.</p>
    `
  }
];
