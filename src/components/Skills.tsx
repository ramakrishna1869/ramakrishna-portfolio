
import React from 'react';
import { cn } from '@/lib/utils';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "HTML & CSS", level: 85 },
      { name: "Next.js", level: 80 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 80 },
    ]
  },
  {
    title: "Programming",
    skills: [
      { name: "Java", level: 90 },
      { name: "C Language", level: 85 },
      { name: "Python", level: 85 },
      { name: "Data Structures", level: 90 },
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container-custom">
        <div className="mb-12">
          <p className="section-label">— Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold heading-underline mb-6">
            My Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-background p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              
              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress bg-primary" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
