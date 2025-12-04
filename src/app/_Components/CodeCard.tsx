import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeCard = () => {
  const code = `const Profile = {
  name: 'Towfiq Islam',
  role: 'Front-End Developer',
  seniority: 'Mid-Level',
  location: 'Bangladesh',
  hardWorker: true,
  quickLearner: true,
  yearsOfExperience: 1,
  skills: [
    'React', 'Next.js', 'JavaScript',
    'TypeScript', 'TailwindCSS', 'NextAuth',
    'Redux', 'Wix', 'Node.js', 'Express', 'JWT',
    'Zod', 'MongoDB', 'Mongoose', 'PostgreSQL',
    'Prisma', 'Firebase', 'Figma', 'GitHub',
    'Git', 'Vercel', 'Netlify'
  ],
};

export default Profile;`;

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl border border-gray-500 code-card shadow-2xl shadow-black/50 overflow-hidden">
      {/* Top bar - macOS style */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-500">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-auto text-sm text-muted-foreground">
          developer.ts
        </span>
      </div>

      {/* Code Highlight */}
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language="typescript"
          style={atomDark}
          showLineNumbers
          customStyle={{
            background: "transparent",
            padding: "20px",
            fontSize: "14px",
            margin: 0,
          }}
          lineNumberStyle={{
            color: "hsl(215 15% 40%)",
            paddingRight: "1em",
            minWidth: "2em",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>

      {/* Status bar */}
      <div className="flex justify-between px-4 py-2 border-t border-gray-500 text-muted-foreground text-xs bg-transparent">
        <span>UTF-8</span>
        <span>TypeScript</span>
        <span>Ln 12, Col 2</span>
      </div>
    </div>
  );
};

export default CodeCard;
